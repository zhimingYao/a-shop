<template>
  <div class="listMid">
    <ul>
      <li v-for="(item, index) in imgMiddleList" :key="index" @click="getdetails(item.id)">
        <span class="icon_best">
          <strong>{{ imgMiddleList.length + index }}</strong>
          <p>BEST</p>
        </span>
        <img :src="item.img" alt="" />
        <div class="textMax">
          <div class="text_wrap">
            <div class="brand">vunque</div>
            <div class="front">{{ item.title }}</div>
          </div>
          <div class="price">
            <span class="discount_price">{{ item.price }}</span>
            <span class="base_price">{{ item.price + 500 }}</span>
            <span class="discount_rate">10%</span>
          </div>
          <p class="reservation">预定</p>
          <div class="review_box">
            <div class="graph">
              <span class="inner" style="width: 98%"></span>
            </div>
            <div class="review_count"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getImg } from "../../getImg";
export default {
  name: "ListMid",
  data() {
    return {
      imgMiddleList: [],
    };
  },
  props: {
    listMiddle: {
      type: String,
      defalut: "",
    },
  },
  methods: {
    async getImg_(parent_name, start, end) {
      const res = await getImg({ parent_name, start, end });
      // console.log(res,this.listMiddle);
      if (this.listMiddle == "全部" || "配件") {
        this.imgMiddleList = res;
      } else {
        this.imgMiddleList = res;
      }
    },
    /* 跳往详情页 */
     getdetails(id){
      this.$router.push('/detail?shopdetail='+id) 
    }
  },
  created() {
    if (this.listMiddle == "全部") {
      let arr = ["配件"];
      arr.forEach((item) => {
        this.getImg_(item, 4, 7, "price");
      });
    } else {
      this.getImg_(this.listMiddle, 4, 7);
    }
  },
  watch: {
    listMiddle() {
      if (this.listMiddle == "全部") {
        this.getImg_('配件', 4, 7, "price");
      } else {
        this.getImg_(this.listMiddle, 4, 7);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lst_middle {
  background-color: #f2f2f2;
  padding: 0px 0 0 21px;
}
li:hover {
  box-shadow: 0 0 4px 4px #ddd;
  transform: scale(1.01);
}
ul {
  display: flex;
  justify-content: space-around;
  margin-right: 21px;
  li {
    width: calc((100% / 4 - 4%));
    position: relative;
    border: 1px solid #bbb;
    .icon_best {
      width: 50px;
      height: 50px;
      background: #555;
      position: absolute;
      top: 0;
      left: 0;
      strong {
        text-align: center;
        color: white;
        display: block;
        margin-top: 4px;
        line-height: 50px;
        font-size: 26px;
      }
      p {
        display: none;
      }
    }
    img {
      width: 100%;
    }
    .textMax {
      height: 126px;
      text-align: justify;
      padding: 4%;
      .text_wrap {
        height: 61px;
        .brand {
          color: #000000;
          font-size: 13px;
          margin-bottom: 10px !important;
          font-family: "yg750";
          width: auto;
        }
        .front {
          color: #000000;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 14px;
          margin-bottom: 9px;
          padding-top: 3px;
        }
        .product {
          line-height: 15px;
          color: #555;
          overflow: hidden;
          margin-bottom: 16px;
        }
      }
      .price {
        position: relative;
        font-family: "ProximaNova-Regular";
        line-height: 100%;
        margin-bottom: 10px;
        .discount_price {
          font-size: 16px;
          color: #000 !important;
          margin-right: 8px;
        }
        .base_price {
          font-size: 12px;
          color: #808080;
          text-decoration: line-through;
        }
        .discount_rate {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 16px;
          color: #ff4000;
        }
      }
      .reservation {
        border: 1px solid #9b9b9b;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        width: 30px;
        height: 18px;
        color: #b2b2b2;
        box-shadow: 1px 1px 2px #9b9b9b;
      }
    }
  }
}
</style>