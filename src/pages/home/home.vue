<template>
    <div>
        <Header></Header>
        <Swiper :swiperList="swiperList"></Swiper>
        <Icon :iconList="iconList"></Icon>
        <Recommend :recommendList="recommendList"></Recommend>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Header from './components/header'
import Swiper from './components/swiper'
import Icon from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
export default {
    name: 'Home',
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfos()
    },
    activated () {
        // activated钩子当页面重新被显示的时候会被执行
        // 通常和keep-alive组件配合使用
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfos()
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfos () {
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    components: {
        Header,
        Swiper,
        Icon,
        Recommend,
        Weekend
    }

}

</script>
<style module>
</style>
