<template>
  <v-toolbar 
    id="toolbar" 
    app 
    scroll-off-screen>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <!-- <v-toolbar-title class="white-text">H</v-toolbar-title> -->
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
        to="/portfolio" 
        color="white" 
        flat>Portfolio</v-btn>
      <v-btn 
        to="/" 
        color="white" 
        flat>H</v-btn>
      <v-btn 
        to="/about-me" 
        color="white" 
        flat>About me</v-btn>
    </v-toolbar-items>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
export default {};
</script>
<style>
#toolbar {
  background-color: #30cbe8;
}
.white-text {
  color: white;
}
</style>
