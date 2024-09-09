//创建一个路由器，并暴露
//1.引入createRouter
import { createRouter,createWebHistory } from "vue-router";

//引入组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";
//第二步骤:创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'news',
            path:'/news',
            component:News,
            children:[
                {
                    name:'detail',
                    path:'detail',
                    component:Detail,

                    // 第一种写法：params
                    // props:true

                    //第二种写法，函数写法，query
                    props: route => route.query

                    //第三种方法，对象写法
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        },
        {
            name:'about',
            path:'/about',
            component:About
        },
    ]
})

//暴露路由器router
export default router;
