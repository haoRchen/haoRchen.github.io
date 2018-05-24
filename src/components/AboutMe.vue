<template>
  <v-container grid-list-lg>
    <v-layout id="layout" class="custom-wrap" align-center wrap row>
      <v-flex sm12 md6>
        <v-container>
          <!-- <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" height="700px" width="500px" alt="My location"> -->
        <google-map/>
        </v-container>
      </v-flex> 
      <v-flex sm12 md6> <!-- 2nd Column -->
        <v-container>
          <v-container>
            <h1 class="text-xs-left">Whale hello there!</h1>
          </v-container>
          <v-container>
            <p class="text-xs-left">Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.</p>
          </v-container>
          <v-container>
            <v-layout aligh-center justify-right> 
              <v-btn color="info">View Portfolio</v-btn>
            </v-layout>
          </v-container>
          <v-container>
            <hr>
              <v-layout fill-height>
                <v-flex xs12 align-baseline align-content-end align-content-space-around>
                  <h3>Connect with me  - </h3>
                  <v-btn flat icon color="3B4A4D">
                    <v-icon class="text-xs-right">fab fa-linkedin</v-icon>
                  </v-btn>
                  <v-btn flat icon color="3B4A4D">
                    <v-icon class="text-xs-right">fab fa-github</v-icon>
                  </v-btn>
                  <v-btn flat icon color="3B4A4D">
                    <v-icon class="text-xs-right">fas fa-envelope</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
          </v-container>
        </v-container>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
import GoogleMap from "./GoogleMap";

export default {
  components: {
    GoogleMap
  }
};
</script>
<style>
#layout {
  background-color: white;
}
</style>
