import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "babel-polyfill"; // Needed to support IE11 & Safari 9

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App)
}).$mount("#app");
