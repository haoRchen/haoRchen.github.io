import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "babel-polyfill"; // Needed to support IE11 & Safari 9
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDqihpHzlKCB7lcZRU7zjtRZB1mAhrSCwg",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
