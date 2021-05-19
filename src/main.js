import { createApp } from 'vue'
import App from './App.vue'
import { useElementPlus } from '@/plugins/element-plus';
import store from '@/store';

createApp(App)
.use(useElementPlus)
.use(store)
.mount('#app')
