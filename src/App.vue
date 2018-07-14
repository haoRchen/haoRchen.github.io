<template>
  <div>
    <modals-container/>
    <toolbar/>
    <div class="app">
      <transition name="fade">
        <router-view/>
      </transition>
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
  background-color: $white;
  font-family: $roboto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 60px;
  margin: auto;
}
</style>
