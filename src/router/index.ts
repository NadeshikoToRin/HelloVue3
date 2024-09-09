//创建一个路由器，并暴露
//1.引入createRouter
import { createRouter,createWebHistory } from "vue-router";

//引入组件
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";
//第二步骤:创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        },
    ]
})

//暴露路由器router
export default router;
