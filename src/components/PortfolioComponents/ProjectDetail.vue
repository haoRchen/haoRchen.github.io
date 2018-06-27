<template>
  <div class="modal">
    <a
      class="icon is-large modal__close"
      @click="$emit('close')">
      <i 
        class="fas fa-times fa-3x"
        aria-hidden="true"/>
    </a>
    <h5 class="modal__title">
      {{ project.name }}
    </h5>
    <carousel 
      :per-page="1"
      :pagination-enabled="false"
      :navigation-enabled="true"
      :navigation-next-label="`<i class='fas fa-chevron-right fa-2x'></i>`"
      :navigation-prev-label="`<i class='fas fa-chevron-left fa-2x'></i>`"
      :easing="'ease-out'"
      class="modal__carousel" >
      <slide class="modal__carousel__slide">
        <img 
          class="modal__image" 
          src="public/Images/portfolio/1.jpg" 
          alt="">
      </slide>
      <slide class="modal__carousel__slide">
        <img 
          class="modal__image" 
          src="public/Images/portfolio/2.jpg" 
          alt="">
      </slide>
      <slide class="modal__carousel__slide">
        <img 
          class="modal__image" 
          src="public/Images/portfolio/3.jpg" 
          alt="">
      </slide>
      <slide class="modal__carousel__slide">
        <img 
          class="modal__image" 
          src="public/Images/portfolio/4.jpg" 
          alt="">
      </slide>
    </carousel>
    <p class="modal__description">
      {{ project.fullDescription }}
    </p>
    <h6><strong>Technologies used</strong></h6>
    <p>
      Reactjs  -  JavaScript  -  CSS3  -  Bulma
    </p>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProjectDetail",
  components: {
    Carousel,
    Slide
  },
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "default",
          date: "2018/6/12",
          description: "default desc",
          demoLink: ""
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/main.scss";
.modal {
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  &__close {
    color: $dark-grey;
    align-self: flex-end;
    position: fixed;
    &:hover {
      color: $primary-dark;
    }
  }
  &__title {
    font-family: $roboto;
    font-weight: 600;
    font-size: 2rem;
    margin: 2rem;
  }
  &__image {
    width: 50%;
    max-width: 500px;
    max-height: 500px;
    align-self: center;
  }
  &__carousel {
    width: 95%;
    &__slide {
      display: flex;
      justify-content: center;
    }
  }
  &__description {
    margin: 1rem;
    margin-top: 2rem;
    width: 40%;
  }
}
@media screen and (max-width: $desktop) {
  .modal {
    &__description {
      width: 70%;
    }
    &__carousel {
      width: 90%;
    }
  }
}
@media screen and (max-width: $tablet) {
  .modal {
    &__description {
      width: 90%;
    }
    &__carousel {
      width: 85%;
    }
  }
}
</style>
