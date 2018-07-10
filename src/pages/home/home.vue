<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
    </div>
</template>

<script>
import Header from './components/header'
import Swiper from './components/swiper'
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {
        Header,
        Swiper
    }

}

</script>
<style module>
    .home {
        font-size: 20px;
        color: #38f;
    }
</style>
