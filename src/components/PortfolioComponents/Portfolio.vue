<template>
  <v-container 
    grid-list-xs 
    fill-height>
    <v-layout 
      class="custom-wrap" 
      wrap 
      row>
      <v-flex 
        id="HeaderPane" 
        class="text-xs-right"
        sm12 
        md2 >
        <v-container mt-5 >
          <v-btn 
            flat
            color="white" 
            class="text-xs-right">Work</v-btn>
          <v-btn 
            flat
            color="white" 
            class="text-xs-right">Personal Projects</v-btn>
          <v-btn 
            flat
            color="white" 
            class="text-xs-right">Open Source</v-btn>
            <!-- <h3 class="text-sm-right">Work</h3>
          <h3 class="text-sm-right">Personal Projects</h3>
          <h3 class="text-sm-right">Open Source</h3> -->
        </v-container>
      </v-flex> 
      <v-flex 
        id="ProjectPane" 
        sm12 
        md10> <!-- 2nd Column -->
        <v-container>
          <v-layout 
            align-center 
            justify-center>
            <v-flex 
              xs10 
              md11>
              <ProjectCard 
                v-for="project in workList" 
                :key="project.id" 
                :project="project"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex> 
    </v-layout>
  </v-container>
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

<style>
#HeaderPane {
  background-color: grey;
}
#ProjectPane {
  background-color: white;
}
</style>
