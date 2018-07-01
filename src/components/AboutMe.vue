<template>
  <div class="container is-centered">
    <div class="aboutme">
      
      <div class="aboutme__leftcolumn">
        <div>
          <h1 class="title aboutme__header" >Hey there!</h1>
        </div>
        <p class="aboutme__content">
          I'm Hao! A third-year student at Seneca College who's seeking a Co-Op work term in Spring 2019. 
          I'm curious about all things related to software.
          In my free time, I tinker away at personal projects, attend Hackathons and contribute to Open Source to gain exposure to different aspects of software development.
          My current interest lies in the Web. However, I'm up for any challenge :]
        </p>
        <div class="aboutme__footer has-text-centered">
          <a >
            <span class="icon is-large aboutme__footer__icon linkedin">
              <i 
                class="fab fa-linkedin fa-lg"
                aria-hidden="true"/>
            </span> 
          </a>
          <a >
            <span class="icon aboutme__footer__icon is-large">
              <i 
                class="fab fa-github fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
          <a >
            <span class="icon aboutme__footer__icon is-large">
              <i 
                class="fas fa-envelope fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
        </div>
      </div>
      <div class="aboutme__rightcolumn">
        <google-map/>
      </div>
    </div>   
  </div> 
</template>

<script>
import { ScrollTop } from "@/utility";
import GoogleMap from "./GoogleMap";

export default {
  name: "AboutMe",
  components: {
    GoogleMap
  },
  mounted() {
    ScrollTop();
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../main.scss";
.aboutme {
  background-color: $white;
  display: flex;
  padding: 2.5rem;
  margin: auto;
  margin-top: 3rem;
  width: 80%;
  align-self: center;
  transition: all 0.7s ease;
  &__leftcolumn {
    width: 50%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.5s ease;
    & > div {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  &__rightcolumn {
    width: 50%;
    display: flex;
    margin: 1%;
    transition: all 0.5s ease;
  }
  &__footer {
    font-family: $montserrat;
    font-weight: 500;
    display: flex;
    &__icon:hover {
      color: $primary;
    }
  }
  &__header {
    font-family: $roboto;
    font-weight: 600;
  }
  &__content {
    font-family: $montserrat;
    font-weight: 400;
  }
}
.linkedin {
  margin-left: -13px;
}
@media screen and (max-width: $desktop) {
  .aboutme {
    width: 90%;
  }
}
@media screen and (max-width: $tablet) {
  .aboutme {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__leftcolumn,
    &__rightcolumn {
      width: 100%;
    }
    &__header {
      display: flex;
      justify-content: center;
    }
    &__footer {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
