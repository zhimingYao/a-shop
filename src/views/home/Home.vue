<template>
  <div class="home">
    <swiper-vue :shop="swipers" height="600px"> </swiper-vue>
    <div class="title">
      <p>Basketball shoes</p>
      <div>
        <div class="clearfix shoplist">
          <shop-item
            v-for="(item, index) in list.anCard.slice(0, 4)"
            :key="index"
            :shop="item"
            :pshow="true"
            height="500px"
            width="360px"
          ></shop-item>
        </div>
        <p>Skate shoes</p>
        <div>
          <swiper-vue
            :shop="list.SwiperList"
            height="450px"
            type="card"
            :showhaden="false"
            width="500px"
            :loop="false"
            :autoplay="false"
            :end="20"
          >
          </swiper-vue>
        </div>
        <p>Running shoes</p>
        <div>
          <swiper-vue
            :shop="list.SwiperCarousel"
            height="450px"
            type="card"
            :showhaden="false"
            width="500px"
            :loop="false"
            :autoplay="false"
            :end="20"
          >
          </swiper-vue>
        </div>
        <p>Casual shoes</p>
        <div>
          <swiper-vue
            :shop="list.SwiperColor"
            type="card"
            :Obscuration="true"
            height="600px"
            :end="9"
            :loop="false"
            :autoplay="false"
          >
          </swiper-vue>
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
        console.log(data.data.res);
        this.swipers = data.data.res;
      });
    },
    getSpu(name, list) {
      console.log({ name });
      getSpu(name).then((data) => {
        console.log(data);
        this.list[list] = data.data.data;
        console.log(this.list[list]);
      });
    },
  },
  created() {
    this.getSwiper();
    this.getSpu("篮球鞋", "anCard");
    this.getSpu("板鞋", "SwiperList");
    this.getSpu("跑鞋", "SwiperCarousel");
    this.getSpu("休闲鞋", "SwiperColor");
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

  p {
    font-size: 60px;
    font-family: "ProximaNova-Thin";
    font-weight: 100;
    margin: 30px 0;
  }
}
</style>