<template>
  <nav 
    :style="{top:navTop}"
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
        <!-- .native is needed for router-link https://github.com/vuejs/vue-router/issues/800#issuecomment-254623582 -->
        <router-link 
          to="/portfolio"
          class="navbar-item has-text-centered" 
          tag="a"
          @click.native="HideNav"
        >
          Portfolio
        </router-link>
        <router-link 
          to="/about-me"
          class="navbar-item has-text-centered aboutMe" 
          tag="a"
          @click.native="HideNav"
        >
          About Me
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      showNav: false,
      PreviousScrollPos: null,
      CurrentScrollPos: null,
      ScrolledDown: false,
      navTop: 0
    };
  },
  mounted() {
    // https://www.w3schools.com/howto/howto_js_media_queries.asp
    // This is needed to hide drop down nav when adjusting between viewport size.
    var mediaQuery = window.matchMedia("(max-width: 985px)");
    mediaQuery.addListener(this.HideNavBarOnMediaQuery);

    this.PreviousScrollPos = window.pageYOffset;
    //https://techstacker.com/posts/yz6e9Ksz6ARbNpQAZ/vanilla-javascript-how-to-detect-clicks-outside-of-an
    document.addEventListener("click", e => {
      if (e.target.closest(".navbar")) {
        return;
      }
      this.HideNav();
    });
  },
  created() {
    window.addEventListener("scroll", this.ToggleNavBar);
  },
  destroyed() {
    window.removeEventListener("scroll", this.ToggleNavBar);
  },
  methods: {
    HideNavBarOnMediaQuery(mediaSize) {
      if (mediaSize.matches) {
        this.HideNav();
      }
    },
    HideNav() {
      this.showNav = false;
    },
    //https://github.com/vuejs-templates/browserify-simple/issues/6#issuecomment-214003282 function() over ()=>
    ToggleNavBar: _.debounce(function() {
      this.HideNav();
      this.CurrentScrollPos = window.pageYOffset;
      this.navTop =
        this.PreviousScrollPos > this.CurrentScrollPos ? "0" : "-60px";
      this.PreviousScrollPos = this.CurrentScrollPos;
    }, 40)
  }
};
</script>
<style lang="sass" scoped>
@import '../main.sass'  
.navbar 
  font-family: $roboto
  font-weight: bold
  position: fixed 
  width: 100%
  top: 0 
  transition: all 0.3s ease-in-out
  box-shadow: 0 1px 3px grey
  .navbar-menu
    // margin-right: 17vw
  .navbar-burger
    color: $white
    // margin-right: 17vw
  .navbar-item
    &.is-active
      background-color: transparent
      color: $primary-darker
    &:hover
      color: $white
      background-color: rgba(0, 0, 0, 0.05)
  
</style>
