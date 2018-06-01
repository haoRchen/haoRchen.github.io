<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation">
    <div class="navbar-brand">
      <router-link 
        to="/"
        class="navbar-item" 
        tag="a"
      >
        <img 
          src="https://bulma.io/images/bulma-logo.png" 
          alt="Bulma: a modern CSS framework based on Flexbox" 
          width="112" 
          height="28">
      </router-link>

      <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav.
     Also, using the v-bind: directive to reactively update the class attribute 'is-active' 
     based on the showNav property.
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
    Using the v-bind: directive to reactively update the class attribute 'is-active' based 
    on the showNav property.
    -->
    <div 
      :class="{ 'is-active': showNav }" 
      class="navbar-menu">
      <div class="navbar-end">
        <router-link 
          to="/portfolio"
          class="navbar-item" 
          tag="a"
        >
          Portfolio
        </router-link>
        <router-link 
          to="/about-me"
          class="navbar-item" 
          tag="a"
        >
          About Me
        </router-link>
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
<style lang="sass" scoped>
@import '../main.sass'  
</style>
