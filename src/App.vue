<template>
  <div>
    <toolbar/>
    <div class="Body">
      <div class="section">
        <div class="container">
          <router-view/>
        </div>
      </div>
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

<style lang="sass">
@import 'main.sass'

.Body
  background-color: #f7f8fa
  font-family: $roboto
  display: flex
  min-height: 100vh
  flex-direction: column
  padding-top: 60px
  padding-bottom: 60px
  margin: auto
  align-items: center
.section
  flex: 1 0 auto
.container
  width: 90%
</style>
