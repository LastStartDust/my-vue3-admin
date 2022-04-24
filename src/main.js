import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import '@/permission' // permission control
import '@/styles/index.scss' // global css

import App from './App.vue'
import { useElementPlus } from '@/plugins/element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'
import store from '@/store'
import router from '@/router'
import Pagination from '@/components/Pagination/index.vue'

createApp(App)
  .use(router)
  .use(useElementPlus)
  .use(store)
  .component('svg-icon', SvgIcon)
  .component('Pagination', Pagination)
  .mount('#app')
