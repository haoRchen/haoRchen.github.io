<template>
  <div>    
    <p>Landing Page</p>
    <!-- <object data="Images/logo/h.svg"/> -->
    <logo/>
  </div>
</template>

<script>
import { ScrollTop } from "@/utility";
import Logo from "@/components/Logo.vue";
export default {
  name: "LandingPage",
  components: {
    Logo
  },
  mounted() {
    ScrollTop();
  }
};
</script>

<style>
</style>
