<template>
  <div class="app-box">
    <h5>欢迎入坑<vue-router></vue-router></h5>
    <v-header title="导航">
      <router-link class="router_link" to="/draw">draw</router-link>
      <router-link class="router_link" to="/message">message</router-link>
    </v-header>
    <router-view class="router_view"></router-view>
  </div>
</template>

<script>
  module.exports = {
    components: {},
    data() {
      return {};
    },
    methods: {},
    mounted() {}
  };
</script>


<style lang="less">
  @import "../css/index.less";
  .router_link {
    margin: 5px;
    padding-right: 5px;
    color: #666;
    text-decoration: none;
    border-right: 2px solid green;
  }
  .router-link-active {
    color: red;
  }
  .router_view {
    background-color: #999;
    margin: 50px 0 20px;
    border-top: 1px solid #000;
  }
</style>