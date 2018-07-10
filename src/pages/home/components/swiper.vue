<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" :alt="item.title" class="swiperImg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'homeSwiper',
    data () {
        return {
            swiperOption: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg',
                    title: '卡塔尔'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1707/90/2ab6fd356529aa02.jpg_750x200_4120afc5.jpg',
                    title: '时光穿梭'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/8f/d09fa241a01ac02.jpg_750x200_e0c86013.jpg',
                    title: '迪士尼'
                }
            ]
        }
    },
    components: {
        swiper,
        swiperSlide
    }

}

</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background  #fff
    .wrapper
        width 100%
        // 解决慢网速下图片底部文字位置错乱的问题(height:31.25 vw)
        overflow hidden
        height 0
        padding-bottom 31.25%
        .swiperImg
            width 100%
</style>
