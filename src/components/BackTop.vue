<template>
  <div class="backtop">
    <div class="scroll">
      <div id="shopCar" @click="drawer = true" type="primary">
        <img src="../assets/image/购物车.png" alt />
      </div>
      <div id="service" @click="service = true" type="primary">
        <img src="../assets/image/客服优先.png" alt />
      </div>
      <div id="toTop" v-if="isToTop" @click="toTop(step)">
        <img src="../assets/image/方向-向上.png" alt />
      </div>
      <div id="toBottom" v-if="isToBottom" @click="toBottom(step)">
        <img src="../assets/image/方向-向下.png" alt />
      </div>
    </div>
    <!-- 购物车 -->
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size="20%">
      <span> 我是购物车我来啦!</span>
    </el-drawer>
    <el-drawer title="我是标题" :visible.sync="service" :with-header="false" size="20%">
      <span> 我是客服我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  props: {
    step: {
      //此数据是控制动画快慢的
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      // 向上向下
      isToTop: true,
      isToBottom: true,
      drawer: false, // 购物车
      service: false //客服
    };
  },
  methods: {
    toTop(i) {
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop -= i;
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTop(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    toBottom(i) {
      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight;
      // var badyHeiget = document.bady.scrollHeight

      // console.log(clientHeight);
      var height = scrollHeight - clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      if (document.documentElement.scrollTop < height) {
        var c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  created() {
    var vm = this;
    window.onscroll = function () {
      let h = document.body.scrollHeight;
      let H = document.documentElement.scrollTop;
      let height = document.documentElement.clientHeight || document.body.clientHeight;
      // console.log(h, H, H + height);
      if (H < 60) {
        vm.isToTop = false;
        vm.isToBottom = true;
      } else if (H + height > h - 60) {
        vm.isToTop = true;
        vm.isToBottom = false;
      } else {
        vm.isToTop = true;
        vm.isToBottom = true;
      }
    };
  }
};
</script>
<style scoped lang="scss">
.scroll {
  position: fixed;
  right: 20px;
  bottom: 10px;
  width: 45px;
  // height: 90px;
  cursor: pointer;
  // display: none;
  z-index: 100;
  // display: block;
  color: #fff;

  & > div {
    width: 50px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 35px;
    font-family: '黑体';
    background-color: black;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
img {
  width: 20px;
}
</style>
