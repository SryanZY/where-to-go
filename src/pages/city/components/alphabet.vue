<template>
    <ul :class="$style.list">
        <li :class="$style.item">A</li>
        <li :class="$style.item">A</li>
        <li :class="$style.item">A</li>
    </ul>
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
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top -24%
        bottom 0
        width 40px
        .item
            text-align center
            line-height 1.8
            color $bgColor
            font-size 26px
</style>
