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
    data () {
        return {
            recommendList: [
                {
                    id: '0001',
                    url: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
                    title: '金海湖风景区',
                    desc: '1912条评论'
                },
                {
                    id: '0002',
                    url: 'http://img1.qunarzz.com/sight/p0/1602/f9/f9095e245afd18fb90.water.jpg_200x200_f0644cd1.jpg',
                    title: '中央电视塔',
                    desc: '3202条评论'
                },
                {
                    id: '0003',
                    url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
                    title: '世界花卉大观园',
                    desc: '4474条评论'
                },
                {
                    id: '0004',
                    url: 'http://img1.qunarzz.com/sight/p0/1801/56/568ebf34301216dfa3.img.jpg_200x200_09bfb2ac.jpg',
                    title: '北京活的3D博物馆',
                    desc: '828条评论'
                },
                {
                    id: '0005',
                    url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
                    title: '八达岭长城',
                    desc: '32800条评论'
                }
            ]
        }
    },
    components: {}

}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .recommendTitle
        margin-top 40px
        margin-bottom 30px
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
