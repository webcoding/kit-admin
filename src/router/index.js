import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样
import { getToken } from '../utils/auth' // 验权

Vue.use(Router)

// const whiteList = ['/login'] // 不重定向白名单

let routes = []
// 路由去中心化
// https://webpack.js.org/guides/dependency-management/#require-context
// 目前export default .js导出引用不友好，部分场景需特殊处理
// 子路由推荐使用数组格式(支持多模板)
const reqModules = require.context('../views', true, /^\.(\/([\s\S])+)?\/route\.js$/)
// console.log(reqModules.keys())
reqModules.keys().map((key) => {
  const route = reqModules(key).default || reqModules(key)
  routes = routes.concat(route)
  return route
})
// console.log(routes)


/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
     title: 'title'               the name show in submenu and breadcrumb (recommend set)
     icon: 'svg-name'             the icon show in the sidebar,
   }
 */
const router = new Router({
  mode: 'hash', // history
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...routes,
    // 示例
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/dashboard',
    //   name: 'Dashboard',
    //   hidden: true,
    //   children: [{
    //     path: 'dashboard',
    //     component: () => import('@/views/dashboard/index')
    //   }],
    // },
    // 处理特殊路由
    { path: '*', redirect: '/404', hidden: true },
    // {
    //   path: '*',
    //   redirect: '/',
    //   // redirect: {
    //   //   name: 'index',
    //   // },
    // },
  ],
})

const loginRouteName = 'login'
// const loginPath = '/login'
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const {
    meta = {},
  } = to
  const {
    needAuth = false,
    title = '',
    desc = '',
  } = meta

  if (title) {
    document.title = title
  }
  if (desc) {
    // ...
  }

  // 解决拦截 router-link 跳转问题
  if (meta.status === -1) {
    return next(false)
  }

  // const { logged = false } = store.state
  // const logged = false

  // 登录页面不会配置 needAuth
  if (needAuth && getToken() && to.path !== loginRouteName) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(store.getters.roles)
    return next({
      name: loginRouteName,
      query: { redirect: to.fullPath },
    })
    // token 具备了，严格来说还得以远程接口结果为准
    // if (store.getters.roles.length === 0) {
    //   // TODO 改为同步
    //   // const userInfo = await store.dispatch('GetInfo')
    //   store.dispatch('GetInfo').then((res) => {
    //     // 拉取用户信息
    //     next()
    //   }).catch((err) => {
    //     store.dispatch('FedLogOut').then(() => {
    //       // Message.error('验证失败,请重新登录')
    //       next({
    //         name: loginRouteName,
    //         query: { redirect: to.fullPath },
    //       })
    //     })
    //   })
    // }
  }

  // hack: 在微信等webview中无法修改document.title的情况
  // let $iframe = $('<iframe src="/isLive.action" style="display:none;"></iframe>');
  // $iframe.on('load',function() {
  //   setTimeout(function() {
  //     $iframe.off('load').remove();
  //   }, 0);
  // }).appendTo($body);

  // 确保一定要调用 next()
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
