<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Icon></Icon>
        <Recommend></Recommend>
    </div>
</template>

<script>
import Header from './components/header'
import Swiper from './components/swiper'
import Icon from './components/icons'
import Recommend from './components/recommend'
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {
        Header,
        Swiper,
        Icon,
        Recommend
    }

}

</script>
<style module>
</style>
