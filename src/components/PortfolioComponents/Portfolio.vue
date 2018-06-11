<template>
  <div class="columns PortfolioWrapper is-tablet">
    <div class="column LeftLayout is-one-fifth p-t-lg m-l-lg">
      <a 
        class="button SideButton "
        href="#">
        Work
      </a>
      <a 
        class="button SideButton "
        href="#">
        Personal Projects
      </a>
      <a 
        class="button SideButton "
        href="#">
        Open Source
      </a>
    </div>
    <div class="column content is-two-thirds RightLayout ">
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
// import OpenSourceProjects from "@/assets/ProjectList/openSource";
// import PersonalProjects from "@/assets/ProjectList/personal";

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
    &:hover
      color: $primary
.RightLayout 
</style>
