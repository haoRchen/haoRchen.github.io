<template>
  <div class="container">    
    <div class="landing">
      <div class="landing__name">
        <div class="landing__name__first">
          <span class="name__letter">H</span>
          <span class="name__letter">a</span>
          <span class="name__letter">o</span>
        </div>
        <div class="landing__name__middle">
          <span class="name__letter">R</span>
          <span class="name__letter">a</span>
          <span class="name__letter">n</span>
        </div>
        <div class="landing__name__Last">
          <span class="name__letter">C</span>
          <span class="name__letter">h</span>
          <span class="name__letter">e</span>
          <span class="name__letter">n</span>
        </div>
      </div>
      <div class="landing__job">
        <div class="landing__job__first">
          <span class="job__letter">S</span>
          <span class="job__letter">o</span>
          <span class="job__letter">f</span>
          <span class="job__letter">t</span>
          <span class="job__letter">w</span>
          <span class="job__letter">a</span>
          <span class="job__letter">r</span>
          <span class="job__letter">e</span>
        </div>
        <div class="landing__job__second">
          <span class="job__letter">D</span>
          <span class="job__letter">e</span>
          <span class="job__letter">v</span>
          <span class="job__letter">e</span>
          <span class="job__letter">l</span>
          <span class="job__letter">o</span>
          <span class="job__letter">p</span>
          <span class="job__letter">e</span>
          <span class="job__letter">r</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTop } from "@/utility";
export default {
  name: "LandingPage",
  mounted() {
    ScrollTop();
  }
};
</script>

<style lang="scss" scoped>
@import "../main.scss";
.landing {
  display: flex;
  padding: 2.5rem;
  margin: auto;
  margin-top: 3rem;
  width: 80%;
  align-self: center;
  flex-direction: column;
  &__name {
    font-family: $roboto;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      margin: 0.5rem;
    }
  }
  .name__letter {
    position: relative;
    transition: all 0.5s ease-in-out;
    bottom: 0;
    animation-delay: 0.7s;
    &:hover {
      animation: moveup 0.5s ease-in-out alternate;
    }
  }
  &__job {
    font-family: $montserrat;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      opacity: 0.7;
      margin: 0.2rem;
    }
  }
}
@media screen and (max-width: $desktop) {
  .landing {
    width: 90%;
  }
}
@media screen and (max-width: $tablet) {
  .landing {
    width: 100%;
  }
}
@keyframes moveup {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 20px;
  }
  100% {
    bottom: 0;
  }
}
</style>
