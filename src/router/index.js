import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import List from '../pages/list/list'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/list',
            component: List,
            name: 'List'
        }
    ]
})
