<template>
  <div>
    <toolbar/>
    <div class="app">
      <!-- <div class="section">
      <div class="container"> -->
      <transition name="fade">
        <router-view/>
      </transition>
      <!-- </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar
  }
};
</script>

<style lang="scss">
@import "main.scss";
.app {
  background-color: #f7f8fa;
  font-family: $roboto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 60px;
  margin: auto;
}
.container {
  width: 80%;
}
@media screen and (max-width: $mobile) {
  .section {
    padding-left: 0;
    padding-right: 0;
  }
}
@media screen and (max-width: $tablet) {
  .container {
    width: 100%;
  }
}
@media screen and (max-width: $desktop) {
  .container {
    width: 90%;
  }
}
// ******************   page transition   ************
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}
.fade-enter-active {
  transition-delay: 0.4s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
