<template>
<div class="carousel">
   <el-carousel  height="938px" width="938px" indicator-position="outside" arrow="always" 
  
   >
     <el-carousel-item v-for="(src,index) in Images" :key="index">
      <img :src="src" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import a from '../assets/images/a.jpg'
import b from '../assets/images/b.jpg'
import c from '../assets/images/c.jpg'
import d from '../assets/images/d.jpg'
export default {
   name:'lunbo',
   data() {
    return {
        Images:[
          a,b,c,d
        ]
    }
   },
}
</script>

<style>
.el-carousel__arrow{
z-index: 10000;
width: 56px;
height: 56px;
}
.carousel{
  float: left;
  position: relative;
  left: -260px;
  height: 938px;
  width: 938px;
  cursor: pointer;
}
.el-carousel-item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 938px;
    margin: 0;
  }
  img{
    width: 938px;
    height: 938px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>