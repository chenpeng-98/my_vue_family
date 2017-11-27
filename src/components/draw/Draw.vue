<template>
  <div class="draw-box">
    <p>{{ msg }}  {{ count }}</p>
    <div class="draw_routers">
      <router-link class="draw_router" to="/draw/child">draw child</router-link>
      <router-link class="draw_router" to="/draw/child2">draw child2</router-link>
    </div>
    <router-view class="draw_routerView"></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  module.exports = {
    props: [],
    data() {
      return {
        msg: 'count value: '
      };
    },
    methods: {},
    computed: mapState({
      count: state => state.draw.count
    }),
    mounted() {
      setTimeout(() => {
        this.$store.commit('increment');
      }, 1000);
    }
  };
</script>

<style lang="less">
  .draw_routers {
    background-color: #fff;
    padding: 20px 0;
  }
  .draw_router {
    float: left;
    width: 50%;
    text-align: center;
    text-decoration: none;
  }
  .draw_routers:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: left;
  }
  .draw_routerView {
    background-color: bisque;
    color: blueviolet;
  }
</style>