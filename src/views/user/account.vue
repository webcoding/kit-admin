<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-form
      :inline="true"
      :model="queryForm">
        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="账户" v-model="queryForm.keywords">
        </el-input>
        <!-- <el-select clearable style="width: 90px" class="filter-item" v-model="queryForm.importance" :placeholder="$t('table.importance')">
          <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
          </el-option>
        </el-select> -->
        <!-- <el-select clearable class="filter-item" style="width: 130px" v-model="queryForm.role" placeholder="角色">
          <el-option v-for="item in roles" :key="item.id" :label="item.value+'('+item.id+')'" :value="item.id">
          </el-option>
        </el-select> -->
        <!-- <el-select @change='handleFilter' style="width: 140px" class="filter-item" v-model="queryForm.sort">
          <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
          </el-option>
        </el-select> -->
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加</el-button>
        <!-- <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves icon="el-icon-download" @click="handleDownload">{{$t('table.export')}}</el-button> -->
        <!-- <el-checkbox class="filter-item" style='margin-left:15px;' @change='tableKey=tableKey+1' v-model="showReviewer">{{$t('table.reviewer')}}</el-checkbox> -->
      </el-form>
    </div>

    <el-table
      :key="tableKey"
      :data="list"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      highlight-current-row
      style="width: 100%">
      <el-table-column align="center" label="ID" width="300">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="账号">
        <template slot-scope="scope">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="最近访问">
        <template slot-scope="scope">
          <span>{{scope.row.lastVisit | formatDate('Y-M-D H:F')}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column width="150px" align="center" :label="$t('table.date')">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column min-width="150px" :label="$t('table.title')">
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.title}}</span>
          <el-tag>{{scope.row.type | typeFilter}}</el-tag>
        </template>
      </el-table-column> -->
      <!-- <el-table-column width="110px" align="center" :label="$t('table.author')">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column width="110px" v-if='showReviewer' align="center" :label="$t('table.reviewer')">
        <template slot-scope="scope">
          <span style='color:red;'>{{scope.row.reviewer}}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column width="80px" :label="$t('table.importance')">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
        </template>
      </el-table-column> -->
      <!-- <el-table-column align="center" :label="$t('table.readings')" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click='handleFetchPv(scope.row.pageviews)'>{{scope.row.pageviews}}</span>
          <span v-else>0</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column class-name="status-col" :label="$t('table.status')" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
          <!-- <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">{{$t('table.publish')}}
          </el-button> -->
          <!-- <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">{{$t('table.draft')}}
          </el-button> -->
          <!-- <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row, 'delete')">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryForm.page" :page-sizes="[10, 20,30, 50]" :page-size="queryForm.size" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='min-width:200px; max-width: 400px; margin-left:50px;'>
        <!-- <el-form-item :label="$t('table.type')" prop="type">
          <el-select class="filter-item" v-model="temp.type" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item> -->
        <!-- <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date">
          </el-date-picker>
        </el-form-item> -->
        <!-- <el-form-item label="头像" prop="avatar">
          <el-input v-model="temp.avatar"></el-input>
        </el-form-item> -->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="temp.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="temp.password"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select class="filter-item" v-model="temp.role" placeholder="请选择">
            <el-option v-for="item in roles" :key="item.id" :label="item.value" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="temp.description"></el-input>
        </el-form-item>
        <!-- <el-form-item :label="$t('table.status')">
          <el-select class="filter-item" v-model="temp.status" placeholder="Please select">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="temp.remark">
          </el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

    <!-- <el-dialog title="Reading statistics" :visible.sync="dialogPvVisible">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel"> </el-table-column>
        <el-table-column prop="pv" label="Pv"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import api from '@/config/api';
import { copy } from 'kit-qs'
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // 水波纹指令
// import { parseTime } from '@/utils'

const roles = [
  { id: 1, value: 'admin' },
  { id: 2, value: 'manager' },
  // { id: 3, value: 'editor' },
  // { id: 4, value: 'guest' },
]

// arr to obj ,such as { CN : "China", US : "USA" }
const roleIds = roles.reduce((obj, item) => {
  obj[item.id] = item.value
  return obj
}, {})

