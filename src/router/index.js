import Vue from "vue";
import VueRouter from "vue-router";

import AboutMe from "@/components/AboutMe.vue";
import Portfolio from "@/components/PortfolioComponents/Portfolio.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "AboutMe",
      component: AboutMe
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    }
  ]
});
