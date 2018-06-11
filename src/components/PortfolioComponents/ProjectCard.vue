<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile is-marginless">
            <div class="level-left">
              <h5 class="title level-item">{{ project.name }}</h5>
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
        <nav class="level is-mobile is-marginless">
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
            v-if="ShowMoreInfo"
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
  },
  data() {
    return {
      ShowMoreInfo: true
    };
  },
  methods: {
    ToggleShowMoreInfo() {
      this.ShowMoreInfo = !this.ShowMoreInfo;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../main.sass"
.box
  background-color: $white
  @media screen and (max-width: $mobile)
    transition: height 0.3s
    height: auto
  &:hover
    border: 1px $light-grey
    box-shadow: 0 2px 5px grey 
    border-radius: 6px
    transition: all 0.5s 
    .icon
      color: $primary
      &:hover
        color: $dark-grey
    .ButtonGroup
      opacity: 1
      @media screen and (max-width: $mobile)
        height: 100px
  .level-right
    opacity: 0
    height: 0
    transition: all 0.3s
    .DemoLink
      border-bottom-width: 1px
      border-bottom-style: solid
  .level
    flex-wrap: wrap
    @media screen and (max-width: $mobile)
      justify-content: space-around
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
.ProjectDescription
  overflow: auto
</style>
