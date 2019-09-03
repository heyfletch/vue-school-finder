<template>
  <v-app class="hero-app">
    <v-container>

      <v-chip-group class="hero-chip-group" column multiple :value="getFilters('grade')">
        <v-chip v-for="grade in grades" :key="grade" label outlined color="primary" :value="grade" @click="toggleFilter('grade', grade)">{{ grade }}</v-chip>
      </v-chip-group>

    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        grades: ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        appHeight: 0
      }
    },
    computed: {
      locale() {
        return this.$store.state.locale;
      }
    },
    mounted() {
      // eslint-disable-next-line no-undef
      for (let a of app) {
        if (!a.classList.value.split(" ").includes("hero-app")) {
          // This is the actual app
          this.appHeight = a.offsetTop;
        }
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
        }
        else {
          this.addFilter(type, value);
          this.scrollToFinder();
        }
      },
      addFilter(type, value) {
        this.$store.dispatch("addFilter", {type, value});
      },
      removeFilter(type, value) {
        this.$store.dispatch("removeFilter", {type, value});
      },
      scrollToFinder() {
        try {
          window.scrollTo({
            left: 0,
            top: this.appHeight,
            behavior: 'smooth'
          });
        }
        catch {
          // Options probably unsupported, do it without.
          window.scrollTo(0, this.appHeight);
        }
      }
    }
  }
</script>

<style>
.hero-app {
  height: 110px;
}
.hero-chip-group {
  width: 320px;
  text-align: left;
}
p, b, h4 {
  color: #205089;
}
</style>
