<template>
  <v-app>
    <v-chip-group class="hero-chip-group" column multiple :value="getFilters('grade')">
      <v-chip
        v-for="grade in grades"
        :key="grade"
        label
        color="white"
        text-color="primary"
        :value="grade"
        @click="toggleFilter('grade', grade)"
      >{{ grade }}</v-chip>
    </v-chip-group>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      grades: [
        "TK", "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
      ]
    };
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    }
  },
  methods: {
    hasFilter(type, value) {
      return this.$store.getters.hasFilter(type, value);
    },
    getFilters(type) {
      return this.$store.getters.getFiltersByType(type).map(v => v.value);
    },
    toggleFilter(type, value) {
      if (this.hasFilter(type, value)) {
        this.removeFilter(type, value);
        this.scrollToFinder();
      } else {
        this.addFilter(type, value);
        this.scrollToFinder();
      }
    },
    addFilter(type, value) {
      this.$store.dispatch("addFilter", { type, value });
    },
    removeFilter(type, value) {
      this.$store.dispatch("removeFilter", { type, value });
    },
    scrollToFinder() {
      const appHeight = window.mainApp.$el.getClientRects()[0].top + window.pageYOffset;
      try {
        window.scrollTo({
          left: 0,
          top: appHeight,
          behavior: "smooth"
        });
      } catch {
        // Options probably unsupported, do it without.
        window.scrollTo(0, appHeight);
      }
    }
  }
};
</script>

<style>
.v-application--wrap {
  min-height: auto;
}
.hero-chip-group .v-chip__content {
  display: inline-grid;
  margin: auto;
  width: 20px;
  text-align: center;
}
</style>
