<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <bot-nav></bot-nav>
  </div>
</template>

<script>
import BotNav from '@/components/botNav/index.vue'
import NavBar from './components/NavBar/NavBar.vue'
export default{
  components:{
    BotNav,
    NavBar
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
