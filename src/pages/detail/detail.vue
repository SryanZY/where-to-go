<template>
    <div>
        <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
        <Header></Header>
        <div :class="$style.content">
            <List :list="list"></List>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner'
import Header from './components/header'
import List from './components/list'
export default {
    name: 'Detail',
    data () {
        return {
            list: [],
            sightName: '',
            bannerImg: '',
            gallaryImgs: []
        }
    },
    components: {
        Banner,
        Header,
        List
    },
    mounted () {
        this.getDetailInfo()
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.detailSucces)
        },
        detailSucces (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    }

}

</script>
<style lang='stylus' module>
    .content
        height 1500px
</style>
