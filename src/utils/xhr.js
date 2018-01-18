import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from './auth'

/**
 * 创建临时数据
 */
export const setPromise = (data) => {
  /* eslint no-unused-vars: 0 */
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

const instance = axios.create({
  // baseURL: `${env.apiBaseUrl}`,
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Accept': 'application/json',
    // 'dataType': 'json',
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'text/html; charset=UTF-8',
  },
})

// instance.form = function form(url, data) {
//   return instance.post(url, data, {
//     transformRequest: [function transformRequest(reqData) {
//       // Do whatever you want to transform the data
//       let ret = ''
//       /* eslint guard-for-in: 0 */
//       for (const it in reqData) {
//         ret += encodeURIComponent(it) + '=' + encodeURIComponent(reqData[it]) + '&'
//       }
//       return ret
//     }],
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })
// }

function checkStatus({ status, statusText, data }) {
  if (status >= 200 && status < 300) {
    // 请求成功
    // console.log('请求成功: ')
    // console.log(data)
    return data
  } else {
    const error = new Error(statusText)
    error.status = status
    error.message = data
    return Promise.reject(error)
  }
}

// request拦截器
instance.interceptors.request.use((config) => {
  if (store.getters.token) {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['X-Token'] = getToken()
  }
  return config
}, (error) => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use((response) => {
  /**
  * code为非0是抛错 可结合自己业务进行修改
  */
  const res = response.data
  if (res.code !== 0) {
    // Message({
    //   message: res.data,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    // 50008: 非法的token;
    // 50012: 其他客户端登录了;
    // 50014: Token 过期了;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //   confirmButtonText: '重新登录',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   store.dispatch('FedLogOut').then(() => {
      //     location.reload() // 为了重新实例化vue-router对象 避免bug
      //   })
      // })
    }
    return Promise.reject(new Error('error'))
  } else {
    return response.data
  }
}, (error) => {
  console.log('err' + error)// for debug
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 5 * 1000,
  // })
  return Promise.reject(error)
})

export default instance
