<template>
  <transition name="fade">
    <nav 
      :style="{top:navTop}"
      :class="{'isLoading': Loading}"
      class="nav" 
      role="navigation" 
      aria-label="main navigation">

      <div
        class="nav__wrapper container" 
      >
        <transition name="fade">
          <div class="nav__wrapper--logo">
            <transition name="fade">
              <router-link 
                :class="{'nav__logo': !Loading, 'nav__logo--loading':Loading}"
                to="/"
                tag="a"
                @click.native="ToggleNavBurger"
              >
                <logo
                  :animated="Loading"
                />
                <!-- ******************* Loading Text ******************** -->
                <transition name="fade">
                  <div 
                    v-if="Loading"
                    class="loading-text">
                    <span>Loading</span>
                    <span class="loading-text__dot"> .</span>
                    <span class="loading-text__dot"> .</span>
                    <span class="loading-text__dot"> .</span>
                  </div>
                </transition>
                <!-- ******************* Loading Text ******************** -->
              </router-link>
            </transition>
            <transition name="fade">
              <div 
                v-if="!Loading"
                :class="{ 'is-active': displayDropdown }" 
                class="nav__burger" 
                @click="ToggleNavBurger">
                <span class="nav__burger__line4"/>
                <span class="nav__burger__line1"/>
                <span class="nav__burger__line2"/>
                <span class="nav__burger__line3"/>
                <span class="nav__burger__line5"/>
              </div>
            </transition>
          </div>
        </transition>
        <transition name="fade">
          <div 
            v-if="!Loading"
            :class="{ 'dropdown': displayDropdown }" 
            class="nav__wrapper--links">
            <!-- .native is needed for router-link https://github.com/vuejs/vue-router/issues/800#issuecomment-254623582 -->
            <router-link 
              to="/"
              class="nav__item home" 
              tag="a"
              @click.native="ToggleNavBurger"
            >
              Home
            </router-link>
            <router-link 
              to="/portfolio"
              class="nav__item portfolio" 
              tag="a"
              @click.native="ToggleNavBurger"
            >
              Portfolio
            </router-link>
            <router-link 
              to="/about-me"
              class="nav__item aboutMe" 
              tag="a"
              @click.native="ToggleNavBurger"
            >
              About Me
            </router-link>
            <footer
              class="nav__footer"
            >
              <a>
                <span class="icon linkedin nav__footer__item" >
                  <i 
                    class="fab fa-linkedin fa-lg"
                    aria-hidden="true"/>
                </span> 
              </a>
              <a>
                <span class="icon github nav__footer__item">
                  <i 
                    class="fab fa-github fa-lg"
                    aria-hidden="true"/>
                </span>
              </a>
              <a>
                <span class="icon envelope nav__footer__item">
                  <i 
                    class="fas fa-envelope fa-lg"
                    aria-hidden="true"/>
                </span>
              </a>
              <span class="nav__footer__item credit">
                <i class="far fa-copyright"/> 2018 Hao Ran Chen
              </span>
            </footer>
          </div>
        </transition>
      </div>
    </nav>
  </transition>
</template>