const defaultInfo = {
  id: undefined,
  email: '',
  password: '',
  roleIds: [],
  // avatar: '',
  username: '',
  mobile: '',
  description: '',
};

export default {
  name: 'complexTable',
  directives: {
    waves,
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      queryForm: {
        page: 1,
        size: 20,
        keywords: '',
        // role: undefined,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
        // sort: '+id',
      },
      // importanceOptions: [1, 2, 3],
      roles,
      // sortOptions: [
      //   { label: 'ID Ascending', key: '+id' },
      //   { label: 'ID Descending', key: '-id' },
      // ],
      // statusOptions: ['published', 'draft', 'deleted'],
      // showReviewer: false,
      temp: {
        ...defaultInfo,
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新增',
      },
      // dialogPvVisible: false,
      // pvData: [],
      rules: {
        // type: [{
        //   required: true,
        //   message: 'type is required',
        //   trigger: 'change',
        // }],
        // timestamp: [{
        //   type: 'date',
        //   required: true,
        //   message: 'timestamp is required',
        //   trigger: 'change',
        // }],
        // username: [{
        //   required: true,
        //   message: '用户名必须填写',
        //   trigger: 'blur',
        // }],
        password: [{
          required: true,
          message: '密码必须填写',
          trigger: 'blur',
        }],
        email: [{
          required: true,
          message: '邮箱必须填写',
          trigger: 'blur',
        }],
        role: [{
          required: true,
          message: '角色必须选择',
          trigger: 'blur',
        }],
      },
      downloadLoading: false,
    }
  },
  filters: {
    sexFilter(value) {
      const sexMap = ['未知', '男', '女'];
      return sexMap[value];
    },
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger',
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return roleIds[type]
    },
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      api.getUserList({
        ...this.queryForm,
      }, (res) => {
        this.listLoading = false
        this.list = res.data.list
        this.total = res.data.total
      }, (err) => {

      })
      // fetchList(this.queryForm).then((res) => {
      //   this.list = res.data.items
      //   this.total = res.data.total
      //   this.listLoading = false
      // })
    },
    handleFilter() {
      this.queryForm.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.queryForm.size = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.queryForm.page = val
      this.getList()
    },
    handleModifyStatus(row, status) {
      switch (status) {
        case 'delete':
          this.handleDelete(row);
          break;
        default:
          // do nothing...
      }
      this.$message({
        message: '操作成功',
        type: 'success',
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        ...defaultInfo,
      }
    },
    /* eslint dot-notation: 0 */
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          api.saveUser({
            ...this.temp,
          }, (res) => {
            this.dialogFormVisible = false
            Object.assign(this.temp, res.data);
            this.list.unshift(this.temp)
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000,
            })
          }, (err) => {

          });
        }
      })
    },
    handleUpdate(row) {
      this.temp = copy(row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = copy(this.temp)
          api.updateUser({
            ...tempData,
          }, (res) => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000,
            })
          }, (err) => {

          });
        }
      })
    },
    // 不能删除自己，不能删除最后一个用户，不能删除超管
    handleDelete(row) {
      api.delUser({
        ids: row.id,
      }, (res) => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000,
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
      }, (err) => {
        this.$message({
          message: '删除失败',
          type: 'danger',
        })
      })
    },
    handleFetchPv(pv) {
      // fetchPv(pv).then((res) => {
      //   this.pvData = res.data.pvData
      //   this.dialogPvVisible = true
      // })
    },
    handleDownload() {
      this.downloadLoading = true
      // import('@/vendor/Export2Excel').then((excel) => {
      //   const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
      //   const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
      //   const data = this.formatJson(filterVal, this.list)
      //   excel.export_json_to_excel({
      //     header: tHeader,
      //     data,
      //     filename: 'table-list',
      //   })
      //   this.downloadLoading = false
      // })
    },
    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map((j) => {
    //     if (j === 'timestamp') {
    //       return parseTime(v[j])
    //     } else {
    //       return v[j]
    //     }
    //   }))
    // },
  },
}
</script>

<style lang="stylus" scoped>
.filter-container {
  margin-bottom: 16px;
}
.pagination-container {
  margin-top: 16px;
}
</style>

