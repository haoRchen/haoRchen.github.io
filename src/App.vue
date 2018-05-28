<template>
  <v-app>
    <toolbar/>
    <v-content id="body">
      <router-view/>
    </v-content>
    <Footer/>
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

<style>
#body {
  /* background-color: #f7f8fa; */
}
</style>
