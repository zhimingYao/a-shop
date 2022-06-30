<template>
  <div >
    <nav-bar></nav-bar>
    <keep-alive :exclude="['Login','Section',,'ShopCars']">
      <router-view></router-view>
    </keep-alive>

    <back-top></back-top>
    <bot-nav></bot-nav>
  </div>
</template>

<script>
import BotNav from './botNav/index.vue';
import NavBar from './NavBar/NavBar.vue';
import BackTop from './BackTop.vue';
export default {
  components: {
    BotNav,
    NavBar,
    BackTop
  },
  name:'NavVue',
  created() {
    console.log(this.$store.getters.token);
  },
  computed: {

    // key() {
    //   return this.$router.path + Math.random()
    // }
  }

}
</script>

<style>

</style>