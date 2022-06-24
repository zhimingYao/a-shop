<template>
  <section class="cube-container">
    <div id="cube">
      <figure class="front">
        <div class="col-md-8 col-sm-12">
          <img src="../../assets/image/pop1.png" />
        </div>
      </figure>
      <figure class="back">
        <div class="col-md-8">
          <img src="../../assets/image/pop2.png" />
        </div>
      </figure>
      <figure class="right">
        <div class="col-md-8">
          <img src="../../assets/image/pop3.png" />
        </div>
      </figure>
      <figure class="left">
        <div class="col-md-8">
          <img src="../../assets/image/pop4.png" />
        </div>
      </figure>
    </div>
    <el-row>
      <el-col :span="12" class="el-col-left"><div class="grid-content" @click="popright"></div></el-col>
      <el-col :span="12" class="el-col-rigth"><div class="grid-content" @click="popleft"></div></el-col>
    </el-row>
  </section>
</template>

<script>
import $ from '@/assets/js/jquery.min.js';
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    popright() {
      console.log('previous method');
      this.counter -= 90;
      var rotation = 'translateZ( -50vw ) rotateY( ' + this.counter + 'deg )';
      $('#cube').css('transform', rotation);
    },
    popleft() {
      console.log('previous method');
      this.counter += 90;
      var rotation = 'translateZ( -50vw ) rotateY( ' + this.counter + 'deg )';
      $('#cube').css('transform', rotation);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 122%;
  height: 101%;
}
.cube-container {
  height: 69vh;
  position: relative;
  perspective: 2000px;
  // background: rgb(247, 241, 241);
  background: #222;
}

#cube {
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform-style: preserve-3d;
  z-index: -200;
}

#cube figure {
  margin: 0;
  width: 100vw;
  height: 82vh;
  display: flex;
  position: absolute;
  color: white;
  .col-md-4 {
    color: #222;
    .htmleaf-header {
      h1 {
        font-size: 30px;
        letter-spacing: 30px;
      }
      p {
        font-size: 16px;
        letter-spacing: 20px;
      }
    }
  }
}

#cube .front {
  transform: rotateY(0deg) translateZ(50vw);
}
#cube .back {
  transform: rotateY(180deg) translateZ(50vw);
}
#cube .right {
  transform: rotateY(90deg) translateZ(50vw);
}
#cube .left {
  transform: rotateY(-90deg) translateZ(50vw);
}
#cube .top {
  transform: rotateX(90deg) translateZ(50vw);
}
#cube .bottom {
  transform: rotateX(-90deg) translateZ(50vw);
}
#cube {
  transform: translateZ(-50vw);
}
#cube {
  transition: transform 1.5s ease-in-out;
}

article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.el-col-left,
.el-col-rigth {
  width: 50%;
}
.grid-content {
  min-height: 36px;
  height: 100vh;
}
</style>
