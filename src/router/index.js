import Vue from 'vue'
import VueRouter from 'vue-router'
import Coupons from "@/components/Coupons/Coupons";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Coupons',
        component: Coupons
    },
    {
        path: '/megafriends',
        name: 'MegaFriendsPage',
        component: () => import(/* webpackChunkName: "about" */ '../components/MegaFriends/MegaFriendsPage')
    },
    {
        path: '/map',
        name: 'MapPage',
        component: () => import(/* webpackChunkName: "about" */ '../components/MapPage/MapPage.vue')
    },
    {
        path: '/shops_services',
        name:'Shops_Services',
        component: () => import(/* webpackChunkName: "about" */ '../components/Shops_Services/Shops_Services')
    },
    {
        path: '/search',
        name:'Search',
        component: () => import(/* webpackChunkName: "about" */ '../components/Search/Search')
    },
    {
        path: '/news_sales',
        name:'News_Sales',
        component: () => import(/* webpackChunkName: "about" */ '../components/News_Sales/News_Sales')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router