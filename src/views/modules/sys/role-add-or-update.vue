<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form
      label-width="80px"
      :model="dataForm"
      :rules="dataRule"
      @keyup.enter.native="dataFormSubmit()"
      ref="dataForm">
      <el-form-item label="角色标识" prop="code">
        <el-input v-model="dataForm.code"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="dataForm.name"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="description">
        <el-input v-model="dataForm.description"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// import { isEmail, isMobile } from '@/utils/validate'
import api from '@/config/api'

const modelApi = {
  add: api.saveRole,
  edit: api.updateRole,
};


const defaultInfo = {
  id: undefined,
  code: '',
  name: '',
  description: '',
  type: '',
};

export default {
  props: {
    // modelApi: Object,
    // dataForm: Object,
    // dataList: Array,
  },
  data() {
    // const validatePassword = (rule, value, callback) => {
    //   if (!this.dataForm.id && !/\S/.test(value)) {
    //     callback(new Error('密码不能为空'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateComfirmPassword = (rule, value, callback) => {
    //   if (!this.dataForm.id && !/\S/.test(value)) {
    //     callback(new Error('确认密码不能为空'))
    //   } else if (this.dataForm.password !== value) {
    //     callback(new Error('确认密码与密码输入不一致'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateEmail = (rule, value, callback) => {
    //   if (!isEmail(value)) {
    //     callback(new Error('邮箱格式错误'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateMobile = (rule, value, callback) => {
    //   if (!isMobile(value)) {
    //     callback(new Error('手机号格式错误'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      visible: false,
      roleList: [],
      dataForm: {
        ...defaultInfo,
      },
      dataRule: {
        // username: [
        //   { required: true, message: '用户名不能为空', trigger: 'blur' },
        // ],
        // password: [
        //   { validator: validatePassword, trigger: 'blur' },
        // ],
        // comfirmPassword: [
        //   { validator: validateComfirmPassword, trigger: 'blur' },
        // ],
        // email: [
        //   { required: true, message: '邮箱不能为空', trigger: 'blur' },
        //   { validator: validateEmail, trigger: 'blur' },
        // ],
        // mobile: [
        //   { required: true, message: '手机号不能为空', trigger: 'blur' },
        //   { validator: validateMobile, trigger: 'blur' },
        // ],
      },
    }
  },
  methods: {
    resetDataForm() {
      this.dataForm = {
        ...defaultInfo,
      }
    },
    init(row) {
      this.resetDataForm();
      if (row && row.password) row.password = '';
      Object.assign(this.dataForm, row);
      // this.dataForm.id = row.id;

      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
      })

      // this.$http({
      //   url: this.$http.adornUrl('/sys/role/select'),
      //   method: 'get',
      //   params: this.$http.adornParams()
      // }).then(({data}) => {
      //   this.roleList = data && data.code === 0 ? data.list : []
      // }).then(() => {
      //   this.visible = true
      //   this.$nextTick(() => {
      //     this.$refs['dataForm'].resetFields()
      //   })
      // }).then(() => {
      //   if (this.dataForm.id) {
      //     this.$http({
      //       url: this.$http.adornUrl(`/sys/user/info/${this.dataForm.id}`),
      //       method: 'get',
      //       params: this.$http.adornParams()
      //     }).then(({data}) => {
      //       if (data && data.code === 0) {
      //         this.dataForm.userName = data.user.username
      //         this.dataForm.salt = data.user.salt
      //         this.dataForm.email = data.user.email
      //         this.dataForm.mobile = data.user.mobile
      //         this.dataForm.roleIdList = data.user.roleIdList
      //         this.dataForm.status = data.user.status
      //       }
      //     })
      //   }
      // })
    },
    // 表单提交
    dataFormSubmit() {
      console.log(this.dataForm)
      const isAdd = !this.dataForm.id;
      this.$refs['dataForm'].validate((valid) => {
        console.log(this.dataForm)
        if (valid) {
          const type = isAdd ? 'add' : 'edit'
          modelApi[type]({
            ...this.dataForm,
          }, (res) => {
            this.visible = false
            // Object.assign(this.dataForm, res.data);
            // this.dataList.unshift(this.dataForm)
            this.$notify({
              title: '成功',
              message: isAdd ? '创建成功' : '编辑成功',
              type: 'success',
              duration: 2000,
            })
            this.$emit('refreshDataList');
          }, (err) => {

          });
        }
        // if (valid) {
        //   this.$http({
        //     url: this.$http.adornUrl(`/sys/user/${!this.dataForm.id ? 'save' : 'update'}`),
        //     method: 'post',
        //     data: this.$http.adornData({
        //       'userId': this.dataForm.id || undefined,
        //       'username': this.dataForm.userName,
        //       'password': this.dataForm.password,
        //       'salt': this.dataForm.salt,
        //       'email': this.dataForm.email,
        //       'mobile': this.dataForm.mobile,
        //       'status': this.dataForm.status,
        //       'roleIdList': this.dataForm.roleIdList
        //     })
        //   }).then(({data}) => {
        //     if (data && data.code === 0) {
        //       this.$message({
        //         message: '操作成功',
        //         type: 'success',
        //         duration: 1500,
        //         onClose: () => {
        //           this.visible = false
        //           this.$emit('refreshDataList')
        //         }
        //       })
        //     } else {
        //       this.$message.error(data.msg)
        //     }
        //   })
        // }
      })
    },
  },
}
</script>
