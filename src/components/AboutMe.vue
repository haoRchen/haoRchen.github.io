<template>
  <div class="container is-centered">
    <div class="aboutme">
      
      <div class="aboutme__leftcolumn">
        <div>
          <h1 class="title aboutme__header" >Hey there!</h1>
        </div>
        <p class="aboutme__content">
          Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.
        </p>
        <div class="aboutme__footer has-text-centered">
          <a >
            <span class="icon is-large aboutme__footer__icon linkedin">
              <i 
                class="fab fa-linkedin fa-lg"
                aria-hidden="true"/>
            </span> 
          </a>
          <a >
            <span class="icon aboutme__footer__icon is-large">
              <i 
                class="fab fa-github fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
          <a >
            <span class="icon aboutme__footer__icon is-large">
              <i 
                class="fas fa-envelope fa-lg"
                aria-hidden="true"/>
            </span>
          </a>
        </div>
      </div>
      <div class="aboutme__rightcolumn">
        <google-map/>
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
@import "../main.scss";
.aboutme {
  background-color: $white;
  display: flex;
  padding: 2.5rem;
  margin: auto;
  margin-top: 3rem;
  width: 80%;
  align-self: center;
  transition: all 0.7s ease;
  &__leftcolumn {
    width: 50%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.5s ease;
    & > div {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  &__rightcolumn {
    width: 50%;
    display: flex;
    margin: 1%;
    transition: all 0.5s ease;
  }
  &__footer {
    font-family: $montserrat;
    font-weight: 500;
    display: flex;
    &__icon:hover {
      color: $primary;
    }
  }
  &__header {
    font-family: $roboto;
    font-weight: 600;
  }
  &__content {
    font-family: $montserrat;
    font-weight: 400;
  }
}
.linkedin {
  margin-left: -13px;
}
@media screen and (max-width: $desktop) {
  .aboutme {
    width: 90%;
  }
}
@media screen and (max-width: $tablet) {
  .aboutme {
    width: 100%;
    flex-direction: column;
    &__leftcolumn,
    &__rightcolumn {
      width: 100%;
    }
  }
}
</style>
