<template>
  <transition name="slide-fade">
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <div class="level is-mobile is-marginless">
              <div class="level-left">
                <h5 class="title ProjectTitle level-item">{{ project.name }}</h5>
              </div>
            </div>
            <p class="ProjectDescription">
              {{ project.description }}            
            </p>
          </div>
          <!-- Card Technology Icons -->
          <nav class="level box__nav is-mobile is-marginless">
            <div class="level-left box__nav__wrapper--icon">
              <a 
                class="level-item" 
                aria-label="reply">
                <span class="icon is-medium tech-icon">
                  <i 
                    class="fab fa-angular fa-lg" 
                    aria-hidden="true"/>
                </span>
              </a>
              <a 
                class="level-item" 
                aria-label="retweet">
                <span class="icon is-medium tech-icon">
                  <i 
                    class="fab fa-js fa-lg" 
                    aria-hidden="true"/>
                </span>
              </a>
              <a 
                class="level-item" 
                aria-label="like">
                <span class="icon is-medium tech-icon">
                  <i 
                    class="fab fa-vuejs fa-lg" 
                    aria-hidden="true"/>
                </span>
              </a>
              <a 
                class="level-item" 
                aria-label="like">
                <span class="icon is-medium tech-icon">
                  <i 
                    class="fab fa-node-js fa-lg" 
                    aria-hidden="true"/>
                </span>
              </a>
            </div>
            <div 
              class="level-right box__nav__wrapper--button">
              <a 
                id="MoreInfoButton" 
                class="button level-item"
                @click="ShowModal">
                Info 
                <i 
                  class="fas fa-angle-double-right fa-lg" 
                  aria-hidden="true"/>
              </a>
              <!-- <a 
                v-if="project.demoLink"
                id="DemoLink"
                :href="project.demoLink"
                class="level-item">View Demo</a> -->
            </div>
          </nav>
        </div>
      </article>
    </div>    
  </transition>
</template>

<script>
import ProjectDetail from "@/components/PortfolioComponents/ProjectDetail.vue";

export default {
  name: "ProjectTitle",
  components: {
    ProjectDetail
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
  },
  methods: {
    ShowModal() {
      /* 
        the first argument is the component definition, 
        the second are component properties, 
        the third modal parameters, 
        and the fourth the modal event listeners):
      */
      this.$modal.show(
        ProjectDetail,
        { project: this.project },
        {
          scrollable: true,
          transition: "fade",
          height: "auto"
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../main.scss";
.box {
  $box: &;
  background-color: $white;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.01, 1.01);
    .tech-icon {
      color: $dark-grey;
      &:hover {
        color: $primary;
      }
    }
    & #{ $box }__nav__wrapper--button {
      transition-delay: 0.5s;
      opacity: 1;
      right: 0px;
    }
  }
  &__nav {
    flex-wrap: nowrap;
    &__wrapper--button {
      opacity: 0;
      height: 0; // Used for slide out/in within mobile view
      right: -20px;
      position: relative;
      transition: all 0.3s ease-in-out;
      font-family: $roboto;
      font-weight: 500;
      transition-delay: 0;
      #MoreInfoButton {
        transition: all 0.5s ease;
        background-color: $dark-grey;
        color: $white;
        width: 10rem;
        &:hover {
          background-color: $primary;
          color: $white;
        }
      }
      #DemoLink {
        color: $dark-grey;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: $dark-grey;
        margin-left: 1rem;
        margin-right: 1rem;
        &:hover {
          color: $primary;
          border-bottom-color: $primary;
        }
      }
    }
  }
}
.title {
  font-family: $montserrat;
  font-weight: 700;
}
.ProjectDescription {
  font-family: $montserrat;
  font-weight: 300;
  font-size: 15px;
}
@media screen and (max-width: $tablet) {
  .box {
    $box: &;
    height: auto;
    transition: all 0.5s ease;
    &:hover {
      & #{ $box }__nav__wrapper--button {
        height: 40px;
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
    &__nav {
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      &__wrapper--button {
        display: flex;
        flex-direction: column;
        right: auto;
        flex-wrap: wrap;
        position: relative;
        transition: all 0.3s ease-in-out;
        transition-delay: 0;
        #MoreInfoButton {
          transition: all 0.5s ease;
          position: relative;
          margin-top: 1rem;
          width: 12rem;
          bottom: -10px;
        }
        #DemoLink {
          transition: all 0.5s ease;
          width: auto;
          &:hover {
            padding-left: 30px;
            padding-right: 30px;
          }
        }
      }
      &__wrapper--icon {
        margin-left: 0.75rem;
      }
    }
  }
  .level {
    justify-content: center;
    transition: all 0.5s ease;
  }
}
</style>
