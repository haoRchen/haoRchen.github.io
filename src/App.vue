<template>
  <div>
    <toolbar/>
    <div class="Body">
      <div class="section">
        <div class="container">
          <!-- <about-me/> -->
          <router-view/>
          <!-- <portfolio/> -->
        </div>
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

.Body
  background-color: #f7f8fa
  font-family: $roboto
  display: flex
  min-height: 100vh
  flex-direction: row
  padding-top: 60px
  margin: auto
.section
  flex: 1 0 auto
</style>
