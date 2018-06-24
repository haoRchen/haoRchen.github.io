import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
// Vue.use(VModal);
Vue.use(VModal, { componentName: "v-modal" });
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDqihpHzlKCB7lcZRU7zjtRZB1mAhrSCwg",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
