<template>
    <header :class="$style.cityHeader">
        <router-link :to="{ path: '/' }">
            <i class="iconfont" :class="$style.iconBack">&#xe624;</i>
        </router-link>
        城市选择
    </header>
</template>

<script>
export default {
    data () {
        return {}
    },
    components: {}

}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .cityHeader
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size 32px
        .iconBack
            position absolute
            left 0
            top 0
            width 64px
            text-align center
            color #fff
</style>
