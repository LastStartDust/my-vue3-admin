import { createApp } from 'vue'
import App from './App.vue'
import { useElementPlus } from '@/plugins/element-plus';
import store from '@/store';
import router from '@/router';
import '@/permission' // permission control
import '@/styles/index.scss' // global css

createApp(App)
.use(router)
.use(useElementPlus)
.use(store)
.mount('#app')
