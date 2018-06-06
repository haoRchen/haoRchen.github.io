<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="level is-mobile is-marginless">
            <div class="level-left">
              <h6 class="title is-5 level-item">{{ project.name }}</h6>
            </div>
            <div class="level-right">
              <h6 class="subtitle is-6 level-item">{{ project.date }}</h6>
            </div>
          </div>
          <!-- Project Descriptions -->
          <p >
            {{ project.description }}            
          </p>
        </div>
        <!-- Card Technology Icons -->
        <nav class="level is-mobile is-marginless">
          <div class="level-left">
            <a 
              class="level-item" 
              aria-label="reply">
              <span class="icon is-small">
                <i 
                  class="fab fa-angular" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="retweet">
              <span class="icon is-small">
                <i 
                  class="fab fa-js" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-small">
                <i 
                  class="fab fa-vuejs" 
                  aria-hidden="true"/>
              </span>
            </a>
            <a 
              class="level-item" 
              aria-label="like">
              <span class="icon is-small">
                <i 
                  class="fab fa-node-js" 
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

</style>
