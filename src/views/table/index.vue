<template>
  <div class="app-container">
    <el-table
    :data="list"
    v-loading.body="listLoading"
    element-loading-text="Loading"
    header-row-class-name="el-table-head"
    border stripe fit highlight-current-row
    >
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="130">
        <template slot-scope="scope">
          <router-link :to="{ path: '/example' }">
            <el-button type="text" size="small" @click.prevent.stop="onUpdate(scope.row.id, scope.row.channel)">编辑</el-button>
          </router-link>
          <el-button type="text" size="small" @click="onChangeStatus(scope.row.id, scope.row.status)">{{scope.row.status ? '下线' : '上线' }}</el-button>
          <el-button type="text" size="small" @click="onRemove(scope.row.id)" :disabled="!!scope.row.status">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTableList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger',
      }
      return statusMap[status]
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getTableList({
        ...this.listQuery,
      }).then((res) => {
        this.list = res.data.items
        this.listLoading = false
      })
    },
    onUpdate(...rest) {
      console.log(rest);
    },
    onChangeStatus(...rest) {
      console.log(rest);
    },
    onRemove(...rest) {
      console.log(rest);
    },
  },
}
</script>
