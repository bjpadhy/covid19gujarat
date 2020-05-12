import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sparkLine: {
      confirmed: [],
      recovered: [],
      deceased: [],
      active: [],
      dates: []
    }
  },
  mutations: {
    setSparkLine(state, payload) {
      state.sparkLine.confirmed = payload.confirmed;
      state.sparkLine.recovered = payload.recovered;
      state.sparkLine.deceased = payload.deceased;
      state.sparkLine.active = payload.active;
      state.sparkLine.dates = payload.dates;
    }
  },
  getters: {
    getSparkLine(state) {
      return state.sparkLine;
    }
  },
  actions: {},
  modules: {}
});
