<template>
  <div class="columns PortfolioWrapper is-centered is-tablet">
    <div class="column LeftLayout is-one-fifth">
      <a 
        class="button SideButton Work"
        href="#">
        Work
      </a>
      <a 
        class="button SideButton PersonalProject"
        href="#">
        Personal Projects
      </a>
      <a 
        class="button SideButton OpenSource"
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
  display: flex
  flex-direction: row
  justify-content: center
  flex-wrap: wrap
  margin-right: 2% // gap between column
  @media screen and (min-width: $tablet)
    flex-direction: column
    justify-content: flex-start
    align-items: flex-end
  .SideButton
    text-decoration: none
    background-color: transparent
    border: none
    font-family: $roboto
    font-weight: 600
    width: fit-content
    padding-left: 0
    padding-right: 0
    margin-left: auto
    @media screen and (max-width: $tablet)
      margin-left: 10px
      margin-right: 10px
    &:hover
      color: $primary
      &:after
        width: 100%
    &:after
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 0
      border-bottom: 3px solid $primary
      transition: width 0.3s
    &:focus
      box-shadow: none
      color: $primary-darker
      &:after
        width: 0
</style>
