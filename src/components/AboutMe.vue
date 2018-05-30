<template>
  <v-container 
    grid-list-xs 
    fill-height>
    <v-layout 
      id="layout" 
      class="custom-wrap" 
      align-center 
      justify-center 
      wrap 
      row>
      <v-flex 
        sm12 
        md6>
        <v-container>
          <!-- <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" height="700px" width="500px" alt="My location"> -->
          <google-map/>
        </v-container>
      </v-flex> 
      <v-flex 
        sm12 
        md6> <!-- 2nd Column -->
        <v-container>
          <v-container>
            <h1 class="text-xs-left">Whale hello there!</h1>
          </v-container>
          <v-container>
            <p class="text-xs-left">Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.</p>
            <v-flex class="text-xs-right">
              <v-btn color="primary" >View Portfolio</v-btn>
            </v-flex>
          </v-container>
        </v-container>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
import GoogleMap from "./GoogleMap";

export default {
  name: "AboutMe",
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
