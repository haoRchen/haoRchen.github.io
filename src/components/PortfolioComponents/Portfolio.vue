<template>
  <div class="columns is-vcentered">
    <div class="column is-one-fifth">
      <a class="button">
        Work
      </a>
      <a class="button">
        Personal Projects
      </a>
      <a class="button">
        Open Source
      </a>
    </div>
    <div class="column content layout p-t-lg p-l-lg p-r-lg p-b-lg">
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
.layout 
  background-color: #fff
</style>
