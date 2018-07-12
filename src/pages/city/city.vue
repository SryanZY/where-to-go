<template>
    <div>
        <Header></Header>
        <Search></Search>
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'
export default {
    name: 'City',
    data () {
        return {}
    },
    components: {
        Header,
        Search
    }

}

</script>
<style lang='stylus' module>
</style>
