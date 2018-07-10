<template>
    <div :class="$style.header">
        <div :class="$style.headerLeft">
            <i class="iconfont">&#xe624;</i>
        </div>
        <div :class="$style.headerInput">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/游玩主题
        </div>
        <div :class="$style.headerRight">城市
            <i class="iconfont">&#xe615;</i>
        </div>
    </div>
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
    .header
        display flex
        line-height .86rem
        background $bgColor
        color #fff
        .headerLeft
            float left
            width .64rem
            i
                display block
                text-align center
                font-size .2rem
        .headerInput
            flex 1
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            height .64rem
            line-height .64rem
            background #fff
            border-radius .1rem
            color #ccc
        .headerRight
            float right
            width 1.24rem
            text-align center
            i
                font-size .24rem
</style>
