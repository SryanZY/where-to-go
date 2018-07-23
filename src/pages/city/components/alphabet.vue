<template>
    <ul :class="$style.list">
        <li :class="$style.item" v-for="(item, key) of cities" :key="key">{{ key }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        cities: {
            type: Object
        }
    },
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
        top 22%
        bottom 0
        width 40px
        .item
            text-align center
            line-height 1.8
            color $bgColor
            font-size 26px
</style>
