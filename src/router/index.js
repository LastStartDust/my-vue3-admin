import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/layout/index.vue"
import nestedRoute from '@/router/modules/nested'
import goodsRoute from '@/router/modules/goods'

/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * hidden: true                   设置为true时路由将显示在sidebar中(默认false)
 * alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                将会变为嵌套模式, 否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Dashboard' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }]
  },
]

export const asyncRoutes = [
  {
    path: "/users",
    name: 'UserMgmt',
    component: Layout,
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
    },
    redirect: { name: 'UserList' },
    alwaysShow: true,
    children: [
      {
        path: "list",
        name: 'UserList',
        component: () => import("@/views/users/index.vue"),
        meta: {
          title: "用户列表",
          icon: "el-icon-document",
        },
      }
    ],
  },
  nestedRoute,
  goodsRoute,
  { path: '/:pathMatch(.*)', redirect: { name: "NotFound" }, hidden: true }
]

const createRouterIns = () => createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
});

const router = createRouterIns()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouterIns()
  router.matcher = newRouter.matcher // reset router
}

export default router;
