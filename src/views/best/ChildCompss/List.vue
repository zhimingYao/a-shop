<template>
  <div class="list">
    <list-top :listTop="getmsg"></list-top>
    <list-mid :listMiddle="getmsg"></list-mid>
    <list-bottom></list-bottom>
  </div>
</template>

<script>
import ListTop from "./childComps/ListTop.vue";
import ListBottom from "./childComps/ListBottom.vue";
import ListMid from "./childComps/ListMid.vue";
export default {
  name: "List",
  components: {
    ListTop,
    ListMid,
    ListBottom,
  },
  props: {
    getmsg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>