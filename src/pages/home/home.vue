<template>
    <div>
        <Header></Header>
    </div>
</template>

<script>
import Header from './components/header'
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {
        Header
    }

}

</script>
<style module>
    .home {
        font-size: 20px;
        color: #38f;
    }
</style>
