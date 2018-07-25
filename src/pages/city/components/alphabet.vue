<template>
    <ul :class="$style.list">
        <li :class="$style.item" v-for="item of letters" :key="item" @click="handleLetter" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{ item }}</li>
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
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetter (ev) {
            this.$emit('change', ev.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                // 函数节流，减少handleTouchMove执行次数，提高性能
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 86
                    const index = Math.floor((touchY - this.startY) / 18)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = true
        }
    },
    components: {}
}

</script>
<style lang='stylus' module>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        position absolute
        right 0
        top 12%
        bottom 0
        width 40px
        .item
            text-align center
            line-height 1.5
            color $bgColor
            font-size 24px
</style>
