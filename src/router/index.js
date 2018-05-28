import Vue from "vue";
import VueRouter from "vue-router";

import AboutMe from "@/components/AboutMe.vue";
import Portfolio from "@/components/PortfolioComponents/Portfolio.vue";
import LandingPage from "@/components/LandingPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/about-me",
      name: "AboutMe",
      component: AboutMe
    }
  ]
});
