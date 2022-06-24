<template>
  <div class="shop_item">
    <div class="shop_img">
      <img :src="shop.img" alt="" />
    </div>
    <div class="shop_item_details">
      <div class="shop_title">{{shop.title}}</div>
      <div class="shop_price">{{shop.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props:{
    shop:Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.shop_item {
  margin: 4px;
  width: 176px;
  height: 280px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  &:hover{
    transform: scale(1.007);
    box-shadow: 0 0 4px 4px #eee;
  }
  img {
    width: 176px;
    height: 176px;
  }
  .shop_item_details {
    padding: 24px;
    text-align: center;
    .shop_title {
      color: #333;
      margin-bottom: 8px;
      line-height: 1.5;
      list-style: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .shop_price{
        color: #666;
        font-family: 'yg740';
        font-size: 12px;
        line-height: 1.5;
        word-break: keep-all;
    }
  }
}
</style>