import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import City from '../pages/city/city'

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
            path: '/city',
            component: City,
            name: 'City'
        }
    ]
})
