<template>
  <div class="columns is-vcentered is-tablet p-t-lg p-l-lg p-r-lg p-b-lg is-3 layout">
    
    <div class="column content">
      <div>
        <h2 class="AboutMeHeader is-size-2-tablet" >Whale hello there!</h2>
      </div>
      <p class="AboutMeContent">Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.</p>
      <div class="level">
        <div class="level-left"/>
        <div class="level-right">
          <div class="level-item">
            <router-link 
              to="/portfolio"
              class="button PortfolioButton " 
              tag="a"
            >
              Portfolio
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <google-map/>
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
  font-family: $roboto
  font-weight: 600
.AboutMeContent
  font-family: $montserrat
  font-weight: 400
.PortfolioButton
  font-family: $roboto
  font-weight: 500
</style>
