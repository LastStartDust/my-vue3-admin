import { 
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLoading,
  ElMessage,
  ElMessageBox,
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

// 组件列表
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
] 

// 插件列表
const plugins = [
  ElLoading,
  ElMessage,
  ElMessageBox,
]

// 暴露出useElementPlus方法，给vue实例调用
export function useElementPlus(app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
