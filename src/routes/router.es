import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.es';

Vue.use(VueRouter);
export default new VueRouter({
  routes
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { x: 0, y: 0 };
  // }
});

// router.afterEach((transition) => {
//   router.app.visibility = 'all'
// });
