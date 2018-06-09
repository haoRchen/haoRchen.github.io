<template>
  <v-container>
    <p>Landing Page</p>
  </v-container>
</template>

<script>
export default {
  name: "LandingPage",
  mounted() {
    this.ScrollTop();
  },
  methods: {
    ScrollTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style>
</style>
