<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Icon></Icon>
        <Recommend></Recommend>
        <Weekend></Weekend>
    </div>
</template>

<script>
import Header from './components/header'
import Swiper from './components/swiper'
import Icon from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {
        Header,
        Swiper,
        Icon,
        Recommend,
        Weekend
    }

}

</script>
<style module>
</style>
