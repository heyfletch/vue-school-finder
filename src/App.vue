<template>
  <v-app>
    <v-content>
      <v-container grid-list-md ref="container">
        <v-layout wrap v-if="isMobile && selectedSchool">
          <v-flex xs12>
            <v-btn @click="unselectSchool" text class="pl-0">
              <v-icon large>mdi-chevron-left</v-icon> {{ locale.goBack }}
            </v-btn>
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
          <v-flex d-lg-block lg4>
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
        const rect = this.$refs.container.getBoundingClientRect();
        window.scrollBy(0, rect.top);
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
