<template>
    <div>
        <div :class="$style.home">Home</div>
        <router-link :to="{ name: 'List' }">列表页</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {}
    },
    components: {}

}

</script>
<style module>
    .home {
        font-size: 20px;
        color: #38f;
    }
</style>
