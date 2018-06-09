<template>
  <div class="columns is-tablet">
    <div class="column LeftLayout is-one-fifth p-t-lg m-l-lg">
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
    <div class="column content is-two-thirds RightLayout p-t-lg p-l-lg p-r-lg p-b-lg m-l-sm">
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
  data() {
    return {
      workList: Object
    };
  },
  mounted() {
    this.workList = WorkProjects;
    this.ScrollTop();
  },
  methods: {
    ScrollTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../main.sass'
.LeftLayout
  flex-direction: row
  justify-content: center
  display: flex
  @media screen and (min-width: $tablet)
    display: flex
    flex-direction: column
    justify-content: flex-start
.RightLayout 
  background-color: #fff
.SideButton
  text-decoration: none
  background-color: transparent
  border: none
  font-family: $roboto
  font-weight: 600
  display: flex
  justify-content: flex-end
  @media screen and (min-width: $tablet)
    display: flex
    jusitfy-content: center 
.SideButton:hover
  background-color: grey
</style>
