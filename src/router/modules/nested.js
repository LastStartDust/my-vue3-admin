import Layout from '@/layout/index.vue'
import { SORT_NO_ENUM } from '../constant'

export default {
  path: '/nested',
  component: Layout,
  name: 'Nested',
  meta: {
    title: 'Nested',
    icon: 'nested'
  },
  redirect: { name: 'Menu1' },
  sortNo: SORT_NO_ENUM.THREE,

  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index.vue'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Menu1' },
      redirect: { name: 'Menu1-1' },
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
          name: 'Menu1-1',
          meta: { title: 'Menu1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
          name: 'Menu1-2',
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              name: 'Menu1-2-1',
              meta: { title: 'Menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              name: 'Menu1-2-2',
              meta: { title: 'Menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
          name: 'Menu1-3',
          meta: { title: 'Menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import('@/views/nested/menu2/index.vue'),
      meta: { title: 'menu2' }
    }
  ]
}
