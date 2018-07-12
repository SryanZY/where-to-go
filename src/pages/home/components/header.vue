<template>
    <div :class="$style.header">
        <div :class="$style.headerLeft">
            <i class="iconfont">&#xe624;</i>
        </div>
        <div :class="$style.headerInput">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/游玩主题
        </div>
        <div :class="$style.headerRight">{{ this.city }}
            <i class="iconfont">&#xe615;</i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        city: String
    }

}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .header
        display flex
        line-height 86px
        background $bgColor
        color #fff
        .headerLeft
            float left
            width 64px
            i
                display block
                text-align center
                font-size 20px
        .headerInput
            flex 1
            margin-top 12px
            margin-left 20px
            padding-left 20px
            height 64px
            line-height 64px
            background #fff
            border-radius 10px
            color #ccc
        .headerRight
            float right
            width 124px
            text-align center
            i
                font-size 24px
</style>
