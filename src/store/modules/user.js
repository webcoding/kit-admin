import {
  // loginByUsername,
  logout,
  getUserInfo,
} from '@/api/login'
import api from '@/config/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userInfo: {},
    roles: [],
    name: '',
    avatar: '',
    status: '',
    code: '',
    introduction: '',
    setting: {
      articlePlatform: [],
    },
  },

  mutations: {
    SET_USERINFO: (state, status) => {
      state.userInfo = status
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        api.login({
          ...loginForm,
        }, (res) => {
          // const { data } = res;
          const {
            authInfo: { accessToken, expiredTime },
            userInfo,
          } = res.data;
          setToken(accessToken, expiredTime);
          commit('SET_TOKEN', accessToken);
          commit('SET_USERINFO', userInfo);
          resolve();
        }, (err) => {
          reject(err);
        })
        // loginByUsername({
        //   username,
        //   password: userInfo.password,
        // }).then((res) => {
        //   const { data } = res;
        //   commit('SET_TOKEN', data.token);
        //   setToken(data.token);
        //   resolve();
        // }).catch((err) => {
        //   reject(err);
        // })
        // login(username, userInfo.password).then((response) => {
        //   const { data } = response
        //   setToken(data.token)
        //   commit('SET_TOKEN', data.token)
        //   resolve()
        // }).catch((error) => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        const { userInfo = {} } = state;
        if (userInfo.token && userInfo.id) {
          resolve(userInfo);
        } else {
          api.getUserInfo({
            id: userInfo.id,
            token: state.token,
          }, (res) => {
            const { data } = res
            // 由于 mockjs 不支持自定义状态码只能这样hack
            if (!data) {
              reject('error');
            }
            // 验证返回的roles是否是一个非空数组
            if (data.roles && data.roles.length > 0) {
              commit('SET_ROLES', data.roles)
            } else {
              /* eslint prefer-promise-reject-errors: 0 */
              reject('getInfo: roles must be a non-null array !')
            }
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatar)
            commit('SET_INTRODUCTION', data.introduction)
            resolve(res)
          }, (err) => {
            reject(err)
          })
        }
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout({
          token: state.token,
        }).then((res) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo({ role }).then((res) => {
          const { data } = res
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    },
  },
}

export default user
