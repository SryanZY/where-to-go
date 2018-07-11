<template>
    <div class="icons">
        <section class="icon">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(page, key) in pages" :key="key">
                    <div class="iconImg" v-for="item in page" :key="item.id">
                        <img :src="item.url" alt="item.title">
                        <p>{{ item.title }}</p>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data () {
        return {
            iconList: [
                {
                    id: '0001',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '景点门票'
                },
                {
                    id: '0002',
                    url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title: '必游榜单'
                },
                {
                    id: '0003',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                    title: '夏日玩水'
                },
                {
                    id: '0004',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                    title: '主题乐园'
                },
                {
                    id: '0005',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    title: '动植物园'
                },
                {
                    id: '0006',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '故宫'
                },
                {
                    id: '0007',
                    url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    title: '一日游'
                },
                {
                    id: '0008',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
                    title: '公园'
                },
                {
                    id: '0009',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title: '游乐场'
                },
                {
                    id: '0010',
                    url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    title: '全部玩乐'
                }
            ],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                // 根据数据的多少来确定在swiper中的页码
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },
    components: {
        swiper,
        swiperSlide
    }

}

</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .icons >>> .swiper-container
        width 100%
        height 0
        padding-bottom 60%
    .icons >>> .swiper-slide
        display flex
        flex-wrap wrap
    .icon
        .iconImg
            width 1.875rem
            height 1.52rem
            margin-bottom .6rem
            text-align center
            img
                width 1.1rem
                height 1.1rem
            p
                margin-top .2rem
                font-size .13rem
                color $darkTextColor
                ellipsis()
</style>
