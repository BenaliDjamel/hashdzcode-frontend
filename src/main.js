import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  initializeRouter
} from './helpers/privateRoute';



Vue.config.productionTip = false

initializeRouter(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
