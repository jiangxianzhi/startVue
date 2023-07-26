import egg from '../components/egg.vue'
import apple1 from '../components/apple.vue'
import changeString from '../components/changeString.vue'
import {createRouter ,createWebHistory} from 'vue-router'

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

  export default router