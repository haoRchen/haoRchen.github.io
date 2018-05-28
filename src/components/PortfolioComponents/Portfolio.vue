<template>
    <v-container grid-list-xs fill-height>
    <v-layout class="custom-wrap"  wrap row>
      <v-flex sm12 md2 id="HeaderPane" >
        <v-container mt-5>
          <h3 class="text-sm-right">Work</h3>
          <h3 class="text-sm-right">Personal Projects</h3>
          <h3 class="text-sm-right">Open Source</h3>
        </v-container>
      </v-flex> 
      <v-flex id="ProjectPane" sm12 md10> <!-- 2nd Column -->
        <v-container>
          <v-layout align-center justify-center>
            <v-flex xs10 md11>
              <v-card flat>
                <v-container>
                  <v-layout align-center justify-center>
                    <v-flex xs12 md12>
                      <v-card-title primary-title>
                          <v-layout>
                            <v-flex>
                              <h4 class="headline mb-0">Kangaroo Valley Safari</h4>
                            </v-flex>
                            <v-flex class="text-xs-right">
                              <p>Jan 2016 - Oct 2017</p>
                            </v-flex>
                          </v-layout>
                          Located two hours south of Sydney in the Southern Highlands of New South Wales Located two hours south of Sydney in the Southern Highlands of New South Wales
                      </v-card-title>
                      <v-card-actions>
                        <v-layout>
                          <v-flex>
                            <v-btn icon color="white">
                              <v-icon color="red">fab fa-angular</v-icon>
                            </v-btn>
                            <v-btn icon color="white">
                              <v-icon color="red">fab fa-vuejs</v-icon>
                            </v-btn>
                            <v-btn icon color="white">
                              <v-icon color="red">fab fa-js</v-icon>
                            </v-btn>
                            <v-btn icon color="white">
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
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
#HeaderPane {
  background-color: grey;
}
#ProjectPane {
  background-color: white;
}
</style>
