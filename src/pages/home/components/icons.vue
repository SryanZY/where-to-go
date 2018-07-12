<template>
    <div class="icons">
        <section class="icon">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(page, key) in pages" :key="key">
                    <div class="iconImg" v-for="item in page" :key="item.id">
                        <img :src="item.url" alt="item.desc">
                        <p>{{ item.desc }}</p>
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
    props: {
        iconList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
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
            width 186px
            height 186px
            margin-bottom 30px
            text-align center
            img
                width 110px
                height 110px
            p
                margin-top 20px
                font-size 12px
                color $darkTextColor
                ellipsis()
</style>
