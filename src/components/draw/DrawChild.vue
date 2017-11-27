<template>
  <div class="draw-child">
    这里是draw的子及组件1
    <button @click="backRoot">返回根目录</button>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      backRoot() {
        this.$router.replace({ path: '/' });
      }
    }
  };
</script>

<style lang="less">
  .draw-child {
    color: #fff;
    font: bold 18px/36px 'microsoft yahei';
  }
</style>