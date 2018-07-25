<template>
    <div>
        <Header></Header>
        <Search :cities="cities"></Search>
        <List :cities="cities" :hotCities="hotCities" :letter="letter"></List>
        <Alphabet :cities="cities" @change="handleLetterChange"></Alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'
export default {
    name: 'City',
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    mounted () {
        this.getCityInfo()
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.handleCityInfo)
        },
        handleCityInfo (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
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
