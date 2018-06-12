<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile is-marginless">
            <div class="level-left">
              <h5 class="title ProjectTitle level-item">{{ project.name }}</h5>
            </div>
            <!-- <div class="level-right">
              <h6 class="subtitle level-item">{{ project.date }}</h6>
            </div> -->
          </div>
          <!-- Project Descriptions -->
          <p class="ProjectDescription">
            {{ project.description }}            
          </p>
        </div>
        <!-- Card Technology Icons -->
        <nav class="level NavLevel is-mobile is-marginless">
          <div class="level-left">
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
            class="level-right ButtonGroup">
            <a class="button MoreInfoButton level-item">MORE INFO</a>
            <a class="DemoLink level-item">View Demo</a>
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

<style lang="sass" scoped>
@import "../../main.sass"
.box
  background-color: $white
  transition: all 0.3s 
  @media screen and (max-width: $mobile)
    height: auto
  &:hover
    border: 1px $light-grey
    box-shadow: 0 2px 5px grey 
    border-radius: 6px
    .icon
      color: $primary
      &:hover
        color: $dark-grey
    .ButtonGroup
      opacity: 1
      right: 0px
      @media screen and (max-width: $mobile)
        right: auto
        height: 80px
  .ButtonGroup
    opacity: 0 
    height: 0 // Used for slide out/in within mobile view
    right: -20px
    position: relative
    transition: all 0.3s ease-in-out
    @media screen and (max-width: $mobile)
      position: relative
      right: auto
      transition: all 0.3s ease-in-out
    .DemoLink
      border-bottom-width: 1px
      border-bottom-style: solid
  .NavLevel
    flex-wrap: nowrap
    @media screen and (max-width: $mobile)
      justify-content: space-around
      flex-wrap: wrap
      .ButtonGroup
        flex-wrap: wrap
        .MoreInfoButton,
        .DemoLink
          margin-top: 10px
          width: 100%
.title
  font-family: $roboto
  font-weight: 500
.subtitle
  font-family: $montserrat
  font-weight: 400
.ProjectDescription
  font-family: $montserrat
  font-weight: 300
.level
  @media screen and (max-width: $mobile)
    justify-content: center
</style>
