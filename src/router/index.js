import Vue from "vue";
import VueRouter from "vue-router";

import AboutMe from "@/components/AboutMe.vue";
import Portfolio from "@/components/PortfolioComponents/Portfolio.vue";
import LandingPage from "@/components/LandingPage.vue";
// import ProjectDetail from "@/components/PortfolioComponents/ProjectDetail.vue";

Vue.use(VueRouter);

export default new VueRouter({
  //https://stackoverflow.com/questions/49794618/add-is-active-class-bulma-to-router-in-vue
  linkExactActiveClass: "is-active",
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
