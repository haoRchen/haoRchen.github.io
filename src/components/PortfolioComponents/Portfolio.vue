<template>
  <div class="columns is-desktop">
    <div class="column LeftLayout is-one-fifth p-t-lg">
      <button class="button SideButton  is-pulled-right">
        Work
      </button>
      <button class="button SideButton is-pulled-right">
        Personal Projects
      </button>
      <button class="button SideButton  is-pulled-right">
        Open Source
      </button>
    </div>
    <div class="column content is-two-thirds RightLayout p-t-lg p-l-lg p-r-lg p-b-lg">
      <ProjectCard 
        v-for="project in workList" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/PortfolioComponents/ProjectCard.vue";
import WorkProjects from "@/assets/ProjectList/work";
export default {
  name: "Portfolio",
  components: {
    ProjectCard
  },
  data: function() {
    return {
      workList: Object
    };
  },
  mounted() {
    this.workList = WorkProjects;
  }
};
</script>

<style lang="sass" scoped>
@import '../../main.sass'
.LeftLayout
.RightLayout 
  background-color: #fff
.SideButton
  text-decoration: none
  background-color: transparent
  border: none
  font-family: 'Roboto Slab', Arial, sans-serif
  font-weight: 600
  @media screen and (min-width: $tablet)
    clear: both
.SideButton:hover
  background-color: grey
</style>
