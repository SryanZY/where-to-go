<template>
  <div :id="$style.app">
    <img src="./assets/logo.png">
    <h1 :class="$style.label">H1</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style module>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .label {
    font-size: 25px;
    color: #3ab;
  }
</style>
