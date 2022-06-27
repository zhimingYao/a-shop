<template>

  <div class="section">
    <h1>{{ $route.params.iten }}</h1>
    <p>Home / Secondary</p>
    <div class="section-top">
      <div class="top">
        <h1>{{ $route.params.iten }}专区</h1>
        <p>www.stride.fun</p>
      </div>
      <div class="bottom">
        <h3>今日推荐</h3>
      </div>
      <div class="section-bot clearfix">
        <span class="left">共计{{ count }}件</span>
        <div class="right">
          <el-select v-model="value1" placeholder="请选择">
            <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in Thesorting" :key="item.label" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

        </div>


      </div>
      <div class="clearfix">
        <shop-item v-for="(item, index) in shoplist" :key="index" :shop="item" :pshow="true" height="300px" width="19%">
        </shop-item>
      </div>
      <el-pagination background layout="prev, pager, next" :total="count" :current-page.sync='page' :page-size="value1">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { getSpu } from "@/api/home";

export default {
  name: 'Section',
  data() {
    return {
      list: [],
      shoplist: [],
      count: 0,
      options: [{
        value: 10,
        label: 10
      }, {
        value: 20,
        label: 20
      }, {
        value: 30,
        label: 30,
      },],
      value1: 10,
      Thesorting: [{
        value: '默认',
        label: '默认'
      }, {
        value:(name='price')=> {
          return function (a, b) {
            var value1 = a[name];
            var value2 = b[name];
            // console.log(a, b);
            return value2 - value1;
          }
        },
        label: '价格最高'
      }, {
     value:(name='price')=> {
          return function (a, b) {
            var value1 = a[name];
            var value2 = b[name];
            // console.log(a, b);
            return value1*1 - value2*1;
          }
        },
      label: '价格最底',
    }, {
       value:(name='sale')=> {
          return function (a, b) {
            var value1 = a[name];
            var value2 = b[name];
            // console.log(a, b);
            return value2 - value1;
          }
        },
      label: '销量最高',
    },],
    value2: '默认',
      page: 1,

    }
},

methods: {
  getSpu(name) {
    console.log({ name });
    getSpu(name).then((data) => {
      console.log(data.data);
      this.list = data.data;
      this.shoplist = this.list.slice(0, this.value1)
      this.count = this.list.length
      console.log(this.list);
    });
  },


},
watch: {
  '$route': {
    deep: true,
      handler() {
      this.getSpu(this.$route.params.iten)
    }
  },
  page: {
    deep: true,
      handler(nval, oval) {

      this.shoplist = this.list.slice((nval - 1) * this.value1, nval * this.value1)
      console.log(nval, this.shoplist);
    }
  },
  value1: {
    deep: true,
      handler(nval, oval) {

      this.shoplist = this.list.slice((this.page - 1) * this.value1, this.page * this.value1)
      console.log(nval, this.shoplist);
    }
  },
  value2: {
    deep: true,
      handler(newval){
      if (newval == '默认') {
        this.getSpu(this.$route.params.iten)
        
      }else{
         console.log(1);
        this.list = this.list.sort(newval())
        console.log(this.list);
        this.page = 1
        this.shoplist = this.list.slice((this.page - 1) * this.value1, this.page * this.value1)
      }
    }

  }
},
created() {
  console.log(this.$route.params.iten, '......');
  this.getSpu(this.$route.params.iten)
},
  
  }

</script>

<style lang="scss" scoped>
.section {
  width: 1200px;
  margin: 20px auto;

  .section-top {

    .top {
      height: 300px;
      text-align: left;
      background-color: #5a5a5a;
      color: white;
      margin-top: 20px;

      * {
        padding-top: 50px;
        padding-left: 50px;
      }


    }

    .bottom {
      height: 50px;
      text-align: left;
      line-height: 50px;
      border-bottom: 2px solid #000;
    }

    .section-bot {
      margin-top: 20px;

    }
  }
}
</style>