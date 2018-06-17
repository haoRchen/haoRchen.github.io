<template>
  <nav 
    :style="{top:navTop}"
    class="nav" 
    role="navigation" 
    aria-label="main navigation">
    <div
      class="nav-wrapper container" 
    >
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
        <div 
          :class="{ 'is-active': displayDropdown }" 
          class="nav-burger" 
          @click="ToggleNavBurger">
          <span class="line line1"/>
          <span class="line line2"/>
          <span class="line line3"/>
          <span class="line line4"/>
          <span class="line line5"/>
        </div>

      </div>
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
          @click.native="ToggleNavBurger"
        >
          Portfolio
        </router-link>
        <router-link 
          to="/about-me"
          class="nav-item aboutMe" 
          tag="a"
          @click.native="ToggleNavBurger"
        >
          About Me
        </router-link>
        <footer
          class="nav-footer"
        >
          <span class="credit footer-item">
            @2018 Hao Ran Chen
          </span>
          <a>
            <span class="icon is-large linkedin footer-item" >
              <i 
                class="fab fa-linkedin fa-lg"
                aria-hidden="true"/>
            </span> 
          </a>
          <a>
            <span class="icon is-large footer-item">
              <i 
                class="fab fa-github fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
          <a>
            <span class="icon is-large footer-item">
              <i 
                class="fas fa-envelope fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
        </footer>
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
      displayDropdown: false,
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
      if (this.displayDropdown) {
        this.ToggleNavBurger();
      }
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
  transition: height 0.5s ease-in-out;
}

.nav-item {
  height: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center; // aligns the text.
  color: $white;
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
.nav-footer {
  margin-top: auto;
  position: fixed;
  width: 100%;
  height: 60px;
  opacity: 0;
  bottom: -50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
  transition-delay: 1s;
  .footer-item {
    color: $white;
    margin: 1rem;
    &:hover {
      color: $primary-darker;
    }
  }
  .credit {
    margin-right: auto;
  }
}
// ********************************************************************
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
    align-self: flex-start;
  }
  .nav-burger {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .line {
      height: 3px;
      background-color: $white;
      border-radius: 8px;
      margin: 3px 0;
      transition: all ease-in-out 0.3s;
      //Hovering effect
      // we only see the first 100% of width initially,
      // On hover, slide the background image over horizontally! ^_^
      background-size: 200% 100%;
      background-image: linear-gradient(
        to right,
        $white 50%,
        $primary-darker 50%
      );
      background-position: auto;
    }
    .line1 {
      width: 30px;
      transition-delay: 0.3s;
    }
    .line2 {
      width: 30px;
      transition-delay: 0.2s;
    }
    .line3 {
      width: 30px;
      transition-delay: 0.1s;
    }
    .line4 {
      width: 15px;
      position: relative;
      top: -60px;
      left: -30px;
      opacity: 0;
    }
    .line5 {
      width: 15px;
      position: relative;
      top: 60px;
      left: 30px;
      opacity: 0;
    }
    &:hover {
      transform: scale(1.2, 1.2);
      .line {
        background-position: -100% 0;
      }
      .line1 {
        transition-delay: 0.1s;
      }
      .line2 {
        transition-delay: 0.2s;
      }
      .line3 {
        transition-delay: 0.3s;
      }
      .line4 {
        transition-delay: 0.5s;
      }
      .line5 {
        transition-delay: 0.5s;
      }
    }
    &.is-active {
      .line1 {
        opacity: 0;
        transform: translateX(50px);
      }
      .line2 {
        transform: rotate(315deg);
      }
      .line3 {
        opacity: 0;
        transform: translateX(-50px);
      }
      .line4 {
        top: -37px;
        left: -4px;
        opacity: 1;
        transform: rotate(45deg) translate(10px, 10px);
        transition-delay: 0;
      }
      .line5 {
        top: 28px;
        left: -45px;
        opacity: 1;
        transform: rotate(45deg) translate(-0px, -40px);
        transition-delay: 0;
      }
    }
  }
  .nav-links {
    background-color: $primary;
    height: 0px;
    top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    overflow-y: hidden;
    position: absolute;
  }
  .nav-item {
    font-family: $roboto;
    font-weight: bold;
    font-size: 2rem;
    opacity: 0;
    display: flex;
    position: relative;
    justify-content: center;
    height: 100px;
    width: 100%;
    top: -30px;
    transition: all ease-in-out 0.3s;
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
    transition-delay: 0.5s;
    height: 100vh;
    overflow-y: auto;
    .nav-item {
      opacity: 1;
      top: 0;
    }
    .nav-footer {
      opacity: 1;
      bottom: 0;
    }
  }
}
</style>
