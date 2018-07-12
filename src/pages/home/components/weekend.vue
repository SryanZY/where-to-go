<template>
    <section>
        <h3 :class="$style.recommendTitle">周末去哪</h3>
        <ul>
            <li :class="$style.item" class="border-bottom" v-for="item in weekendList" :key="item.id">
                <div :class="$style.imgWrapper">
                    <img :src="item.url" alt="item.title" :class="$style.itemImg">
                </div>
                <div :class="$style.itemInfo">
                    <p :class="$style.itemTitle">{{ item.title }}</p>
                    <p :class="$style.itemDesc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        weekendList: {
            type: Array,
            default () {
                return []
            }
        }
    }
}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .recommendTitle
        margin-bottom 20px
        line-height 80px
        background #eee
        text-indent 40px
        font-size 28px
        font-weight 600
    .item
        position relative
        margin-bottom 16px
        overflow hidden
        .imgWrapper
            overflow hidden
            height 0
            padding-bottom 37.5%
            .itemImg
                width 100%
        .itemInfo
            padding 24px 18px
            min-width 0
            .itemTitle
                line-height 50px
                font-size 32px
                ellipsis()
            .itemDesc
                line-height 52px
                color #616161
                font-size 26px
                ellipsis()
</style>
