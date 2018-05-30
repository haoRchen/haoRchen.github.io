<template>
  <nav>
    <v-toolbar 
      id="toolbar" 
      app 
      fixed
      scroll-off-screen>
      <v-toolbar-title 
        id="logo" 
        class="white-text">H</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items 
        id="toolBarItems"
      >
        <v-btn 
          to="/portfolio" 
          class="hidden-sm-and-down"
          color="white" 
          flat>Portfolio</v-btn>
        <v-btn 
          to="/about-me" 
          class="hidden-sm-and-down"
          color="white" 
          flat>About me</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      example: ["Portfolio", "About Me"]
    };
  }
};
</script>
<style>
#toolbar {
  background-color: #30cbe8;
}
#logo {
  padding-left: 9%;
}
#toolBarItems {
  padding-right: 9%;
}
.white-text {
  color: white;
}
</style>
