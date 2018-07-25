<template>
    <div :class="$style.header">
        <div :class="$style.headerLeft">
            <i class="iconfont">&#xe624;</i>
        </div>
        <div :class="$style.headerInput">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/游玩主题
        </div>
        <router-link :to="{ name: 'City' }">
            <div :class="$style.headerRight">{{ this.city }}
                <i class="iconfont">&#xe615;</i>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'homeHeader',
    computed: {
        ...mapState(['city'])
    }
}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .header
        display flex
        line-height $headerHeight
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
            margin-left 16px
            padding-left 20px
            height 64px
            line-height 64px
            background #fff
            border-radius 10px
            color #ccc
        .headerRight
            float right
            margin-left 4px
            min-width 104px
            padding 0 10px
            text-align center
            color #fff
            i
                font-size 16px
</style>
