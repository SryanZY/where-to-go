<template>
    <div :class="$style.search">
        <input type="text" :class="$style.searchInput" placeholder="请输入城市名称">
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
    .search
        height 72px
        background $bgColor
        padding 0 30px
        .searchInput
            box-sizing border-box
            height 62px
            padding 0 10px
            line-height 62px
            width 100%
            text-align center
            border-radius 12px
            color #666
</style>
