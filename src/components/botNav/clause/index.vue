<template>
  <div class="clause">
    <div class="clause-our">
      <span>服务条款</span>
    </div>
    <div class="clause-content"></div>
  </div>
</template>

<script>
export default {
  name: "clause",
};
</script>

<style lang="scss" scoped>
.clause {
  width: 100%;

  .clause-our {
    box-sizing: border-box;
    height: 200px;
    width: 1342px;
    padding-top: 80px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
    span {
      font-size: 44px;
      line-height: 100%;
    }
  }
  .clause-content {
    margin: 0 auto;
  }
}
</style>