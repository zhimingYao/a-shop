<template>
  <div class="home">
    <swiper-vue :shop="swipers" height="700px"> </swiper-vue>
    <div class="title">
      <p>Basketball shoes</p>
      <div>
        <div class="clearfix shoplist">
          <shop-item v-for="(item, index) in list.anCard.slice(0, 4)" :key="index" :shop="item" :pshow="true"
            height="500px" width="360px"></shop-item>
        </div>
        <p>Skate shoes</p>
        <div>
          <swiper-vue :shop="list.SwiperList" height="450px" type="card" :showhaden="false" width="500px" :loop="false"
            :autoplay="false" :end="20">
          </swiper-vue>
        </div>
        <p>Running shoes</p>
        <div>
          <swiper-vue :shop="list.SwiperCarousel" height="450px" type="card" :showhaden="false" width="500px"
            :loop="false" :autoplay="false" :end="20">
          </swiper-vue>
        </div>
        <p>Casual shoes</p>
        <div>

          <swiper-vue :shop="list.SwiperColor" type="card" :Obscuration="true" height="600px" :start="21" :end="30"
            :loop="false" :autoplay="false"> </swiper-vue>
        </div>
        <div class="clearfix">
          <shop-item v-for="(item, index) in list.SwiperColor.slice(0, 7)" :key="index" :shop="item" :pshow="true"
            height="300px" width="200px"></shop-item>
        </div>
        <p>Recommend+</p>
        <div class="SwiperAndList clearfix">
          <div class="minlunb">
            <swiper-vue :shop="list.anCard" height="500px" :autoplay="false" :end="20">
            </swiper-vue>
          </div>
          <div class="AndList">
            <shop-item v-for="(item, index) in list.anCard.slice(0, 12)" :key="index" :shop="item" :pshow="true"
              height="240px" width="150px"></shop-item>
          </div>
        </div>
      </div>
       <swiper-vue :shop="swipers" height="700px"> </swiper-vue>
       <div>
        <div>
          <div><h2>鞋类</h2><p>more<svg-icon iconClass="sanjiao3" size="40" className="svg-icon-box"/></p></div>
          <div>
            <shop-item v-for="(item, index) in list.anCard.slice(0, 12)" :key="index" :shop="item" :pshow="true"
              height="240px" width="150px"></shop-item>
          </div>
          </div>
       
       </div>
    </div>
  </div>
</template>

<script>
import SwiperVue from "./swiper/index.vue";
import { getSwiper, getSpu } from "@/api/home";

export default {
  name: "Home",
  components: { SwiperVue },
  data() {
    return {
      swipers: [],
      list: {
        anCard: [],
        SwiperList: [],
        SwiperCarousel: [],
        SwiperColor: [],
      },

      AnCard: [],
      SwiperAndList: [],
    };
  },
  methods: {
    getSwiper() {
      getSwiper().then((data) => {
        console.log(data.res);
        this.swipers = data.res;
      });
    },
    getSpu(name, list) {
      console.log({ name });
      getSpu(name).then((data) => {
        console.log(data.data);
        this.list[list] = data.data;
        console.log(this.list[list]);
      });
    },
  },
  created() {
    this.getSwiper();
    this.getSpu("篮球鞋", 'anCard');
    this.getSpu("板鞋", 'SwiperList');
    this.getSpu("跑鞋", 'SwiperCarousel');
    this.getSpu("休闲鞋", 'SwiperColor');

  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0 auto;

  margin-top: 50px;
  padding: 20px;
  width: 1500px;

  .shoplist {
    margin: 20px auto;

    * {
      width: 25%;
    }
  }

  .SwiperAndList {
    
    .minlunb {
      width: 35%;
      float: left;
    }
    .AndList{
      width: 65%;
      float: right;
    }

  }

  p {
    font-size: 60px;
    font-family: "ProximaNova-Thin";
    font-weight: 100;
    margin: 30px 0;
  }
}
.svg-icon-box {
          width: 32px;
          height: 32px;
          color: #fff;
}
</style>