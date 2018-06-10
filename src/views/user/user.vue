<template>
  <div class="app-container">
    <el-button type="success" @click="goCreat">添加</el-button>
    <el-button v-for="item in channels" :type="item.type" :key="item.value" @click="selectChannel(item.value)" style="margin-bottom: 20px;">{{item.label}}</el-button>
    <el-form :inline="true" :model="queryForm" :size="tableSize">
      <el-form-item label="活动标题">
        <el-input v-model="queryForm.title" @keyup.enter.native="paginate(1)"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="queryForm.status" placeholder="请选择">
          <el-option label="全部" value=""></el-option>
          <el-option label="待上线" value="0"></el-option>
          <el-option label="已上线" value="1"></el-option>
          <el-option label="已下线" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker v-model="queryForm.date_range" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="paginate(1)">搜索</el-button>
        <el-button @click="resetList">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border stripe :size="tableSize" header-row-class-name="el-table-head">
      <el-table-column prop="id" label="ID" min-width="80"></el-table-column>
      <el-table-column prop="channelText" label="渠道" min-width="120"></el-table-column>
      <el-table-column prop="title" label="活动标题" min-width="100"></el-table-column>
      <el-table-column prop="rangeTime" label="活动时间" min-width="120"></el-table-column>
      <el-table-column prop="statusText" label="状态" min-width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" min-width="100">
        <template slot-scope="scope">
          <router-link :to="{ path: '/custom/create-zt', query: { zt_id: scope.row.id, zt_channel: scope.row.channel }}">
            <el-button type="text" size="small" @click.prevent.stop="onUpdate(scope.row.id, scope.row.channel)">编辑</el-button>
          </router-link>
          <el-button type="text" size="small" @click="onChangeStatus(scope.row.id, scope.row.ztStatus)">{{scope.row.ztStatus ? '下线' : '上线'}}</el-button>
          <el-button type="text" size="small" @click="onRemove(scope.row.id)" :disabled="scope.row.ztStatus">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :pagination="pagination" @myPaginate="paginate"></Pagination>
  </div>
</template>

<script>
// import Pagination from '@/components/Pagination'
// import { timeStamp, parseTime } from '@/utils'

