<template>
  <div id="app">
    <v-app>
      <toolbar></toolbar>
      <v-content>
        <v-container>
          <AboutMe></AboutMe>
        </v-container>
      </v-content>
      <!-- <img src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Toolbar from "@/components/Toolbar.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Toolbar,
    AboutMe
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #f7f8fa;
}
</style>
