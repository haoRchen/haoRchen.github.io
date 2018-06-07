<template>
  <div class="box is-shadowless"> <!-- TODO: toggle shadowless on hover. -->
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile is-marginless">
            <div class="level-left">
              <h5 class="title level-item">{{ project.name }}</h5>
            </div>
            <div class="level-right">
              <h6 class="subtitle level-item">{{ project.date }}</h6>
            </div>
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
          <div class="level-right">
            <a class="button level-item is-invisible">View Detail</a>
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
