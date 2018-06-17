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
          <div class="level-left IconWrapper">
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
            class="level-right ButtonWrapper">
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
    transform: scale(1.02, 1.02)
    .icon
      color: $primary
      &:hover
        color: $dark-grey
    .ButtonWrapper
      opacity: 1
      right: 0px
      @media screen and (max-width: $mobile)
        right: auto
        height: 80px
  .ButtonWrapper
    opacity: 0 
    height: 0 // Used for slide out/in within mobile view
    right: -20px
    position: relative
    transition: all 0.3s ease-in-out
    font-family: $roboto
    font-weight: 500
    .MoreInfoButton
      background-color: $primary
      color: $white
      &:hover
        background-color: $dark-grey
        color: $white
    .DemoLink
      color: $primary
      border-bottom-width: 1px
      border-bottom-style: solid 
      border-bottom-color: $primary
      &:hover
        color: $dark-grey
        border-bottom-color: $dark-grey
    @media screen and (max-width: $mobile)
      position: relative
      right: auto
      transition: all 0.3s ease-in-out
  .NavLevel
    flex-wrap: nowrap
    @media screen and (max-width: $mobile)
      justify-content: center
      flex-wrap: wrap
      .IconWrapper
      .ButtonWrapper
        flex-wrap: wrap
        .MoreInfoButton
          margin-top: 15px
          margin-bottom: 15px
          margin-left: 0.75rem// counter bulma's is-mobile auto margin-right.
        .DemoLink
          width: auto
          margin-left: 30%
          margin-right: 30%
          &:hover
            margin-left: 15%
            margin-right: 15%
.level
  @media screen and (max-width: $mobile)
    justify-content: center
.title
  font-family: $montserrat
  font-weight: 700
.ProjectDescription
  font-family: $montserrat
  font-weight: 300
</style>
