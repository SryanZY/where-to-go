<template>
    <div>
        <div :class="$style.banner" @click="handleBannerClick">
            <img :src="bannerImg" alt="远去的恐龙" :class="$style.bannerImg">
            <div :class="$style.bannerInfo">
                <div :class="$style.bannerItem">{{ this.sightName }}</div>
                <div :class="$style.bannerNum"><i class="iconfont" :class="$style.bannerIcon">&#xe662;</i>{{ this.gallaryImgs.length }}</div>
            </div>
        </div>
        <CommonGallery :imgs="gallaryImgs" v-show="showGallery" @close="handleGalleryClose"></CommonGallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/gallery'
export default {
    props: {
        sightName: {
            type: String
        },
        bannerImg: {
            type: String
        },
        gallaryImgs: {
            type: Array
        }
    },
    data () {
        return {
            showGallery: false
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        handleGalleryClose () {
            this.showGallery = false
        }
    }

}

</script>
<style lang='stylus' module>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .bannerImg
            width 100%
        .bannerInfo
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height 60px
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
            .bannerItem
                flex 1
                font-size 32px
                padding 0 20px
            .bannerNum
                margin-top 14px
                padding 0 40px
                height 32px
                line-height 32px
                font-size 24px
                border-radius 20px
                background rgba(0, 0, 0, .8)
                .bannerIcon
                    display inline-block
                    margin-right 4px
                    font-size 24px
</style>
