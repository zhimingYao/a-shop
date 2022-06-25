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
        <ancladlist v-for="(item, idex) in typeList" :key="idex" :shop="item" :type="idex"></ancladlist>

      </div>
      <p>Knapsack</p>
      <div>
        <ul>
          <li></li>
        </ul>
        <switch-page :itemlist="swipers">
            
          </switch-page>
        <!-- <swiper-vue :shop="swipers" height="700px" type="card" :Obscuration="true"  width="900px" imgwidth="600px" marginLeft="300px"
          :loop="false" :autoplay="false"> </swiper-vue> -->

      </div>
    </div>
  </div>
</template>

<script>
import SwiperVue from "./swiper/index.vue";
import { getSwiper, getSpu, getproduct } from "@/api/home";
import Ancladlist from "./swiper/ancladlist.vue";
import SwitchPage from "./swiper/switch.vue";

export default {
  name: "Home",
  components: { SwiperVue, Ancladlist, SwitchPage },
  data() {
    return {
      swipers: [],
      list: {
        anCard: [],
        SwiperList: [],
        SwiperCarousel: [],
        SwiperColor: [],

      },

      typeList: {
        "服饰": [],
        "鞋类": [],
        "配件": [],
        "儿童专区": [],
      },
      SwiperAndList: [],
    };
  },
  mounted() {
    console.log(this.typeList);
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
    getproduct(name) {
      console.log({ name });
      getproduct(name).then((data) => {
        console.log(data.data);
        this.typeList[name] = data.res;
        console.log(this.typeList);
      });
    },
  },
  created() {
    this.getSwiper();
    this.getSpu("篮球鞋", 'anCard');
    this.getSpu("板鞋", 'SwiperList');
    this.getSpu("跑鞋", 'SwiperCarousel');
    this.getSpu("休闲鞋", 'SwiperColor');
    this.getproduct("服饰");
    this.getproduct("鞋类");
    this.getproduct("配件");
    this.getproduct("儿童专区");

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

    .AndList {
      width: 65%;
      float: right;
      margin-bottom: 50px;
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