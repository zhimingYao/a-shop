<template>
  <div class="payOrder">
    <span class="step">支付完成</span>
    <span class="Pay">Pay Order</span>
    <a>{{ count }}</a>
  </div>
</template>

<script>
export default {
  name: 'PaySuccess',
  data() {
    return {
      count: 5,
    }
  },
  methods: {
    metMout() {
      var timer = setInterval(() => {
        this.count--
      }, 1000)
      setTimeout(() => {
        clearInterval(timer)
        this.$router.push('/home')
      }, 5000)
    },
  },
  created() {
    this.metMout()
  },
}
</script>

<style lang="scss" scoped>
.payOrder {
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  .step {
    color: green;
    font-weight: bold;
  }
  .Pay {
    font-size: 12px;
    margin: 50px;
  }
  a {
    color: red;
  }
}
</style>
