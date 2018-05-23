<template>
  <v-container grid-list-lg>
    <v-layout id="layout" row wrap>
      <v-flex xs6>
        <v-container>
          <v-card dark color="primary">
            <v-card-media 
              src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png"
              height="700px"
              >
            </v-card-media>
            <v-card-text>12</v-card-text>
          </v-card>
        </v-container>
      </v-flex> 
      <v-flex xs6>
        <v-container>
          <v-container>
            <h1 class="text-xs-left">Whale hello there!</h1>
          </v-container>
          <v-container>
            <p class="text-xs-left">Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.</p>
          </v-container>
          <v-container>
            <v-layout align-end justify-end> 
              <v-btn color="info">View Portfolio</v-btn>
            </v-layout>
          </v-container>
        </v-container>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>
<style>
#layout {
  background-color: white;
}
</style>
