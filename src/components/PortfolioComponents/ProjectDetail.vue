<template>
  <transition name="slide-fade">
    <div class="modal">
      <div 
        class="modal__close" 
        @click="$emit('close')">
        <span class="modal__close__line1"/>
        <span class="modal__close__line2"/>
      </div>
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
            src="Images/portfolio/1.jpg" 
            alt="">
        </slide>
        <slide class="modal__carousel__slide">
          <img 
            class="modal__image" 
            src="Images/portfolio/2.jpg" 
            alt="">
        </slide>
        <slide class="modal__carousel__slide">
          <img 
            class="modal__image" 
            src="Images/portfolio/3.jpg" 
            alt="">
        </slide>
        <slide class="modal__carousel__slide">
          <img 
            class="modal__image" 
            src="Images/portfolio/4.jpg" 
            alt="">
        </slide>
      </carousel>
      <p class="modal__description">
        {{ project.fullDescription }}
      </p>
      <h6><strong>Technologies used</strong></h6>
      <p class="modal__technologies">
        Reactjs  -  JavaScript  -  CSS3  -  Bulma
      </p>
    </div>
  </transition>
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
  height: auto;
  align-items: center;
  overflow-y: auto;
  &__close {
    $close: &;
    padding: 1.5rem;
    color: $dark-grey;
    align-self: flex-end;
    position: absolute;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__line1,
    &__line2 {
      position: relative;
      height: 4px;
      width: 35px;
      background-color: $dark-grey;
      border-radius: 15px;
      margin: 2.5px;
      transition: all ease-in-out 0.3s;
    }
    &__line1 {
      top: 9px;
      transform: rotate(45deg);
    }
    &__line2 {
      transform: rotate(135deg);
    }
    &:hover {
      & #{ $close }__line1 {
        transform: rotate(135deg);
      }
      & #{ $close }__line2 {
        transform: rotate(45deg);
      }
    }
    &:active {
      & #{ $close }__line1,
      & #{ $close }__line2 {
        transform: none;
      }
    }
  }
  &__title {
    font-family: $roboto;
    font-weight: 600;
    font-size: 2rem;
    margin: 3rem;
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
  &__technologies {
    margin-bottom: 4rem;
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
