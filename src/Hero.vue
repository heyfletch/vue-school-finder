<template>
  <v-app class="hero-app">
    <v-container class="hero-container">
      <v-row no-gutters justify="center" class="hero-row mx-auto">
        <v-col lg="6" align="center">
          <h4 class="mb-2">{{ locale.heroTitle }}</h4>
          <p><b>{{ locale.heroSearchSchools }}</b> {{ locale.heroStudentEntering }}</p>
          <v-chip-group class="hero-chip-group" column multiple :value="getFilters('grade')">
            <v-chip v-for="grade in grades" :key="grade" label outlined color="primary" :value="grade" @click="addFilter('grade', grade)">{{ grade }}</v-chip>
          </v-chip-group>
          <p class="my-3"><b>{{ locale.heroOR }}</b></p>
          <p>{{ locale.heroReady }}</p>
          <v-btn href="https://enrollwcc.org/apply/" color="primary" min-width="300px" large class="mb-3">{{ locale.heroApplyNow }}</v-btn>
          <p>
            {{ locale.heroUpTo }} <b>12</b>
            <br/>
            {{ locale.heroCharterSchools }}
          </p>
        </v-col>
        <v-col lg="6"></v-col>
      </v-row>
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
      addFilter(type, value) {
        if (!this.hasFilter(type, value)) {
          this.$store.dispatch("addFilter", {type, value});
        }
        this.scrollToFinder();
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
  height: 400px;
}

.hero-container {
  background-color: #CDDBE7;
  height: 400px;
}

.hero-row {
  width: 800px;
}

.hero-chip-group {
  width: 320px;
  text-align: center;
}
.hero-chip-group .v-slide-group__content {
  justify-content: center;
}

p, b, h4 {
  color: #205089;
}
</style>
