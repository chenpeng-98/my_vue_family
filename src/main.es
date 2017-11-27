import Vue from 'vue';
import router from './routes/router.es';
import store from './store/index.es';
import App from './App.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
