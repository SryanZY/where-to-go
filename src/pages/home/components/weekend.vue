<template>
    <section>
        <h3 :class="$style.recommendTitle">周末去哪</h3>
        <ul>
            <li :class="$style.item" class="border-bottom" v-for="item in recommendList" :key="item.id">
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
    data () {
        return {
            recommendList: [
                {
                    id: '0001',
                    url: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
                    title: '漂流勇进，烧烤露营',
                    desc: '轻松水上漂，任我乐逍遥'
                },
                {
                    id: '0002',
                    url: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
                    title: '北京清凉避暑胜地',
                    desc: '到大自然中享受“天然空调”的清凉'
                },
                {
                    id: '0003',
                    url: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                    title: '北京必游TOP10',
                    desc: '来北京必去的景点非这些地方莫属'
                },
                {
                    id: '0004',
                    url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
                    title: '寻找北京的皇城范儿',
                    desc: '数百年的宫廷庙宇，至今依旧威严霸气'
                },
                {
                    id: '0005',
                    url: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
                    title: '学生最爱的博物馆',
                    desc: '周末干嘛？北京很多博物馆已经免费开放啦'
                }
            ]
        }
    }
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
