// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css' // 解决1像素边框的问题
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
