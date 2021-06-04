import Layout from '@/layout/index.vue'
import { SORT_NO_ENUM } from '../constant'

export default   {
  path: '/goods',
  component: Layout,
  meta: { title: 'Goods', icon: 'table' },
  redirect: { name: 'GoodsList' },
  sortNo: SORT_NO_ENUM.FOUR,

  children: [
    {
      path: 'list',
      name: 'GoodsList',
      component: () => import('@/views/goods/index.vue'),
      meta: { title: 'GoodsList', icon: 'list' }
    },
    {
      path: 'add',
      name: 'AddGoods',
      component: () => import('@/views/goods/add.vue'),
      meta: { title: 'AddGoods', icon: 'add', noCache: true }
    },
    {
      path: 'edit',
      name: 'EditGoods',
      component: () => import('@/views/goods/edit.vue'),
      meta: { title: 'EditGoods', icon: 'edit', noCache: true },
      hidden: true
    },
    {
      path: 'view',
      name: 'ViewGoods',
      component: () => import('@/views/goods/view.vue'),
      meta: { title: 'ViewGoods', noCache: true },
      hidden: true
    }
  ]
}
