<template>
<div class="tops">
  <div class="top">
    <div class="top1">
      <img src="../../assets/image/toplogo.png" alt="" srcset="" @click="$router.push('/home')">
      </div>
      <div class="top2">
        <div class="site-search">
       <div id="search">
            <div class="ipt">
              <input type="text" name="s" class="text" placeholder="潮流,从搜索开始" style= "background-color:transparent;border:0;" />
            </div>
           <img src="../../assets/image/search.png" alt="">
       </div>
   </div>
      </div>
      <div class="top3">
        <div id="top3">
          <img src="../../assets/image/join.png" alt="" class="img1" @click="$router.push('/register')">
          <img src="../../assets/image/login.png" alt="" @click="$router.push('/login')">
          <img src="../../assets/image/shopCar.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name:'Top',
}
</script>

<style lang="scss">

.tops{
  background-color: #fff(230, 230, 235);
  width: 100%px;
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
  .top{
    width:1500px ;
    margin: 0 auto;
    .top1{
  float: left;
  cursor: pointer;
}
.trl{
  position: relative;
  top: -9px;
    width:0;
    height:0px;
    border:3px solid ;
    border-bottom: 5px solid #000;
    border-color: transparent transparent #000 transparent;
    }
  span{
    font-weight: 750;
    font-size: 25px;
    
  }
  } 
  .top2{
    margin: 0 auto;
    .site-search{
    	margin: 0 auto;
    	width:300px;
      height: 60px;
      line-height: 60px;
}
#search{
	position:relative;
}
#search input{
  height: 32px;
  width: 300px;
	padding-right:30px;
  outline: none;
  background-color: rgba(32, 74, 102, 0);
 
        

}
.ipt{
  height: 46px;
  width: 328px;
  border-bottom: 2px solid #000;
}
img{
  cursor: pointer;
  position: relative;
  top: -38px;
  width: 28px;
  height: 28px;
  margin-left: 300px;
}
  }
  .top3{
    cursor: pointer;
    float: right;
    width: 200px;
    img{
      height: 38px;
      width: 36px;
      position: relative;
      top: -49px;
    }
    p{
      position: relative;
      top: -116px;
      padding-left: 78%;
    }
    .img1{
      margin-right: 25px;
    }
    .img3{
      width: 25px;
      height: 24px;
      position: relative;
      right: -30px;
      top: -65px;
    }
    #tops{
      float: left;
    }
  }
}
</style>