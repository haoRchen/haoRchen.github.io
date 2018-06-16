<template>
  <nav 
    :style="{top:navTop}"
    class="nav" 
    role="navigation" 
    aria-label="main navigation">
    <div class="nav-wrapper container" >
      <div class="nav-logo-wrapper">
        <router-link 
          to="/"
          class="nav-logo" 
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
          class="nav-burger" 
          @click="ToggleNavBurger">
          <div class="burger-menu-line1"/>
          <div class="burger-menu-line2"/>
          <div class="burger-menu-line3"/>
        </div>

      </div>
      <!--
      Using the v-bind: directive to reactively update the class attribute 'is-active' based 
      on the showNav property.
      -->
      <div 
        :class="{ 'dropdown': displayDropdown }" 
        class="nav-links">
        <!-- .native is needed for router-link https://github.com/vuejs/vue-router/issues/800#issuecomment-254623582 -->
        <!-- <p class="item">abc</p>
        <p>ddd</p> -->
        <router-link 
          to="/portfolio"
          class="nav-item" 
          tag="a"
          @click.native="HideNav"
        >
          Portfolio
        </router-link>
        <router-link 
          to="/about-me"
          class="nav-item aboutMe" 
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
      showNav: true,
      displayDropdown: true,
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
    ToggleNavBurger() {
      this.displayDropdown = !this.displayDropdown;
    },
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
<style lang="scss" scoped>
@import "../main.sass";
.nav {
  box-sizing: border-box;
  background-color: $primary;
  z-index: 10; // Ensure nav appears in front of all contents.
  font-family: $roboto;
  font-weight: bold;
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 3px grey;
}
.nav-wrapper {
  height: 100%;
  width: 70%;
  display: flex;
  position: relative;
  @media screen and (max-width: $desktop) {
    width: 80%;
  }
  @media screen and (max-width: $tablet) {
    width: 100%;
  }
}
.nav-logo-wrapper {
  display: flex;
}
.nav-burger {
  display: none;
  cursor: pointer;
  @media screen and (max-width: $tablet) {
    display: inline-block;
  }
}
.nav-links {
  display: flex;
  box-shadow: none;
  margin-left: auto;
  transition: height 0.4s;
}

.nav-item {
  height: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center; // aligns the text.
  color: $white;
  transition: height 0.4s;
  &.is-active {
    background-color: transparent;
    color: $primary-darker;
  }
  &:hover {
    color: $white;
    background-color: rgba(0, 0, 0, 0.05);
  }
}
.nav-logo {
  @extend .nav-item;
}

@media screen and (max-width: $tablet) {
  .nav {
    background-color: $primary;
  }
  .nav-logo-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .nav-logo {
    // margin-right: auto;
    align-self: flex-start;
    width: fit-content;
  }
  .nav-burger {
    display: flex;
    // margin-left: auto;
    padding: 0.35rem;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .burger-menu-line1,
    .burger-menu-line2,
    .burger-menu-line3 {
      width: 30px;
      height: 3px;
      background-color: $white;
      margin: 3px 0;
      transition: 0.4s;
    }
  }
  .nav-links {
    background-color: $primary;
    height: 0px;
    top: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: hidden;
    position: absolute;
  }
  .nav-item {
    display: flex;
    justify-content: center;
    width: 100%;
    &.is-active {
      background-color: transparent;
      color: $primary-darker;
    }
    &:hover {
      color: $white;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  .nav-logo {
    display: flex;
  }
  .dropdown {
    height: 100px;
    overflow-y: auto;
  }
}
</style>
