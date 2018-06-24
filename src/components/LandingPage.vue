<template>
  <div>
    <!-- NEED TO PLACE IT ON THE PAGE TO USE. OMG -->
    <project-detail/>
    <p>Landing Page</p>
    <a 
      id="MoreInfoButton" 
      class="button level-item"
      @click="ShowModal">
      MORE INFO
    </a>
  </div>
</template>

<script>
import { ScrollTop } from "@/utility";
import ProjectDetail from "@/components/PortfolioComponents/ProjectDetail.vue";

export default {
  name: "LandingPage",
  components: {
    ProjectDetail
  },
  mounted() {
    ScrollTop();
  },
  methods: {
    ShowModal() {
      this.$modal.show("ProjectDetail");
    }
  }
};
</script>

<style>
</style>
