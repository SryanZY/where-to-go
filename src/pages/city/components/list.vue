<template>
    <div :class="$style.list" ref="wrapper">
        <div class="wrapper">
            <section :class="$style.area">
                <div :class="$style.title" class="border-topbottom">当前城市</div>
                <div :class="$style.buttonList">
                    <div :class="$style.buttonWrapper">
                        <div :class="$style.button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </section>
            <section :class="$style.area">
                <div :class="$style.title" class="border-topbottom">热门城市</div>
                <div :class="$style.buttonList">
                    <div :class="$style.buttonWrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
                        <div :class="$style.button">{{ item.name }}</div>
                    </div>
                </div>
            </section>
            <section :class="$style.area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div :class="$style.title" class="border-topbottom">{{ key }}</div>
                <ul :class="$style.itemList">
                    <li :class="$style.item" class="border-bottom" v-for="list in item" :key="list.id" @click="handleCityClick(list.name)">{{ list.name }}</li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    props: {
        hotCities: {
            type: Array
        },
        cities: {
            type: Object
        },
        letter: {
            type: String
        }
    },
    data () {
        return {}
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if (this.letter) {
                const ele = this.$refs[this.letter][0]
                this.scroll.scrollToElement(ele)
                // this.scroll.scrollToElement的参数必须是一个DOM元素
            }
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            // 编程式导航
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    }

}

</script>
<style lang='stylus' module>
    .list
        overflow hidden
        position absolute
        top 166px
        left 0
        right 0
        bottom 0
        .title
            line-height 54px
            background #eee
            padding-left 20px
            color #666
            font-size 26px
        .buttonList
            padding 10px 60px 10px 60px
            overflow hidden
            .buttonWrapper
                float left
                width 33.3%
                .button
                    margin 10px
                    padding 10px 0
                    text-align center
                    border 2px solid #ccc
                    border-radius 6px
        .itemList
            line-height 76px
            padding-left 20px
            color #666
</style>
<style lang='stylus' scoped>
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
</style>