<script>
import _ from "lodash";
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      showNav: false,
      displayDropdown: false,
      PreviousScrollPos: null,
      CurrentScrollPos: null,
      ScrolledDown: false,
      navTop: 0,
      Loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.Loading = false;
    }, 3000);

    // https://www.w3schools.com/howto/howto_js_media_queries.asp
    // This is needed to hide drop down nav when adjusting between viewport size.
    var navBurgerDisplayQuery = window.matchMedia("(min-width: 769px)");
    navBurgerDisplayQuery.addListener(this.HideNavBarOnMediaQuery);

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
    document.addEventListener("scroll", this.ToggleNavBar);
  },
  destroyed() {
    document.removeEventListener("scroll", this.ToggleNavBar);
  },
  methods: {
    ToggleNavBurger() {
      this.displayDropdown = !this.displayDropdown;
    },
    HideNavBarOnMediaQuery(mediaSize) {
      if (mediaSize.matches) {
        if (this.displayDropdown) {
          this.ToggleNavBurger();
        }
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
        this.PreviousScrollPos > this.CurrentScrollPos ? "0" : "-80px";
      this.PreviousScrollPos = this.CurrentScrollPos;
    }, 40)
  }
};
</script>
<style lang="scss" scoped>
@import "../main.scss";
.nav {
  box-sizing: border-box;
  background-color: $primary;
  z-index: 10; // Ensure nav appears in front of all contents.
  font-family: $roboto;
  font-weight: bold;
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 1px 3px grey;
  &__wrapper {
    height: 100%;
    width: 65%;
    display: flex;
    position: relative;
    transition: all 0.3s ease-in-out;
    &--logo {
      display: flex;
    }
    &--links {
      display: flex;
      box-shadow: none;
      margin-left: auto;
      overflow-y: hidden;
      transition: height 0.5s ease-in-out;
    }
  }
  &__logo {
    height: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    color: $white;
    opacity: 1;
    transition: height 0.4s, opacity 0.5s;
    &.is-active {
      background-color: transparent;
      color: $primary-darker;
    }
    &:hover {
      color: $primary-darker;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  &__logo--loading {
    margin-left: 1rem;
    margin-bottom: 2rem;
    height: fit-content;
    display: flex;
    cursor: default;
    align-self: flex-end;
  }
  .loading-text {
    margin: 1rem;
    margin-bottom: 2.5rem;
  }
  .loading-text,
  .loading-text__dot {
    cursor: default;
    align-self: flex-end;
    position: relative;
    color: $white;
  }
  .loading-text__dot {
    animation: bounceUp 0.9s ease-in-out infinite;
  }
  .loading-text__dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  .loading-text__dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  .loading-text__dot:nth-child(4) {
    animation-delay: 0.6s;
  }
  &__burger {
    display: none;
    transition: opacity 0.5s;
    cursor: pointer;
  }
  &__footer {
    margin-top: auto;
    position: fixed;
    width: 100%;
    height: 60px;
    opacity: 0;
    bottom: -200px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
    &__item {
      color: $white;
      margin: 1rem;
      &:hover {
        color: $primary-darker;
      }
      &.credit {
        margin-left: auto;
      }
    }
  }
  &__item {
    height: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center; // aligns the text.
    color: $white;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0, 0, 0.23, 1);
    &.is-active {
      background-color: transparent;
      color: $primary-darker;
    }
    &:hover {
      color: $primary-darker;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  .home {
    visibility: hidden;
    display: none;
  }
}
.isLoading {
  height: 100%;
  transition: all 0.5s;
}
// ******************************************************************** TABLET
@media screen and (max-width: $tablet) {
  .nav {
    $nav: &;
    background-color: $primary;
    &__wrapper {
      width: 100%;
      &--logo {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      &--links {
        background-color: $primary;
        height: 0px;
        top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        overflow-y: hidden;
        position: absolute;
        transition-delay: 0.3s;
      }
    }
    &__logo {
      // align-self: flex-start;
      // margin-left: 1.5rem;
      opacity: 0;
      transition: opacity 0.5s;
    }
    &__footer {
      &__item {
        margin-top: 0;
        margin-bottom: 0;
        &.credit {
          margin-right: 2rem;
        }
        &.linkedin {
          margin-left: 2rem;
        }
      }
    }
    // ------------------------------   burger  --------------------------------
    &__burger {
      $burger: &;
      display: flex;
      margin-right: 1.7rem;
      padding: 0.3rem;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .line {
        height: 4px;
        width: 35px;
        background-color: $white;
        border-radius: 15px;
        margin: 2.5px;
        transition: all ease-in-out 0.3s;
        //Hovering effect
        // we only see the first 100% of width initially,
        // On hover, slide the background image over horizontally! ^_^
        background-size: 200% 100%;
        background-image: linear-gradient(
          to right,
          $primary-darker 50%,
          $white 50%
        );
        background-position: auto;
      }
      &__line1 {
        @extend .line;
        transition-delay: 0.3s;
      }
      &__line2 {
        @extend .line;
        transition-delay: 0.2s;
      }
      &__line3 {
        @extend .line;
        transition-delay: 0.1s;
      }
      &__line4 {
        @extend .line;
        opacity: 0;
        position: relative;
        top: -45px;
        left: -80px;
      }
      &__line5 {
        @extend .line;
        width: 15px;
        position: relative;
        opacity: 0;
        top: 60px;
        left: 30px;
      }
      &:hover {
        transform: scale(1.2, 1.2);
        .line {
          background-position: -100% 0;
        }
        & #{ $burger }__line1 {
          transition-delay: 0.1s;
        }
        & #{ $burger }__line2 {
          transition-delay: 0.2s;
        }
        & #{ $burger }__line3 {
          transition-delay: 0.3s;
        }
      }
      &.is-active {
        & #{ $burger }__line1 {
          opacity: 0;
          transform: translateX(50px);
        }
        & #{ $burger }__line2 {
          transform: rotate(315deg);
          transition-duration: 0.3s;
          transition-delay: 0.4s;
        }
        & #{ $burger }__line3 {
          opacity: 0;
          transform: translateX(-50px);
        }
        & #{ $burger }__line4 {
          top: 4px;
          left: 0px;
          opacity: 1;
          transform: rotate(45deg) translate(10px, 10px);
          transition-delay: 0.4s;
        }
        &:hover {
          & #{ $burger }__line4 {
            transition-delay: 0.1s;
          }
        }
      }
    }
    .home {
      visibility: visible;
      display: inherit;
    }
    &__item {
      font-family: $roboto;
      font-weight: bold;
      font-size: 1.5rem;
      opacity: 0;
      display: flex;
      position: relative;
      justify-content: center;
      height: 100px;
      width: 100%;
      left: -100px;
      opacity: 0;
      transition: opacity 0.5s;
      &:nth-of-type(1) {
        transition: opacity ease-in-out 0.3s 0.3s, left ease-in-out 0.3s 0.3s;
      }
      &:nth-of-type(2) {
        transition: opacity ease-in-out 0.3s 0.2s, left ease-in-out 0.3s 0.2s;
      }
      &:nth-of-type(3) {
        transition: opacity ease-in-out 0.3s 0.1s, left ease-in-out 0.3s 0.1s;
      }
      &.is-active {
        background-color: transparent;
        color: $primary-darker;
      }
      &:hover {
        color: $primary-darker;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
  .dropdown {
    transition-delay: 0.7s;
    height: 100vh;
    overflow-y: auto;
    .nav {
      &__item {
        opacity: 1;
        transition: opacity 0.5s;
        left: 0;
        &:nth-of-type(1) {
          transition: opacity ease-in-out 0.3s 0.8s, left ease-in-out 0.3s 0.8s;
        }
        &:nth-of-type(2) {
          transition: opacity ease-in-out 0.3s 0.9s, left ease-in-out 0.3s 0.9s;
        }
        &:nth-of-type(3) {
          transition: opacity ease-in-out 0.3s 1s, left ease-in-out 0.3s 1s;
        }
      }
      &__footer {
        transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
        transition-delay: 1.1s;
        opacity: 1;
        bottom: 0;
      }
    }
  }
}
// ******************************************************************** Mobile
@media screen and (max-width: $mobile) {
  .nav {
    &__logo {
      margin-left: 1rem;
    }
    &__burger {
      margin-right: 1rem;
    }
    &__footer {
      justify-content: center;
      height: 100px;
      &__item {
        margin-top: 0;
        margin-bottom: 0;
        &.credit {
          margin-right: 3.3rem;
          margin-left: 3.3rem;
          margin-bottom: 1rem;
        }
        &.linkedin {
          margin-left: 4rem;
        }
        &.envelope {
          margin-right: 4rem;
        }
      }
    }
  }
}
@media screen and (min-width: $widescreen) {
  .nav {
    &__wrapper {
      width: 55%;
    }
  }
}
@media screen and (min-width: $fullhd) {
  .nav {
    &__wrapper {
      width: 60%;
    }
  }
}
@keyframes bounceUp {
  0% {
    bottom: 0px;
  }
  20% {
    bottom: 5px;
  }
  100% {
    bottom: 0px;
  }
}
</style>
