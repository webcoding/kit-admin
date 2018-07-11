import { copy } from 'kit-qs';

/**
 * API 命名规则
 * - 使用 camelCase 命名格式（小驼峰命名）
 * - 命名尽量对应 RESTful 风格，`${动作}${资源}`
 * - 假数据增加 fake 前缀
 * - 便捷易用大于规则，程序是给人看的
 */
let params = {};
let reqHeaders = {};

const commonParams = {
  init(data) {
    params = copy(data);
  },
  set(obj) {
    Object.assign(params, obj);
  },
  get(key) {
    return key ? params[key] : {...params};
  },
};



const headers = {
  init(data) {
    reqHeaders = copy(data);
  },
  set(obj) {
    Object.assign(reqHeaders, obj);
  },
  get(key) {
    return key ? reqHeaders[key] : {...reqHeaders};
  },
};

// api 列表
// https://dapi.cloudai.net/swagger-ui.html
const modelApis = {
  // 初始化配置
  test: 'https://easy-mock.com/mock/5aa79bf26701e17a67bde1d7/',
  getConfig: '/common/initconfig',
  getWxSign: '/common/getwxsign',

  // 获取七牛 token
  getQiniuToken: '/common/qiniutoken',

  loginByUsername: 'POST /user/login',
  logout: 'POST /user/logout',
  getTableList: '/table/list',

  // 系统管理
  login: 'POST /admin/login',
  // getUserInfo: '/user/info',
  // login: 'POST /login/login',
  logout: 'POST /admin/logout',
  adminCheck: '/admin/check',
  menu: '/admin/menu',

  // 用户管理
  getUserList: '/sys/user/list',
  getUserInfo: '/sys/user/info',
  searchUser: '/sys/user/search',
  // getUserInfo: '/sys/user/findById',
  userRoleList: '/sys/user/role/list',
  saveUser: 'POST /sys/user/save',
  updateUser: 'POST /sys/user/update',
  updateUserPwd: 'POST /sys/user/updatePwd',
  updateUserRole: 'POST /sys/user/role/update',
  delUser: 'POST /sys/user/delete',

  // 权限管理
  savePower: 'POST /sys/permission/save',
  delPower: 'POST /sys/permission/delete',
  updatePower: 'POST /sys/permission/update',

  // 角色管理
  getRoleList: '/sys/role/permission/list',
  saveRole: '/sys/role/save',
  delRole: '/sys/role/delete',
  updateRole: '/sys/role/update',
  updateRolePower: '/sys/role/permission/update',

  // 人员管理
  getPersonalList: '/org/personal/list',
  savePersonal: 'POST /org/personal/save',
  delPersonal: '/org/personal/delete',
  updatePersonal: 'POST /org/personal/update',
  searchPersonal: '/org/personal/save',

  // 人员证书管理
  getResList: '/personal/resource/list',
  saveRes: '/personal/resource/save',
  delRes: '/personal/resource/delete',
  uploadRes: '/personal/resource/upload',
  searchRes: '/personal/resource/search',

  // 部门管理
  getDeptList: '/org/dept/list',
  saveDept: '/org/dept/save',
  delDept: '/org/dept/delete',
  uploadDept: '/org/dept/upload',
  searchDept: '/org/dept/search',
}

export default {
  modelApis,
  commonParams,
  headers,
};
