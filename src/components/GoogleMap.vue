<template>
  <v-container>
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
      style="width:100%;  height: 700px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </v-container>
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
