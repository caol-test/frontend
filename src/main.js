import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

const axiosConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000,
};

Vue.prototype.$axios = axios.create(axiosConfig);

Vue.prototype.$axios.getResponseData = function (response) {
  let { data: responseData } = response;
  return responseData.data;
};

Vue.prototype.$axios.interceptors.request.use(function (config) {
  const token = store.getters.getJwt;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
