<template>
  <nav ref="nav">
    <div class="nav" :class="{ navFixed: isFixed }">
      <img class="img" src="" alt="图片logo" v-show="isShow">
      <ul class="classify">
        <li>
          <router-link to="/shoplist">服饰</router-link>
        </li>
        <li>
          <router-link to="/shoplist">鞋类</router-link>
        </li>
        <li>
          <router-link to="/shoplist">配件</router-link>
        </li>
        <li>
          <router-link to="/shoplist">儿童专区</router-link>
        </li>
        <li></li>
        <li>
          <router-link to="/shoplist">POP</router-link>
        </li>
        <li>
          <router-link to="/shoplist">EXCLUSIVE</router-link>
        </li>
        <li>
          <router-link to="/shoplist">EVENT</router-link>
        </li>
        <li>
          <router-link to="/shoplist">BEST</router-link>
        </li>
      </ul>
      <ul class="member" v-show="isShow">
        <li>
          <a href="">搜索</a>
        </li>
        <li>
          <a>MY</a>
        </li>
        <li>
          <a>购物车</a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "NavBarTop",
  data() {
    return {
      isShow: false,
      isFixed: false
    }
  },
  mounted() {
    let navTopDom = this.$refs["nav"];
    let h = parseFloat(getComputedStyle(navTopDom)["height"]);
    let p = parseFloat(getComputedStyle(navTopDom)["paddingTop"]);
    let pb = parseFloat(getComputedStyle(navTopDom)["paddingBottom"]);
    let H = h + p + pb;
    window.addEventListener("scroll", () => {
      console.log(H);
      if (scrollY > H - 10) {
        this.isFixed = true;
        this.isShow = true
      } else {
        this.isFixed = false;
        this.isShow = false
      }
    });
  },
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}

li {
  display: inline-block;

  a {
    font-size: 14px;
  }

}

nav {
  background-color: wheat;
  margin: 0;
  padding: 0;
  z-index: 999;
  min-width: 1500px;

  .nav {
    width: 100%;
    height: 60px;
    background-color: black;
    min-width: 1500px;

    .img {
      width: 96px;
      height: 60px;
      position: absolute;
      top: 0px;
      left: 7%;
      float: left;
    }

    .classify {
      width: 60%;
      height: 60px;
      margin: 0 auto;

      li {
        margin-left: 5%;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: white;
      }

      li:hover a {
        color: rgb(70, 163, 129);
      }
    }

    .member {
      width: 213px;
      height: 60px;
      position: absolute;
      top: 0px;
      right: 5%;
      float: left;

      li {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        padding: 0 auto;
      }

      li:hover {
        background-color: #999;

      }
    }

  }
}

.navFixed {
  position: fixed;
  top: 0;
  width: 100% !important;
  z-index: 10;
  animation: backtop .5s;
}
</style>