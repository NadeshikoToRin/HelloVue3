// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引用App根组件
import App from './App.vue'
// 引入router
import router from './router'

// 创建一个app
const app = createApp(App)
// 使用router
app.use(router);
// 将app挂载到页面上
app.mount('#app')
