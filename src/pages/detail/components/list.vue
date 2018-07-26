<template>
    <div>
        <div :class="$style.item" v-for="(item, index) in list" :key="index">
            <div :class="$style.itemTitle" class="border-bottom">
                <span :class="$style.itemIcon"></span>
                {{ item.title }}
            </div>
            <!--递归组件，调用自身-->
            <div v-if="item.children" :class="$style.itemChildren">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailList',
    props: {
        list: {
            type: Array
        }
    },
    data () {
        return {}
    },
    components: {}

}

</script>
<style lang='stylus' module>
    .itemTitle
        line-height 80px
        font-size 32px
        padding 0 20px
        .itemIcon
            position: relative
            left: 6px
            top: 6px
            display: inline-block
            width: 36px
            height: 36px
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            margin-right: 10px
            background-size: 40px 300px
    .itemChildren
        padding 0 20px
</style>
