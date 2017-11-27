export default {
  state: {
    count: 10
  },
  mutations: {
    increment(state, add) {
      state.count += add || 1; // eslint-disable-line
    }
  },
  actions: {}
};
