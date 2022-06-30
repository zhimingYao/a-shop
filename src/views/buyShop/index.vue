<template>
  <div class="buyShop">
    <h1>结算</h1>
    <div class="box">
      <div class="box-left">
        <!-- 收获地址 -->
        <div class="address">
          <div class="address-top">
            <p>收货地址</p>
            <p class="top_title" @click="flag = true">新增地址</p>
          </div>
          <!-- 收获地址详情  -->
          <div class="address-bottom">
            <ul>
              <li v-for="item in address" :key="item.id">
                <div class="Harvest_address">
                  <div class="address_one">
                    <p>收货人:{{ item.name }}</p>
                    <p>收货地址:{{ item.address }}</p>
                    <p>收货电话:{{ item.tel }}</p>
                  </div>
                  <div class="address_two">
                    <p>默认地址</p>
                    <span @click="dialog">编辑</span>/<span @click="dialog">更多</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <addAddresses v-show="flag"></addAddresses>

        </div>
        <!-- 商品明细 -->
        <div class="buyDetail">
          <div class="buyDetail-top">
            <p>商品明细（共 {{ buyShop.length }} ）件</p>
          </div>
          <!-- 商品列表 -->
          <div class="buyDetail-bottom">
            <div class="list" v-for="(shopcar, index) in buyShop" :key="index">
              <ul class="shopcar">
                <li>
                  <img :src="shopcar.img" alt="" />
                </li>
                <li>
                  <!-- title -->
                  <p>{{ shopcar.title }}</p>
                  <!-- 颜色  尺码  -->
                  <span class="color">颜色:{{ (getparams(shopcar.params))[0] }}</span>&nbsp;;
                  <span>尺码:{{ (getparams(shopcar.params))[1] }}</span>
                </li>
                <li>
                  <!-- 现价 -->
                  <p>现价：&nbsp;{{ shopcar.price }}&nbsp;￥</p>
                  <!-- 原价 -->
                  <p>原价：&nbsp;{{ shopcar.special_price }}&nbsp;￥</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="box-right">
        <h1>请选择支付方式</h1>
        <div class="pay">
          <div class="pay-WeChat">
            <img src="../../assets/image/微信收款.png" alt="微信支付" />
          </div>
          <div class="pay-Alipay">
            <img src="../../assets/image/支付宝收款.png" alt="支付宝支付" />
          </div>
        </div>
        <div class="shop-total">
          <ul>
            <li>
              <p>商品小计：</p>
            </li>
            <li>
              <p>商品总价：</p>
              <p>￥{{ totals }}</p>
            </li>
            <li>
              <p>优惠：</p>
              <p>￥{{ (totals - total) }}</p>
            </li>
            <li>
              <p>其他：</p>
              <p>+￥{{ 0 }}</p>
            </li>
            <li>
              <div>
                <p>总计</p>
                <p>￥{{ total }}</p>
              </div>

               <el-button type="danger" class="el-button" @click="submit">提交订单</el-button>
                
             
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 显示地址的对话框 -->
    <el-dialog title="请选择您的收货地址" :visible.sync="dialogVisible" width="60%">
      <ul class="dialog">
        <li v-for="items in addresses" :key="items.id">
          <div class="Harvest_address">
            <div class="address_one">
              <p>收货人:{{ items.name }}</p>
              <p>收货地址:{{ items.address }}</p>
              <p>收货电话:{{ items.tel }}</p>
            </div>
            <div class="address_two">
              <!--  <p v-if="items.prime==1">默认地址</p> -->
              <span @click="editor">编辑</span>/<span @click="updateaddress(items.id, items.prime)">设置为默认地址</span>
            </div>
          </div>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 显示编辑收获地址的出现 -->
    <!-- el-dialog
  title="收货地址"
  :visible.sync="dialogVisibles"
  width="60%">
     <addAddresses v-show="flag"></addAddresses>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
  </span>
</el-dialog> -->
  </div>
</template>

