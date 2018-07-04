<template>
  <transition name="slide-fade">
    <div class="modal">
      <div 
        class="modal__close" 
        @click="$emit('close')">
        <span class="modal__close__line1"/>
        <span class="modal__close__line2"/>
      </div>
      <carousel 
        v-if="project.imgUrls"
        :per-page="1"
        :pagination-enabled="false"
        :navigation-enabled="true"
        :navigation-next-label="`<i class='fas fa-chevron-right fa-2x'></i>`"
        :navigation-prev-label="`<i class='fas fa-chevron-left fa-2x'></i>`"
        :easing="'ease-out'"
        class="modal__carousel" >
        <slide 
          v-for="image in project.imgUrls" 
          :key="image" 
          class="modal__carousel__slide">
          <img 
            :src="image" 
            class="modal__image" 
            alt="">
        </slide>
      </carousel>
      <h5 class="modal__title">
        {{ project.name }}
      </h5>
      <a 
        v-if="project.blog" 
        :href="project.blog">
        Blog post about the contribution</a>
      <p 
        v-if="project.fullDescription"
        class="modal__description">
        {{ project.fullDescription }}
      </p>
      <h6 class="modal__subheader"><strong>Technologies used</strong></h6>
      <p class="modal__technologies">
        {{ project.technologies }}
      </p>
      <a 
        v-if="project.gitRepo" 
        :href="project.gitRepo">
        Source Code</a>
      <a 
        v-if="project.demoLink" 
        :href="project.demoLink">
        Demo</a>
      <a 
        v-if="project.prLink" 
        :href="project.prLink">
        Pull request</a>
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
  padding-top: 3rem;
  padding-bottom: 4rem;
  overflow-y: auto;
  &__close {
    $close: &;
    padding: 1.5rem;
    color: $dark-grey;
    top: 0;
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
      transform: translate(0, -5px);
      box-shadow: 0 2 $dark-grey;
    }
  }
  &__title {
    font-family: $roboto;
    font-weight: 600;
    font-size: 25px;
    margin: 1rem;
  }
  &__image {
    height: auto;
    width: auto;
    max-width: 70vw;
    max-height: 70vh;
    align-self: center;
  }
  &__carousel {
    width: 95%;
    margin-top: 1rem;
    &__slide {
      display: flex;
      justify-content: center;
    }
  }
  &__description {
    margin: 1rem;
    margin-top: 0;
    width: 40%;
  }
  &__subheader {
    font-family: $roboto;
    font-weight: 600;
    font-size: 17px;
  }
  &__technologies {
    padding-left: 1rem;
    padding-right: 1rem;
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
