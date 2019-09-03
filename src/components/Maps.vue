<template>
  <v-card class="mx-2 mt-4">
    <GmapMap
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      map-type-id="roadmap"
      :options="mapStyle"
      style="width: 100%; height: 400px"
    >
      <GmapMarker
        v-for="(school, index) in schools"
        :key="index"
        :clickable="true"
        @click="selectSchool(school)"
        :position="getLatLng(school)"
      ></GmapMarker>
    </GmapMap>
  </v-card>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  computed: {
    schools() {
      return this.$store.state.schools;
    },
    selectedSchool() {
      return this.$store.state.selectedSchool;
    },
    google: gmapApi
  },
  data() {
    return {
      zoom: 12,
      initialCenter: {
        lat: 37.949996,
        lng: -122.334397
      },
      center: {
        lat: 37.949996,
        lng: -122.334397
      },
      map: undefined,
      bounds: undefined,
      mapStyle: {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: [] // TODO maybe
      }
    };
  },
  watch: {
    selectedSchool(newV) {
      if (newV) {
        this.center = this.getLatLng(newV);
        this.zoom = 15;
      } else {
        this.zoom = 11;
        this.center = this.initialCenter;
        this.map.fitBounds(this.bounds);
      }
    },
    schools(newV) {
      this.bounds = new this.google.maps.LatLngBounds();
      for (let school of newV) {
        this.bounds.extend(this.getLatLng(school));
      }

      if (this.map) {
        this.map.fitBounds(this.bounds);
      }
    }
  },
  methods: {
    getLatLng(school) {
      return {
        lat: school.acf.schoolMap.latitude,
        lng: school.acf.schoolMap.longitude
      };
    },
    selectSchool(school) {
      this.$store.commit("selectSchool", school);
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      this.map = map;
      if (this.bounds) {
        map.fitBounds(this.bounds);
      } else if (this.schools.length > 0) {
        this.bounds = new this.google.maps.LatLngBounds();
        for (let school of this.schools) {
          this.bounds.extend(this.getLatLng(school));
        }
        this.map.fitBounds(this.bounds);
      }
    });
  }
};
</script>
