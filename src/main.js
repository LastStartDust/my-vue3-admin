import { createApp } from 'vue'
import App from './App.vue'
import { useElementPlus } from './plugins/element-plus';

createApp(App)
.use(useElementPlus)
.mount('#app')
