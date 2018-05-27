<template>
  <v-app>
    <toolbar></toolbar>
    <v-content id="body">
      <AboutMe></AboutMe>
    </v-content>
    <Footer></Footer>
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Toolbar from "@/components/Toolbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Toolbar,
    AboutMe,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#body {
  background-color: #f7f8fa;
}
</style>
