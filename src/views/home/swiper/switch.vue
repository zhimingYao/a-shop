<template>
  <div class="swipertap">
    <div class="container">
      <!-- swiper1 -->
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div
            :class="{selected:index==selected}"
            class="swiper-slide"
            v-for="(item, index) in title"
            :key="index"
            @click="selected=index"
          >
            <span class="span_content">{{ item }}</span>
          </div>
        </div>
      </div>
      <!-- swiper2 -->
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in tapimg.slice(8,12)"
            :key="index"
          >
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
window.onload = function () {};
export default {
  name: "swipertap",
  props: ["tapimg"],
  data() {
    return {
      title: ["富强", "民主", "和谐", "平等"],
      selected:0,
    };
  },
  created() {},
  mounted() {
    function setCurrentSlide(ele, index) {
      $(".swiper1 .swiper-slide").removeClass("selected");
      ele.addClass("selected");
      //swiper1.initialSlide=index;
    }

    var swiper1 = new Swiper(".swiper1", {
      slidesPerView: 5,
      paginationClickable: true,
      spaceBetween: 10,
      freeMode: true,
      loop: false,
      onTab: function (swiper) {
        var n = swiper1.clickedIndex;
        alert(1);
      },
    });
    swiper1.slides.each(function (index, val) {
      var ele = $(this);
      ele.on("click", function () {
        setCurrentSlide(ele, index);
        swiper2.slideTo(index, 500, false);
        //mySwiper.initialSlide=index;
      });
    });

    var swiper2 = new Swiper(".swiper2", {
      direction: "horizontal",
      loop: false,
      autoHeight: true,
      onSlideChangeEnd: function (swiper) {
        var n = swiper.activeIndex;
        setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
        swiper1.slideTo(n, 500, false);
      },
    });
  },
};
</script>



<style  lang="scss" scoped>
.show {
  width: 95%;
  overflow: hidden;
  margin: 20px auto;
  height: 100px;
  border: 5px solid #eee;
  border-radius: 5px;
  font-size: 14px;
}

// body {
//   min-width: 320px;
//   max-width: 640px;
//   margin: 0 auto;
//   color: #b5b5b5;
//   padding: 0;
//   font: "Microsoft Yahei", Verdana, Tahoma;
//   text-align: center;
// }

.container {
  width: 100%;
  .swiper-container {
    width: 50%;
    margin: 0 auto;
    .swiper-wrapper {
      width:100%;
      display: flex;
      // justify-content: center;
      
      text-align: center;
      .swiper-slide {
        cursor: pointer;
        // letter-spacing: 1em;
        margin-left: 10px;
        margin-bottom: 8px;
        .span_content {
          font-size: 20px;
          color: #b5b5b5;
        }
      }

    }
  }
}
.swiper1 .selected {
  color: #333;
  border-bottom: 3px solid #302e2e;
}



.swiper1 {
  color: #b5b5b5;
  width: 50%;
  display: flex;
  .swiper-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    .span_content{
      width: 50%;
      font-size: 20px;
      color: #b5b5b5;
    }
  }
}
.swiper1 .swiper-slide {
  width: 20%;
  color: #b5b5b5;
  text-align: center;
  font-size: 18px;
  height: 50px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  cursor: pointer;
}
.swiper1 .selected {
  color: #333;
  border-bottom: 3px solid #302e2e;
}

.swiper2 {
  width: 100%;
  height: 550px;
  img{
    height: 100%;
  }
}
.swiper2 .swiper-slide {
  height: 550px;
  text-align: center;
  background-color: #f7f5f5e1;
}
</style>