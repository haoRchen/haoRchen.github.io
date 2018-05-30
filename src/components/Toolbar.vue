<template>
  <nav 
    class="navbar is-primary" 
    role="navigation" 
    aria-label="main navigation">
    <div class="navbar-brand">
      <a 
        class="navbar-item" 
        href="#">
        <img 
          src="https://bulma.io/images/bulma-logo.png" 
          alt="Bulma: a modern CSS framework based on Flexbox" 
          width="112" 
          height="28">
      </a>

      <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div 
        :class="{ 'is-active': showNav }" 
        class="navbar-burger" 
        @click="showNav = !showNav">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
    <div 
      :class="{ 'is-active': showNav }" 
      class="navbar-menu">
      <div class="navbar-end">
        <a 
          class="navbar-item" 
          href="#">
          Portfolio
        </a>
        <a 
          class="navbar-item" 
          href="#">
          About Me
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>
<style lang="sass">
@import '../main.sass'
#toolbar 
  background-color: #30cbe8
</style>
