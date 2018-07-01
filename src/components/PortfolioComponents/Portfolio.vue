<template>
  <div class="container">
    <div class="columns portfolio is-centered ">
      <div class="portfolio__topnav">
        <a 
          class="button portfolio__topnav__button selected"
          href="#"
          @click="projectList = work, selected($event)">
          Work
        </a>
        <a 
          class="button portfolio__topnav__button"
          href="#"
          @click="projectList = personal, selected($event)">
          Personal
        </a>
        <a 
          class="button portfolio__topnav__button"
          href="#"
          @click="projectList = openSource, selected($event)">
          Open Source
        </a>
      </div>
      <div class="column portfolio__contents">
        <ProjectCard 
          v-for="project in projectList" 
          :key="project.id" 
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTop, Selected } from "@/utility";

import ProjectCard from "@/components/PortfolioComponents/ProjectCard.vue";
import WorkProjects from "@/assets/ProjectList/work";
import OpenSourceProjects from "@/assets/ProjectList/openSource";
import PersonalProjects from "@/assets/ProjectList/personal";

export default {
  name: "Portfolio",
  components: {
    ProjectCard
  },
  data() {
    return {
      projectList: Object,
      work: Object,
      openSource: Object,
      personal: Object
    };
  },
  mounted() {
    this.projectList = WorkProjects;
    this.work = WorkProjects;
    this.personal = PersonalProjects;
    this.openSource = OpenSourceProjects;
    ScrollTop();
  },
  methods: {
    selected: e => {
      Selected(e.target);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../main.scss";
.column {
  padding-left: 0;
  padding-right: 0;
}
.portfolio {
  $self: &;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  margin: auto;
  width: 80%;
  transition: all 0.7s ease;
  &__topnav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    transition: all 0.7s ease;
    .selected {
      opacity: 1;
      transform: scale(1.1, 1.1);
      &#{$self}__topnav__button {
        &:after {
          width: 100%;
        }
      }
    }
    &__button {
      font-family: $roboto;
      font-weight: 600;
      // font-size: 1px;
      padding-left: 0;
      padding-right: 0;
      margin-left: 10px;
      margin-right: 10px;
      text-decoration: none;
      background-color: transparent;
      border: none;
      opacity: 0.4;
      &:hover {
        opacity: 1;
        &:after {
          width: 100%;
        }
      }
      &:focus {
        box-shadow: none !important;
      }
      &:active {
        opacity: 1;
        box-shadow: none;
        color: $dark-grey;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 0;
        border-bottom: 3px solid $dark-grey;
        transition: width 0.3s;
      }
    }
  }
}
@media screen and (max-width: $desktop) {
  .portfolio {
    width: 90%;
  }
}
@media screen and (max-width: $tablet) {
  .portfolio {
    width: 100%;
  }
}
</style>
