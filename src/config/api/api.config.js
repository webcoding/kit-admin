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
  // getConfig: '/common/initconfig',
  // getWxSign: '/common/getwxsign',

  // 获取七牛 token
  // getQiniuToken: '/common/qiniutoken',

  // loginByUsername: 'POST /user/login',
  // logout: 'POST /user/logout',
  // getTableList: '/table/list',

  // 系统管理
  login: 'POST /admin/login',
  // getUserInfo: '/user/info',
  // login: 'POST /login/login',
  logout: 'POST /admin/logout',
  adminCheck: '/admin/check',
  getMenu: '/admin/menu',
  // 权限管理
  getAuth: '/sys/permission/list',
  addAuth: 'POST /sys/permission/save',
  delAuth: 'POST /sys/permission/delete',
  updateAuth: 'POST /sys/permission/update',
  // 角色权限列表
  getRoleAuth: '/sys/role/permission/list',

  // 账户管理
  getUser: '/sys/user/list',
  getUserInfo: '/sys/user/info',
  // searchUser: '/sys/user/search',
  // getUserInfo: '/sys/user/findById',
  getUserRole: '/sys/user/role/list',
  addUser: 'POST /sys/user/save',
  updateUser: 'POST /sys/user/update',
  updateUserPwd: 'POST /sys/user/updatePwd',
  updateUserRole: 'POST /sys/user/role/update',
  delUser: 'POST /sys/user/delete',
  // 角色管理
  getRole: '/sys/role/list',
  addRole: 'POST /sys/role/save',
  delRole: 'POST /sys/role/delete',
  updateRole: 'POST /sys/role/update',
  updateRolePower: '/sys/role/permission/update',
  getRoleDetail: '/sys/role/view',

  // 数据字典
  getDict: '/sys/dict/list',
  addDict: 'POST /sys/dict/save',
  delDict: 'POST /sys/dict/delete',
  updateDict: 'POST /sys/dict/update',

  // 人员管理
  getPersonal: '/org/personal/list',
  addPersonal: 'POST /org/personal/save',
  delPersonal: 'POST /org/personal/delete',
  updatePersonal: 'POST /org/personal/update',

  // 人员证书管理
  getRes: '/personal/resource/list',
  addRes: 'POST /personal/resource/save',
  delRes: 'POST /personal/resource/delete',
  uploadRes: 'POST /personal/resource/upload',

  // 组织架构
  getDept: '/org/dept/list',
  addDept: 'POST /org/dept/save',
  delDept: 'POST /org/dept/delete',
  updateDept: 'POST /org/dept/update',
  addDeptPersonal: 'POST /org/dept/personal/save',
  updateDeptPersonal: 'POST /org/dept/personal/update',

  // 定时任务
  getJob: '/sys/scheduleJob/list',
  addJob: 'POST /sys/scheduleJob/save',
  delJob: 'POST /sys/scheduleJob/delete',
  updateJob: 'POST /sys/scheduleJob/update',
  jobStart: 'POST /sys/scheduleJob/start',
  jobPause: 'POST /sys/scheduleJob/pause',
  jobResume: 'POST /sys/scheduleJob/resume',
  jobInfo: 'POST /sys/scheduleJob/resume',
}

export default {
  modelApis,
  commonParams,
  headers,
};
