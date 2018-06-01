<template>
  <div class="mainBackground">
    <toolbar/>
    <div class="section">
      <div class="container">
        <!-- <about-me/> -->
        <router-view/>
        <!-- <portfolio/> -->
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Portfolio from "@/components/PortfolioComponents/Portfolio.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    AboutMe,
    Portfolio,
    Footer
  }
};
</script>

<style lang="sass">
@import 'main.sass'
@import '~bulma/bulma.sass'

.mainBackground
  background-color: #f7f8fa
.section
  min-height: 90vh // minus the height of the footer
</style>
