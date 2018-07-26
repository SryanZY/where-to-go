<template>
    <div>
        <Banner></Banner>
        <Header></Header>
        <div :class="$style.content"></div>
    </div>
</template>

<script>
import Banner from './components/banner'
import Header from './components/header'
export default {
    name: 'Detail',
    data () {
        return {}
    },
    components: {
        Banner,
        Header
    }

}

</script>
<style lang='stylus' module>
    .content
        height 1200px
</style>
