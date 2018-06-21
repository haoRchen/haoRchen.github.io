<template>
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
              <span class="icon is-medium">
                <i 
                  class="fab fa-angular fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="retweet">
              <span class="icon is-medium">
                <i 
                  class="fab fa-js fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-medium">
                <i 
                  class="fab fa-vuejs fa-lg" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-medium">
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
              class="button level-item">MORE INFO</a>
            <a 
              id="DemoLink"
              class="level-item">View Demo</a>
          </div>
        </nav>
      </div>
    </article>
  </div>    
</template>

<script>
export default {
  name: "ProjectTitle",
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "default",
          date: "2018/6/12",
          description: "default desc"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../main.sass";
.box {
  $box: &;
  background-color: $white;
  transition: all 0.3s;
  &:hover {
    border: 1px $light-grey;
    box-shadow: 0 2px 5px grey;
    border-radius: 6px;
    transform: scale(1.02, 1.02);
    & #{ $box }__nav__wrapper--button {
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
      #MoreInfoButton {
        background-color: $primary;
        color: $white;
        &:hover {
          background-color: $dark-grey;
          color: $white;
        }
      }
      #DemoLink {
        color: $primary;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: $primary;
        &:hover {
          color: $dark-grey;
          border-bottom-color: $dark-grey;
        }
      }
    }
  }
}
.icon {
  color: $primary;
  &:hover {
    color: $dark-grey;
  }
}
.title {
  font-family: $montserrat;
  font-weight: 700;
}
.ProjectDescription {
  font-family: $montserrat;
  font-weight: 300;
}
@media screen and (max-width: $mobile) {
  .box {
    $box: &;
    height: auto;
    &:hover {
      & #{ $box }__nav__wrapper--button {
        right: auto;
        height: 80px;
      }
    }
    &__nav {
      justify-content: center;
      flex-wrap: wrap;
      &__wrapper--button {
        flex-wrap: wrap;
        position: relative;
        right: auto;
        transition: all 0.3s ease-in-out;
        #MoreInfoButton {
          margin-top: 15px;
          margin-bottom: 15px;
          margin-left: 0.75rem; // counter bulma's is-mobile auto margin-right.
        }
        #DemoLink {
          width: auto;
          margin-left: 30%;
          margin-right: 30%;
          &:hover {
            margin-left: 15%;
            margin-right: 15%;
          }
        }
      }
    }
  }
  .level {
    justify-content: center;
  }
}
</style>
