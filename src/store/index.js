import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: "",
    themeColor: "deep-purple",
  },
  mutations: {
    setJwt(state, jwt) {
      state.jwt = jwt;
    },
  },
  getters: {
    getJwt(state) {
      return state.jwt;
    },
    getThemeColor(state) {
      return state.themeColor;
    },
  },
  actions: {},
  modules: {},
});
