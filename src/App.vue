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

<style lang="scss">
@import "main.sass";
.Body {
  background-color: #f7f8fa;
  font-family: $roboto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  margin: auto;
  align-items: center;
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
</style>
