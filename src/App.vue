<template>
  <v-app>
    <toolbar/>
    <v-content id="body">
      <!-- <AboutMe></AboutMe> -->
      <all-projects/>
    </v-content>
    <Footer/>
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Toolbar from "@/components/Toolbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";
import AllProjects from "@/components/Project/AllProjects.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Toolbar,
    AboutMe,
    Footer,
    AllProjects
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
  /* background-color: #f7f8fa; */
}
</style>
