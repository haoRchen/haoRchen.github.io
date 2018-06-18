<template>
  <div class="pagewrapper p-t-lg p-l-lg p-r-lg p-b-lg ">
    
    <div class="LeftColumn">
      <div>
        <h1 class="title AboutMeHeader" >Hey there!</h1>
      </div>
      <p class="AboutMeContent">
        Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.
      </p>
      <div class="TheFooter has-text-centered">
        <a >
          <span class="icon is-large linkedin">
            <i 
              class="fab fa-linkedin fa-lg"
              aria-hidden="true"/>
          </span> 
        </a>
        <a >
          <span class="icon is-large">
            <i 
              class="fab fa-github fa-lg"
              aria-hidden="true"/>
          </span>
        </a>
        <a >
          <span class="icon is-large">
            <i 
              class="fas fa-envelope fa-lg"
              aria-hidden="true"/>
          </span>
        </a>
      </div>
    </div>
    <div class="RightColumn">
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
  },
  mounted() {
    this.ScrollTop();
  },
  methods: {
    ScrollTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../main.sass";
.pagewrapper {
  background-color: $white;
  display: flex;
}
.RightColumn {
  width: 50%;
  display: flex;
  margin: 1%;
}
.LeftColumn {
  width: 50%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > div {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
.TheFooter {
  font-family: $montserrat;
  font-weight: 500;
  display: flex;
}
.linkedin {
  margin-left: -13px;
}
.icon:hover {
  color: $primary;
}
.AboutMeHeader {
  font-family: $roboto;
  font-weight: 600;
}
.AboutMeContent {
  font-family: $montserrat;
  font-weight: 400;
}
.PortfolioButton {
  font-family: $roboto;
  font-weight: 500;
}
@media screen and (max-width: $tablet) {
  .pagewrapper {
    flex-direction: column;
  }
  .RightColumn {
    width: 100%;
  }
  .LeftColumn {
    width: 100%;
  }
}
</style>
