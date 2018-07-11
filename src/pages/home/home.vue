<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Icon></Icon>
    </div>
</template>

<script>
import Header from './components/header'
import Swiper from './components/swiper'
import Icon from './components/icons'
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {
        Header,
        Swiper,
        Icon
    }

}

</script>
<style module>
    .home {
        font-size: 20px;
        color: #38f;
    }
</style>
