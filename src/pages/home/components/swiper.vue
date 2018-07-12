<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.url" :alt="item.title" class="swiperImg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'homeSwiper',
    props: {
        swiperList: {
            type: Array,
            default () {
                return []
            }
        }
    },
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
            }
        }
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
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
        margin-bottom 20px
        width 100%
        // 解决慢网速下图片底部文字位置错乱的问题(height:31.25 vw)
        overflow hidden
        height 0
        padding-bottom 31.25%
        .swiperImg
            width 100%
</style>
