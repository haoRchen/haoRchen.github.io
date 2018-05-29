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
                <h4 class="headline mb-0">{{ Project.name }}</h4>
              </v-flex>
              <v-flex class="text-xs-right">
                <p>{{ Project.date }}</p>
              </v-flex>
            </v-layout>
            {{ Project.description }}
          </v-card-title>
          <v-card-actions>
            <v-layout>
              <v-flex>
                <v-btn 
                  icon 
                  color="white">
                  <v-icon color="red">fab fa-angular</v-icon>
                </v-btn>
                <v-btn 
                  icon 
                  color="white">
                  <v-icon color="red">fab fa-vuejs</v-icon>
                </v-btn>
                <v-btn 
                  icon 
                  color="white">
                  <v-icon color="red">fab fa-js</v-icon>
                </v-btn>
                <v-btn 
                  icon 
                  color="white">
                  <v-icon color="red">fab fa-node-js</v-icon>
                </v-btn>
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
    Project: {
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
