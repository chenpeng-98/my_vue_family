<template>
  <div>
    message组件：共享状态值count：{{ count }}
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  module.exports = {
    data() {
      return {};
    },
    methods: {},
    watch: {},
    computed: mapState({
      count: state => state.draw.count
    }),
    mounted() {}
  };
</script>

<style lang="less">

</style>