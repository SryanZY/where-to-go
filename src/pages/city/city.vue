<template>
    <div>
        <Header></Header>
        <Search></Search>
        <List></List>
        <Alphabet></Alphabet>
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'
export default {
    name: 'City',
    data () {
        return {}
    },
    components: {
        Header,
        Search,
        List,
        Alphabet
    }

}

</script>
<style lang='stylus' module>
</style>
