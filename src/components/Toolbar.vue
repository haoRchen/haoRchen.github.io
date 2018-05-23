<template>
    <v-toolbar id="toolbar" app scroll-toolbar-off-screen>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="white-text">H</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="white-text" flat>Portfolio</v-btn>
            <v-btn class="white-text" flat>About me</v-btn>
        </v-toolbar-items>
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
