import { createApp } from 'vue'
import '@/permission' // permission control
import '@/plugins/execute-mock-xhr'
import '@/styles/index.scss' // global css

import App from './App.vue'
import { useElementPlus } from '@/plugins/element-plus';
import svgIcon from '@/components/svgIcon/index.vue'
import store from '@/store';
import router from '@/router';

createApp(App)
.use(router)
.use(useElementPlus)
.use(store)
.component('svg-icon', svgIcon)
.mount('#app')