export default {
  components: {
    // Pagination,
  },
  data() {
    return {
      tableSize: this.$device.isMobile ? 'mini' : 'medium',
      queryForm: {
        title: '',
        start_time: '',
        end_time: '',
        date_range: [],
        status: '',
        channel: '',
      },
      tableData: [],
      pagination: {
        current_page: 1,
        per_page: 20, // 固定不变
        total: 0,
      },
    }
  },
  watch: {
    // ['queryForm.date_range'](val){
    //   if (val && val.length) {
    //     this.queryForm.start_time = timeStamp(val[0]);
    //     this.queryForm.end_time = timeStamp(val[1]);
    //   }
    // }
  },
  computed: {
    channels() {
      return this.$store.state.app.channels || [];
    },
  },
  beforeRouteEnter(to, from, next) {
    // if (from.name == 'createZt') {
    //   next(vm => {
    //     let params = vm.$store.getters.fromParams;
    //     if (params.name == 'createZt') {
    //       vm.queryForm = Object.assign(vm.queryForm, params.queryForm);
    //       for(let item of vm.channels){
    //         if (item.value == vm.queryForm.channel) {
    //           item.type = 'primary';
    //         } else {
    //           item.type = '';
    //         }
    //       }
    //       return vm.getZtList(params.pageNum)
    //     } else {
    //       return vm.getZtList(1)
    //     }
    //   });
    // } else {
    //   next(vm => vm.getZtList(1));
    // }
  },
  created() {
    this.queryForm.channel = this.setChannel();
    if (!this.queryForm.channel) {
      this.$pubSub.on('onChannelReady', () => {
        this.queryForm.channel = this.setChannel();
        this.getZtList(1);
      })
    }
  },
  methods: {
    getZtList(pageNum = 1) {
      if (!this.queryForm.channel) {
        return;
      }
      const query = Object.assign({
        pageNum,
        pageLimit: 20,
      }, this.queryForm);
      this.$api.ztList(query).then((res) => {
        if (res.data && res.data.list) {
          this.tableData = this.dealwithData(res.data.list);
          this.pagination.current_page = pageNum;
          this.pagination.total = res.data.totalCnt;
        }
      }).catch((err) => {

      })
    },
    dealwithData(data) {
      // for(let item of data){
      //   item.startTime = item.start_time ? parseTime(item.start_time, '{y}-{m}-{d} {h}:{i}:{s}') : item.start_time;
      //   item.endTime = item.end_time ? parseTime(item.end_time, '{y}-{m}-{d} {h}:{i}:{s}') : item.end_time;
      //   item.rangeTime = item.startTime + ' ~ ' + item.endTime;
      //   switch (item.channel) {
      //   case 1:
      //     item.channelText = 'APP';
      //     break;
      //   case 2:
      //     item.channelText = '好食期精选';
      //     break;
      //   case 3:
      //     item.channelText = '好食期批发';
      //     break;
      //   case 4:
      //     item.channelText = '支付宝（蚂蚁会员）';
      //     break;
      //   case 5:
      //     item.channelText = '微信小程序';
      //     break;
      //   case 6:
      //     item.channelText = '支付宝拼团小程序';
      //     break;
      //   case 7:
      //     item.channelText = 'H5';
      //     break;
      //   case 8:
      //     item.channelText = '支付宝（花呗）';
      //     break;
      //   case 9:
      //     item.channelText = '支付宝特惠食品小程序';
      //     break;
      //   default:
      //     item.channelText = 'H5';
      //   }
      //   switch (item.status) {
      //   case 0:
      //     item.statusText = '待上线';
      //     break;
      //   case 1:
      //     item.statusText = '已上线';
      //     break;
      //   case 2:
      //     item.statusText = '已下线';
      //     break;
      //   default:
      //     item.statusText = '待上线';
      //   }
      //   item.ztStatus = item.status === 1 ? true : false;
      // }
      // return data;
    },
    setChannel() {
      if (this.channels.length === 0) {
        return null;
      } else {
        for (const item of this.channels) {
          if (item.type === 'primary') {
            return item.value;
          }
        }
      }
      return null;
    },
    // selectChannel(val) { // 选择渠道
    //   this.queryForm.channel = val;
    //   for(let item of this.channels){
    //     if (item.value == val) {
    //       item.type = 'primary';
    //     } else {
    //       item.type = '';
    //     }
    //   }
    //   this.paginate(1);
    // },
    // onChangeStatus(id, status){  //修改状态，上下线
    //   let act = status === true ? 'offline' : 'online';
    //   this.$api.changeZt({
    //     id: id,
    //     act: act,
    //   }).then(res => {
    //     this.$message({
    //       message: '专题'+ (act === 'online' ? '上架' : '下架') +'成功',
    //       type: 'success'
    //     });
    //     this.paginate(this.pagination.current_page);
    //   }).catch(err => {
    //     this.paginate(this.pagination.current_page);
    //   })
    // },
    // onUpdate(id, channel){  //去修改
    //   this.$store.dispatch('SetFromParams', {
    //     name: 'createZt',
    //     queryForm: this.queryForm,
    //     pageNum: this.pagination.current_page,
    //   });
    //   this.$router.push({ path: '/custom/create-zt', query: { zt_id: id, zt_channel: channel } });
    // },
    // onRemove(id){
    //   this.$confirm('确认删除该专题?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.onDelete(id);
    //   }).catch(() => {

    //   });
    // },
    // onDelete(id) {
    //   this.$api.removeZt({id: id}).then(res => {
    //     this.$message({
    //       message: '专题删除成功',
    //       type: 'success'
    //     });
    //     this.paginate(this.pagination.current_page);
    //   }).catch(err => {

    //   })
    // },
    // resetList(){  //重置
    //   this.queryForm = Object.assign(this.queryForm, {
    //     title: '',
    //     start_time: '',
    //     end_time: '',
    //     date_range: [],
    //     status: '',
    //   });
    //   this.paginate(1);
    // },
    // goCreat(){ //新添加
    //   this.$store.commit('UPDATE_ZT_INFO', { type: 'zt-info' });
    //   this.$store.commit('UPDATE_ZT_LISTS', []);
    //   this.$store.dispatch('SetFromParams', {name: 'createZt', queryForm: {}, pageNum: 1});
    //   this.$router.push({ path: '/custom/create-zt', query: {channel: this.queryForm.channel} });
    // },
    // paginate(num){
    //   // console.log(num);
    //   this.getZtList(num);
    // }
  },
}
</script>
