<template>
  <v-card flat>
    <v-container>
      <v-layout 
        align-center 
        justify-center>
        <v-flex 
          xs12 
          md12>
          <v-card-title primary-title>
            <v-layout>
              <v-flex>
                <h4 class="headline mb-0">{{ project.name }}</h4>
              </v-flex>
              <v-flex class="text-xs-right">
                <p>{{ project.date }}</p>
              </v-flex>
            </v-layout>
            {{ project.description }}
          </v-card-title>
          <v-card-actions>
            <v-layout>
              <v-flex>
                <a class="button">
                  <span class="icon is-large">
                    <i class="fab fa-angular<"/>
                  </span>
                </a>
                <a class="button">
                  <span class="icon is-large">
                    <i class="fab fa-js<"/>
                  </span>
                </a>
                <a class="button">
                  <span class="icon is-large">
                    <i class="fab fa-vuejs<"/>
                  </span>
                </a>
                <a class="button">
                  <span class="icon is-large">
                    <i class="fab fa-node-js<"/>
                  </span>
                </a>
              </v-flex>
              <v-flex class="text-xs-right">
                <v-btn color="white">View Details</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
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

<style>
</style>
