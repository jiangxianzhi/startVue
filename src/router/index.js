import egg from '../components/fundamental/egg.vue'
import apple1 from '../components/fundamental/apple.vue'
import changeString from '../components/fundamental/changeString.vue'
import {createRouter ,createWebHistory} from 'vue-router'
// 静态路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
    {path:'/egg',component: egg},
    {
path:'/apple',component: apple1
    },{
        path:'/changeString',component:changeString
    }
    ]
  })
  console.log(egg);

  export default router
