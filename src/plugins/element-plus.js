import { 
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElScrollbar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAlert,
  ElCol,
  ElRow,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElDescriptions,
  ElDescriptionsItem
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

// 组件列表
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElScrollbar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAlert,
  ElCol,
  ElRow,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElDescriptions,
  ElDescriptionsItem
] 

// 插件列表
const plugins = [
  ElLoading,
  ElMessage,
  ElMessageBox,
]

// 设置语言为中文
import { locale } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
locale(lang)

// 暴露出useElementPlus方法，给vue实例调用
export function useElementPlus(app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
