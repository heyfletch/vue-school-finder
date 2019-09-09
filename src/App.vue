<template>
  <v-app>
    <v-content>
      <v-container grid-list-md ref="container">
        <v-layout wrap v-if="isMobile && selectedSchool">
          <v-flex xs12>
            <v-chip @click="unselectSchool" class="text-uppercase font-weight-medium pl-1 pr-5 ml-2">
              <v-icon large>mdi-chevron-left</v-icon> {{ locale.goBack }}
            </v-chip>
          </v-flex>
          <v-flex xs12>
            <Profile />
          </v-flex>
          <v-flex xs12>
            <Maps />
          </v-flex>
          <v-flex xs12>
            <v-chip @click="unselectSchool" class="text-uppercase font-weight-medium pl-1 pr-5 ml-2 mt-4">
              <v-icon large>mdi-chevron-left</v-icon> {{ locale.goBack }}
            </v-chip>
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
      if (this.isMobile) {
        const rect = this.$refs.container.getClientRects()[0];

        // eslint-disable-next-line no-console
        console.log(rect, window.pageYOffset);
        
        window.scrollTo(0, rect.top + window.pageYOffset);


        const el = document.getElementById("hero-section");
        if (el) {
          if (newV) {
            el.style.display = "none";
          }
          else {
            el.style.display = "block";
          }
        }
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

<style>
.v-application--wrap {
  min-height: auto;
}
</style>
