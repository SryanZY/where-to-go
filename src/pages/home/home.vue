<template>
    <div>
        <Header :city="city"></Header>
        <Swiper :swiperList="swiperList"></Swiper>
        <Icon :iconList="iconList"></Icon>
        <Recommend :recommendList="recommendList"></Recommend>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header'
import Swiper from './components/swiper'
import Icon from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
export default {
    name: 'Home',
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    created () {
        this.getHomeInfos()
    },
    methods: {
        getHomeInfos () {
            axios.get('/api/index.json').then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.city = data.city
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
