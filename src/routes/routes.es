import App from '../App.vue';
import Home from '../components/Home.vue';
import Message from '../components/Message.vue';
import Draw from '../components/draw/Draw.vue';
import DrawChild from '../components/draw/DrawChild.vue';
import DrawChild2 from '../components/draw/DrawChild2.vue';

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/draw',
        // meta: { auth: false },
        component: Draw,
        children: [
          {
            path: 'child',
            component: DrawChild
          },
          {
            path: 'child2',
            component: DrawChild2
          },
          {
            path: '/',
            component: DrawChild2
          }
        ]
      },
      {
        path: '/message',
        component: Message
      },
      {
        path: '*',
        redirect: '/home'
      }
    ],
    beforeEnter(to, from, next) {
      if (to.path === '/draw') {
        console.log('点击draw');
      }
      next();
    }
  }
];
