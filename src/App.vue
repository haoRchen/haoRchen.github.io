<template>
  <v-app>
    <toolbar/>
    <v-content 
      id="body" 
      class= "mt-4">
      <!-- <router-view/> -->
    </v-content>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    AboutMe,
    Footer
  }
};
</script>

<style lang="sass">
@import 'main.sass'
@import '~bulma/bulma.sass'
</style>
