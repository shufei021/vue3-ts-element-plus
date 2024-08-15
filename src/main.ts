// 导入创建项目的方法
import { createApp } from 'vue'
// 缓存数据
import store from './store'
// 路由配置
import router from './router'
// 导入全局 ts 变量
import './global.d.ts'
// 导入全局样式
import './style.css'
// 导入根组件
import App from './App.vue'
 // 纯表格
 import VxeTable from 'vxe-table'
 // 表格样式
 import 'vxe-table/lib/style.css'
 // 导入element-plus
 import ElementPlus from 'element-plus'

 import 'element-plus/dist/index.css'
 // ...可选 UI
 import VxeUI from 'vxe-pc-ui'
 import 'vxe-pc-ui/lib/style.css'
 // ...
 // 如果只使用表格
 // import { VxeUI } from 'vxe-table'
const app = createApp(App)
app.use(VxeUI).use(VxeTable).use(ElementPlus).use(store).use(router).mount('#app')
