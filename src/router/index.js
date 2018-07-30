import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // 使用异步组件加载以提高性能
    routes: [
        {
            path: '/',
            component: () => import('../pages/home/home'),
            name: 'Home'
        },
        {
            path: '/city',
            component: () => import('../pages/city/city'),
            name: 'City'
        },
        {
            path: '/detail/:id',
            component: () => import('../pages/detail/detail'),
            name: 'Detail'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
