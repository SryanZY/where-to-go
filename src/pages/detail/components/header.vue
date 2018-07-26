<template>
    <div>
        <router-link tag="div" :to="{ path: '/' }" :class="$style.headerAbs" v-show="showAbs">
            <i class="iconfont" :class="$style.backIcon">&#xe624;</i>
        </router-link>
        <div :class="$style.headerFixed" v-show="!showAbs" :style="opacityStyle">
            <i class="iconfont" :class="$style.back">&#xe624;</i>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        // 页面即将被隐藏或者即将被替换的时候执行
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    }
}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .headerAbs
        position absolute
        left 20px
        top 20px
        width 60px
        height 60px
        border-radius 40px
        background rgba(0, 0, 0, .8)
        text-align center
        line-height 60px
        .backIcon
            color #fff
            font-size 32px
    .headerFixed
        position fixed
        top 0
        left 0
        right 0
        z-index 10
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size 32px
        .back
            position: absolute
            top: 0
            left: 0
            width: .60rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>
