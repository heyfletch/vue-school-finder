<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <v-layout wrap v-if="isMobile && selectedSchool">
          <v-flex xs12>
            <v-btn color="primary" @click="unselectSchool">{{ locale.goBack }}</v-btn>
          </v-flex>
          <v-flex xs12>
            <Profile />
          </v-flex>
          <v-flex xs12>
            <Maps />
          </v-flex>
        </v-layout>
        <v-layout wrap v-else>
          <v-flex xs12 md5 lg3>
            <Filters />
          </v-flex>
          <v-flex xs12 md7 lg5>
            <SchoolsList />
          </v-flex>
          <v-flex d-none d-lg-block lg4>
            <Profile />
            <Maps />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Filters from "./components/Filters";
import SchoolsList from "./components/SchoolsList";
import Profile from "./components/Profile";
import Maps from "./components/Maps";

export default {
  name: "App",
  components: {
    Filters,
    SchoolsList,
    Profile,
    Maps,
  },
  data() {
    return {
      breakpoint: 1264,
      isMobile: window.innerWidth < 1264
    }
  },
  computed: {
    selectedSchool() {
      return this.$store.state.selectedSchool;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  watch: {
    selectedSchool(newV) {
      if (this.isMobile && newV) {
        window.scrollTo(0, 0);
      }
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1264;
    },
    unselectSchool() {
      this.$store.commit("unselectSchool");
    }
  },
  created() {
    this.$store.dispatch("getSchools");
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>
