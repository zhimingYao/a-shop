<template>
  <div id="app">
 <Top></Top>
 <Lunbo></Lunbo>
 <lunboRight></lunboRight>
 <router-view></router-view> 
  </div>
</template>
<script>
// 导入顶部
import Top from '@/views/Top.vue'
import Lunbo from '@/components/Lunbo.vue'
import lunboRight from './components/lunbo-right.vue';
// 导出App
export default {
  name: "App",
  components:{
    Top,
    Lunbo,
    lunboRight,
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
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
