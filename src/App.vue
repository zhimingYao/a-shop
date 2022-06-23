<template>
  <div id="app">
    <router-view></router-view>
    <bot-nav></bot-nav>
  </div>
</template>

<script>
import BotNav from '@/components/botNav/index.vue'
export default{
  components:{
    BotNav,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
