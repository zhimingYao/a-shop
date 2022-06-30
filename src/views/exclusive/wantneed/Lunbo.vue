<template>

  <div class="carousel">
    <el-carousel
    height="900px"
      
    >
      <el-carousel-item v-for="(src, index) in Images" :key="index">
        <img :src="src" alt="" class="img1"/>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
import a from "../../../assets/images/a.jpg";
import b from "../../../assets/images/b.jpg";
import c from "../../../assets/images/c.jpg";
import d from "../../../assets/images/d.jpg";
export default {
  name: "lunbo",
  data() {
    return {
      Images: [a, b, c, d],
    };
  },
};
</script>

<style scoped>

.carousel{
  width: 69%;

    float: left;
}

.img1 {
  width: 100%;
  height: 100%;
}

</style>