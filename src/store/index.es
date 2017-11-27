import Vuex from 'vuex';
import draw from './draw.es';

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    draw
  }
});
