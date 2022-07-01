import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/vue-echarts";
import "./plugins/firebase";
import App from "./App.vue";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
