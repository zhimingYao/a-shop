<template>
  <div id="app">
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <back-top></back-top>
    <bot-nav></bot-nav>
  </div>
</template>


<script>
import BotNav from '@/components/botNav/index.vue'
import NavBar from './components/NavBar/NavBar.vue'
import BackTop from './components/BackTop.vue'
export default{
  components:{
    BotNav,
    NavBar,
    BackTop
},

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-width: 1500px;
  overflow: hidden;
}
</style>
