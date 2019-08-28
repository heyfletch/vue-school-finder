<template>
  <v-card class="mx-2 mt-5">
    <GmapMap
      :center="map.center"
      :zoom="map.zoom"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker :position="schools[0]"></GmapMarker>
      <GmapMarker :position="schools[1]"></GmapMarker>
      <GmapMarker :position="schools[2]"></GmapMarker>
    </GmapMap>
  </v-card>
</template>

<script>
export default {
  computed: {
    map() {
      return this.$store.state.map;
    }
  },
  data() {
    return {
      schools: [
        {
          lat: 37.9127694,
          lng: -122.3570752
        },
        {
          lat: 37.9113755,
          lng: -122.3570886
        },
        {
          lat: 37.9774973,
          lng: -122.328765
        }
      ]
    }
  }
}
</script>
