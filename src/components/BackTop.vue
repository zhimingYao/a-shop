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
      <div>
        <div class="drawerHeader">
          <span>购物车</span>
        </div>

        <div class="drawercontent">
          <span class="spanCard">
            <span>共 {{ count }} 件宝贝</span>
            <button>管理</button>
          </span>
        </div>

        <!-- 购物车详情 -->
        <div class="shopListCar" v-for="(item, index) in shopCarList" :key="index">
          <div class="shopImg">
            <img src="../assets/image/logo.png" />
          </div>
          <div class="details">
            <p class="showTitle">{{ item.title }}</p>
            <p class="shopCount">数量: {{ item.count }}</p>
            <p class="detailsSpan">
              <span>¥ {{ item.price }} </span>
              <span class="discoun_price">¥ {{ item.discountPrice }}</span>
            </p>
          </div>
        </div>
      </div>
    </el-drawer>
    <!-- 客服 -->
    <el-drawer title="我是标题" :visible.sync="service" :with-header="false" size="20%">
      <span>我是客服我来啦!</span>
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
      drawer: true, // 购物车
      service: false, //客服
      count: 1, // 购物车商品数量
      shopCarList: [
        {
          title: '安踏女鞋111111111111',
          count: 1, // 数量
          price: 219, //价格
          discountPrice: 129
          // img_scr_url: '../assets/image/logo.png'
        },
        {
          title: '安踏女鞋111111111111',
          count: 1, // 数量
          price: 219, //价格
          discountPrice: 129
          // img_scr_url: '../assets/image/logo.png'
        }
      ]
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

      console.log(clientHeight);
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
      console.log(h, H, H + height);
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

.drawerHeader {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #000;
  color: #fff;
}
.drawercontent {
  .spanCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: #ccc;
    padding: 0 10px;
    font-size: 12px;
    button {
      width: 50px;
      height: 20px;
      border: 0;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
  }
}
.shopListCar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  .shopImg {
    float: left;
    margin-right: 15px;

    img {
      width: 70px;
      margin-left: 20px;
    }
  }
  .details {
    float: left;
    text-align: left;
    .showTitle {
      height: 20px;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .shopCount {
      color: #c4c4c4;
    }
    .detailsSpan {
      .discoun_price {
        text-decoration-line: line-through;
        color: #bdb6b3;
      }
    }
  }
}
</style>