<script>
import addAddresses from '@/views/my/addAddresses/index.vue'
import { getDefaultAddress, getaddress, defaultAddress, payOrder } from '@/api/buyshop.js'

export default {
  name: "buyShop",
  components: {
    addAddresses
  },
  data() {
    return {
      //buyShop 付钱
      buyShop: [],
      params: [],
      total: 0,
      totals: 0,
      flag: false,
      /* 默认地址 */
      address: [],
      dialogVisible: false,
      addresses: [],
      /* 编辑收货地址的显示隐藏 */
      dialogVisibles: false,
    };
  },
  methods: {
    getshoplist() {
      let shoplist = this.$store.getters.shopcarlist
      console.log(this.$store.getters.shopcarlist)
      console.log(shoplist)
      this.buyShop = shoplist
    },
    getaddress() {
      let customer_id = this.$store.getters.id
      getDefaultAddress(customer_id).then(data => {
        console.log(data)
        this.address = data.data.data
        console.log(this.address)
      })
    },
    dialog() {
      console.log('1111')
      this.dialogVisible = true
      let customer_id = this.$store.getters.id
      getaddress(customer_id).then(data => {
        console.log(data)
        this.addresses = data.data.data
      })
    },
    /* 修改默认地址 */
    updateaddress(id, prime) {
      let customer_id = this.$store.getters.id
      let data = { 'id': id, 'prime': prime }
      console.log(data)
      defaultAddress(data).then(data => {
        console.log(data)
        if (data.data.code == 200) {
          this.$message.success('修改用户默认地址成功')
        }
      })
    },
    /* 编辑收货地址的出现 */
    editor() {
      /* this.dialogVisibles=true */
      this.flag = true
    },
    /* 提交订单 */
    submit() {
      let outTradeNo = this.$store.getters.username + Date.now()
      let totalAmount = this.total
      let subject = '您提交的商品有' + this.buyShop[0].title + '....'
      let body = this.$store.getters.username + `is paying for ${this.total}....商品描述`

      let data = {
        outTradeNo,
        totalAmount,
        subject,
        body
      }
      payOrder(data)
        .then((result) => {
         console.log(result.data.data);
          window.open(result.data.data)
        })
        .catch((err) => {
          return err
        })
    },

    
  },
  created() {
    this.getshoplist()
    this.getaddress()
    console.log(this.$store.getters.shopcarlist)
  },
  computed: {
    getparams() {
      return function (params) {
        params = params.replace(/ /g, '')
        console.log(params);
        if (params) {
          return JSON.parse(params);
        } else {
          return params
        }
      };
    },
  },
  watch: {
    buyShop: {
      deep: true,
      handler(val) {
        let tod = 0
        let tods = 0
        val.forEach(item => {
          tod = tod + item.special_price * item.num
          tods = tods + item.price * item.num
        })
        this.total = tod
        this.totals = tods
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.buyShop {
  width: 1200px;
  margin: 0px auto;
  margin-top: 50px;

  h1 {
    display: flex;
    margin-left: 20px;
    color: #000;
  }

  .box {
    display: flex;

    /* 订单明细 */
    .box-left {
      width: 770px;
      height: 1000px;
      margin-left: 4px;

      /* 地址 */
      .address {
        width: 768px;
        margin-top: 10px;
        border: 1px solid #4c4c4c;

        .address-top {
          height: 40px;
          background-color: #4c4c4c;
          position: relative;

          p {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            margin-left: 20px;

          }

          .top_title {
            color: white;
            left: 640px;
            top: 0px;
            position: absolute;
          }
        }

        .Harvest_address {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #999;

          div {
            text-align: left;
            flex-grow: 1;
          }

          .address_one {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 50px;

            p {
              margin: 5px 0;
              font-size: 16px;
            }
          }

          .address_two {
            text-align: right;
            padding-right: 50px;

            p {
              width: 70px;
              color: white;
              text-align: center;
              position: absolute;
              left: 163px;
              margin-bottom: 2px;
              position: relative;

              background-color: black;
            }

            span {
              display: inline-block;
              margin-right: 5px;
            }
          }
        }
      }

      /* 商品明细 */
      .buyDetail {
        width: 768px;
        height: 798px;
        margin-top: 10px;
        border: 1px solid #4c4c4c;

        .buyDetail-top {
          height: 40px;
          background-color: #4c4c4c;

          p {
            text-align: left;
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            margin-left: 20px;
            color: white;
          }
        }

        .buyDetail-bottom::-webkit-scrollbar {
          display: none;
        }

        .buyDetail-bottom {
          width: 768px;
          height: 758px;
          overflow: auto;

          /* 商品列表 */
          .list {
            width: 730px;
            height: 150px;
            margin: 0 auto;

            .shopcar {
              height: 150px;
              /*   background-color: aliceblue; */
              margin-top: 10px;
              /*  border-radius: 10px; */
              border-bottom: 1px solid black;

              li {
                width: 200px;
                float: left;
                width: 150px;
                height: 150px;

                img {
                  width: 140px;
                  height: 140px;
                  margin: 5px auto;
                  margin-left: 20px;
                  border-radius: 10px;
                }
              }

              li:nth-child(2) {
                text-align: left;
                width: 300px;

                p {
                  font-size: 15px;
                  margin-top: 40px;
                  width: 240px;
                  margin-left: 50px;
                  font-weight: 900;
                }

                .color {
                  margin-left: 50px;
                }

                span {
                  font-weight: 500;
                  color: rgba(0, 0, 0, 0.5);
                }
              }

              li:nth-child(3) {
                text-align: right;
                width: 200px;

                p:nth-child(1) {
                  margin-top: 40px;
                  color: palevioletred;
                  font-size: 20px;
                }

                p:nth-child(2) {
                  text-decoration-line: line-through;
                }

                p:nth-child(3) {
                  font-size: 18px;
                  color: blue;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }

    .box-right {
      width: 398px;
      height: 520px;
      margin-left: 26px;
      margin-top: 10px;

      /*  background-color: paleturquoise; */
      /*     border: 1px solid black; */
      .pay {
        width: 398px;
        height: 150px;

        .pay-WeChat {
          width: 195px;
          height: 145px;
          margin-left: 3px;
          margin-top: 3px;
          float: left;

          img {
            width: 100%;
            height: 142px;
          }
        }

        .pay-WeChat:hover {
          cursor: not-allowed;
        }

        .pay-Alipay {
          width: 195px;
          height: 145px;
          margin-left: 200px;
          margin-top: 3px;
          border: 1px solid #4c4c4c;
          position: relative;

          img {
            width: 100%;
            height: 142px;
          }
        }

        .pay-Alipay:hover {
          cursor: pointer;
        }
      }

      .shop-total {
        width: 390px;
        margin: 20px auto;
        height: 480px;

        /*   background-color: aliceblue; */
        ul {
          border: 1px solid #999;

          li {
            display: flex;
            line-height: 48px;
            width: 370px;
            height: 48px;
            margin: 0 auto;
            border-bottom: 1px solid #999;

            p {
              width: 100px;
            }

            p:nth-child(1) {
              text-align: left;
            }

            p:nth-child(2) {
              text-align: right;
              margin-left: 160px;
              color: plum;
            }
          }

          li:nth-child(1) {
            width: 386px;
            /*  border: 1px solid #999; */
            background-color: #f6f6f6;
          }

          li:nth-child(5) {
            display: inline-block;
            border: none;
            height: 100px;

            div {
              float: left;

              p:nth-child(1) {
                margin-left: 20px;
              }

              p:nth-child(2) {
                margin-left: 20px;
                text-align: left;
                font-size: 28px;
                font-weight: 666;
              }
            }

            .el-button {
              padding: 14px 26px;
              float: right;
              margin-right: 20px;
              margin-top: 50px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}

</style>
