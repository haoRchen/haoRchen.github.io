<template>
  <div class="mapWrapper">
    <!-- <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br> -->
    <gmap-map
      :center="center"
      :zoom="12"
      class="map"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        @click="center=m.position"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 43.688, lng: -79.304 },
      markers: [{ lat: 43.688, lng: -79.304 }],
      places: [],
      currentPlace: null
    };
  },
  mounted() {
    this.addMarker();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        // this.currentPlace = null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../main.sass";
.fullsize {
  width: 100%;
  height: 100%;
}
.mapWrapper {
  display: flex;
  @extend .fullsize;
  .map {
    @extend .fullsize;
    // height: 20vw
    min-height: 350px;
    min-width: 200px;
  }
}
</style>
