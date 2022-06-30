<template>
  <div class="right">
    <!-- <div
      class="card"
      v-for="(item, index) in NewShop[0]"
      :key="index"
      @click="carded"
    >
      <img :src="item.img" alt="" />
      <div class="card-anta">
        {{ item.title }}
        <p>www:stride.fun</p>
      </div>
    </div> -->
     <shop-item v-for="(item, index) in NewShop[0]" :key="index" :shop="item" :pshow="true"
           width="210px"   ></shop-item>
  </div>
</template>

<script>
import { getproduct } from "../../../api/home";

export default {
    name: "lunbo-Right",
    data() {
        return {
            ShopList: [],
            NewShop: [],
        };
    },
    methods: {
        // 初始化执行
        getShopList1() {
            getproduct("服饰").then((data) => {
                // console.log(data);
                this.ShopList = data.res;
                console.log(this.ShopList);
                let six = this.ShopList.slice(261, 267);
                this.NewShop.push(six);
                // let b = this.ShopList.slice(262, 263);
                // this.NewShop.push(b);
                // let c = this.ShopList.slice(265, 266);
                // this.NewShop.push(c);
                // let d = this.ShopList.slice(267, 268);
                // this.NewShop.push(d);
                // let e = this.ShopList.slice(268, 269);
                // this.NewShop.push(e);
                // let f = this.ShopList.slice(271, 272);
                // this.NewShop.push(f);
                console.log(this.NewShop);
            });
        },
        carded() {
            console.log("card run");
        },
    },
    created() {
        this.getShopList1();
    },

};
</script>

<style lang="scss" scoped>
.right {
width: 30%;
  float: right;

}
</style>