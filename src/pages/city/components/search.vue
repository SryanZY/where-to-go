<template>
    <div>
        <div :class="$style.search">
            <input v-model="keyword" type="text" :class="$style.searchInput" placeholder="请输入城市名称或拼音">
        </div>
        <div :class="$style.searchContent" ref="search" v-show="keyword">
            <ul>
                <li v-for="item of list" :key="item.id" :class="$style.searchItem" class="border-bottom">{{item.name}}</li>
                <li :class="$style.searchItem" class="border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        cities: {
            type: Object
        }
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    }

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
    .searchContent
        overflow hidden
        z-index 1
        position absolute
        top 158px
        left 0
        right 0
        bottom 0
        background #eee
        .searchItem
            line-height 62px
            background #fff
            color #666
            padding-left 20px
            &:last-child
                text-align center
</style>
