<template>
  <div class="columns is-vcentered layout p-t-lg p-l-lg p-r-lg p-b-lg">
    <div class="column">
      <google-map/>
    </div>
    <div class="column content">
      <div>
        <h2 class="AboutMeHeader is-size-2-desktop" >Whale hello there!</h2>
      </div>
      <p class="AboutMeContent">Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.</p>
      <div class="level">
        <div class="level-left"/>
        <div class="level-right">
          <div class="level-item">
            <a class="button is-info">View Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  </div>    
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
<style lang="sass" scoped>
@import '../main.sass'
.layout 
  background-color: #fff
.AboutMeHeader
  font-family: 'Roboto Slab', Arial, sans-serif
  font-weight: 600
.AboutMeContent
  font-family: 'Montserrat', Arial, sans-serif
  font-weight: 400
</style>
