<template>
    <section>
        <h3 :class="$style.recommendTitle">猜你喜欢</h3>
        <ul>
            <li :class="$style.item" class="border-bottom" v-for="item in recommendList" :key="item.id">
                <div :class="$style.imgWrapper">
                    <img :src="item.url" alt="item.title" :class="$style.itemImg">
                    <div :class="$style.itemTag">随买随用</div>
                </div>
                <div :class="$style.itemInfo">
                    <p :class="$style.itemTitle">{{ item.title }}</p>
                    <p :class="$style.itemDesc">{{ item.desc }}</p>
                    <button :class="$style.itemButton">查看详情</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        recommendList: {
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
        margin-top 20px
        margin-bottom 20px
        line-height 80px
        background #eee
        text-indent 40px
        font-size 28px
        font-weight 600
    .item
        display flex
        margin-bottom 20px
        height 250px
        overflow hidden
        .imgWrapper
            position relative
            overflow hidden
            width 200px
            height 200px
            padding 20px
            .itemImg
                width 100%
                height 100%
            .itemTag
                position absolute
                top 18px
                left 20px
                width 110px
                height 38px
                background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
                background-size 100%
                color: #fff
                font-size: 24px
                line-height: 38px
                text-indent: 8px
        .itemInfo
            flex 1
            padding 20px 10px
            min-width 0
            .itemTitle
                line-height 50px
                font-size 32px
                ellipsis()
            .itemDesc
                line-height 52px
                color #ccc
                ellipsis()
            .itemButton
                margin-top 32px
                background #ff9300
                color #fff
                padding 0 40px 4px 40px
                border-radius 12px
                line-height 50px
</style>
