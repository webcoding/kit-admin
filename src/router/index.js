import Vue from 'vue'
import Router from 'vue-router'

/* eslint no-underscore-dangle: 0 */
const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading,
// because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
* */

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
* */
export const constantRouterMap = [
  {
    path: '/login',
    component: _import('login/index'),
    hidden: true,
  },
  {
    path: '/authredirect',
    component: _import('login/authredirect'),
    hidden: true,
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true,
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true },
    }],
  },
];

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table/complex-table',
  //   name: 'example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example',
  //   },
  //   children: [
  //     {
  //       path: '/example/table',
  //       component: _import('example/table/index'),
  //       redirect: '/example/table/complex-table',
  //       name: 'Table',
  //       meta: {
  //         title: 'Table',
  //         icon: 'table',
  //       },
  //       children: [
  //         {
  //           path: 'dynamic-table',
  //           component: _import('example/table/dynamicTable/index'),
  //           name: 'dynamicTable',
  //           meta: { title: 'dynamicTable' },
  //         },
  //         {
  //           path: 'drag-table',
  //           component: _import('example/table/dragTable'),
  //           name: 'dragTable',
  //           meta: { title: 'dragTable' },
  //         },
  //         {
  //           path: 'inline-edit-table',
  //           component: _import('example/table/inlineEditTable'),
  //           name: 'inlineEditTable',
  //           meta: { title: 'inlineEditTable' },
  //         },
  //         {
  //           path: 'tree-table',
  //           component: _import('example/table/treeTable/treeTable'),
  //           name: 'treeTableDemo',
  //           meta: { title: 'treeTable' },
  //         },
  //         {
  //           path: 'custom-tree-table',
  //           component: _import('example/table/treeTable/customTreeTable'),
  //           name: 'customTreeTableDemo',
  //           meta: { title: 'customTreeTable' },
  //         },
  //         {
  //           path: 'complex-table',
  //           component: _import('example/table/complexTable'),
  //           name: 'complexTable',
  //           meta: { title: 'complexTable' },
  //         },
  //       ],
  //     },
  //     {
  //       path: 'tab/index',
  //       icon: 'tab',
  //       component: _import('example/tab/index'),
  //       name: 'tab',
  //       meta: { title: 'tab' },
  //     },
  //   ],
  // },
  {
    path: '/sys',
    component: Layout,
    redirect: 'noredirect',
    name: 'system',
    meta: {
      title: 'system',
      icon: 'icon-system',
    },
    children: [
      // {
      //   path: 'base',
      //   component: _import('doing/doing'),
      //   name: 'base',
      //   meta: {
      //     title: 'system',
      //     icon: 'setting',
      //   },
      // },
      // {
      //   path: 'user',
      //   component: _import('user/user'),
      //   name: 'user',
      //   meta: {
      //     title: 'user',
      //     icon: 'user',
      //   },
      // },
      {
        path: 'account',
        component: _import('modules/sys/account'),
        name: 'account',
        meta: {
          title: 'account',
          icon: 'admin',
        },
      },
      {
        path: 'role',
        component: _import('modules/sys/role'),
        name: 'role',
        meta: {
          title: 'role',
          icon: 'role',
        },
      },
      {
        path: 'menu',
        component: _import('modules/sys/menu'),
        name: 'menu',
        meta: {
          title: 'menu',
          icon: 'menu',
        },
      },
      {
        path: 'sql',
        component: _import('modules/sys/sql'),
        name: 'sql',
        meta: {
          title: 'sql',
          icon: 'sql',
        },
      },
      {
        path: 'task',
        component: _import('modules/job/task'),
        name: 'task',
        meta: {
          title: 'task',
          icon: 'task',
        },
      },
      {
        path: 'dict',
        component: _import('modules/sys/dict'),
        name: 'dict',
        meta: {
          title: 'dict',
          icon: 'dict',
        },
      },
      {
        path: 'upload',
        component: _import('modules/oss/upload'),
        name: 'upload',
        meta: {
          title: 'upload',
          icon: 'upload',
        },
      },
      {
        path: 'log',
        component: _import('modules/sys/log'),
        name: 'log',
        meta: {
          title: 'log',
          icon: 'log',
        },
      },
      // {
      //   path: 'org',
      //   component: _import('modules/sys/org'),
      //   name: 'org',
      //   meta: {
      //     title: 'org',
      //     icon: 'depart',
      //   },
      // },
      // {
      //   path: 'auth',
      //   component: _import('modules/sys/auth'),
      //   name: 'auth',
      //   meta: {
      //     title: '权限',
      //     icon: 'role2',
      //   },
      // },
      // {
      //   path: 'menu',
      //   component: _import('modules/sys/doing'),
      //   name: 'menu',
      //   meta: {
      //     title: 'menu',
      //     icon: 'category',
      //   },
      // },

      // {
      //   path: 'rule',
      //   component: _import('modules/sys/doing'),
      //   name: 'rule',
      //   meta: {
      //     title: '角色类型管理',
      //     icon: 'group_fill',
      //   },
      // },
      // {
      //   path: 'disc',
      //   component: _import('doing/doing'),
      //   name: 'disc',
      //   meta: {
      //     title: 'disc',
      //     icon: 'documentation',
      //   },
      // },
      // {
      //   path: 'gatelog',
      //   component: _import('doing/doing'),
      //   name: 'gatelog',
      //   meta: {
      //     title: 'log',
      //     icon: 'log',
      //   },
      // },
    ],
  },

  {
    path: '/peoples',
    component: Layout,
    redirect: 'noredirect',
    name: 'peoples',
    meta: {
      title: 'peoples',
      icon: 'people1',
    },
    children: [
      {
        path: 'people',
        component: _import('table/people'),
        name: 'people',
        meta: {
          title: 'people',
          icon: 'user',
        },
      },
      {
        path: 'cert',
        component: _import('table/cert'),
        name: 'cert',
        meta: {
          title: 'cert',
          icon: 'cert',
        },
      },
      {
        path: 'depart',
        component: _import('table/depart'),
        name: 'depart',
        meta: {
          title: 'depart',
          icon: 'depart',
        },
      },
    ],
  },

  {
    path: '/project',
    component: Layout,
    redirect: 'noredirect',
    name: 'project',
    meta: {
      title: 'project',
      icon: 'project',
    },
    children: [
      {
        path: 'gc',
        component: _import('doing/doing'),
        name: 'gc',
        meta: {
          title: 'gc',
          icon: 'gc2',
        },
      },
    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example',
    },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/example/tree'),
        meta: { title: 'Tree', icon: 'tree' },
      },
    ],
  },
  // {
  //   path: '/form',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'form',
  //   meta: {
  //     title: 'form',
  //     icon: 'form',
  //   },
  //   children: [
  //     {
  //       path: 'create-form',
  //       component: _import('form/create'),
  //       name: 'createForm',
  //       meta: {
  //         title: 'createForm',
  //         icon: 'table',
  //       },
  //     },
  //     {
  //       path: 'edit-form',
  //       component: _import('form/edit'),
  //       name: 'editForm',
  //       meta: {
  //         title: 'editForm',
  //         icon: 'table',
  //       },
  //     },
  //   ],
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'errorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404',
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: _import('errorPage/401'),
  //       name: 'page401',
  //       meta: {
  //         title: 'page401',
  //         noCache: true,
  //       },
  //     },
  //     {
  //       path: '404',
  //       component: _import('errorPage/404'),
  //       name: 'page404',
  //       meta: {
  //         title: 'page404',
  //         noCache: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/tools',
  //   component: Layout,
  //   redirect: '/tools/link',
  //   name: 'tools',
  //   meta: {
  //     title: 'tools',
  //     icon: 'example',
  //   },
  //   children: [
  //     {
  //       path: 'link',
  //       name: 'Link',
  //       component: () => import('@/views/tools/link'),
  //       meta: {
  //         title: 'link',
  //         icon: 'form',
  //       },
  //     },
  //     // {
  //     //   path: 'link',
  //     //   name: 'Link',
  //     //   component: () => import('@/views/tools/link'),
  //     //   meta: { title: '链接生成工具', icon: 'form' },
  //     // },
  //   ],
  // },

  { path: '*', redirect: '/404', hidden: true },
];

