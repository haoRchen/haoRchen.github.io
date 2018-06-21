<template>
  <div class="columns portfolio is-centered ">
    <div class="portfolio__topnav">
      <a 
        class="button portfolio__topnav__button"
        href="#">
        Work
      </a>
      <a 
        class="button portfolio__topnav__button"
        href="#">
        Personal Projects
      </a>
      <a 
        class="button portfolio__topnav__button"
        href="#">
        Open Source
      </a>
    </div>
    <div class="column RightLayout">
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

<style lang="scss" scoped>
@import "../../main.sass";
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__topnav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    &__button {
      font-family: $roboto;
      font-weight: 600;
      padding-left: 0;
      padding-right: 0;
      margin-left: 10px;
      margin-right: 10px;
      text-decoration: none;
      background-color: transparent;
      border: none;
      &:hover {
        color: $primary;
        &:after {
          width: 100%;
        }
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        border-bottom: 3px solid $primary;
        transition: width 0.3s;
      }
      &:focus {
        box-shadow: none;
        color: $primary-darker;
        &:after {
          width: 0;
        }
      }
    }
  }
}
</style>
