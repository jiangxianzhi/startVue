import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 测试全局注册
import globelComponents from './components/globelComponents/globelComponets1.vue'

  

const app = createApp(App)
console.log(router)
app.use(router)
app.component('globelComponnets',globelComponents)
app.mount('#app')
