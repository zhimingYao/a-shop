<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部固定信息栏 -->
    <BackTop />
    <BtnNav />
  </div>
</template>
<script>
import BtnNav from '@/components/BtnNav.vue';
import BackTop from '@/components/BackTop.vue';
export default {
  name: 'App',
  components: {
    BtnNav,
    BackTop
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
}
</style>
