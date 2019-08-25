<template>
  <v-card class="mx-1 mt-5 filters">
    <v-layout wrap>
      <v-flex xs12 sm6 md12>
        <v-card-text width="1">
          <h2 class="title mb-2 xs-mb-0">{{ locale.grades }}</h2>

          <v-chip-group column multiple :value="getFilters('grade')">
            <v-chip v-for="grade in grades" :key="grade" outlined small color="primary" :value="grade" @click="toggleFilter('grade', grade)">{{ grade }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md12>
        <v-card-text>
          <h2 class="title mb-2">{{ locale.extendedCare }}</h2>

          <!-- <v-chip-group v-if="isEnglish" column multiple>
            <v-chip v-for="careOption in careOptions" :key="careOption" outlined small color="primary" @click="toggleFilter('careNeeds', careOption)">{{ careOption }}</v-chip>
          </v-chip-group> -->

          <v-chip-group column multiple :value="getFilters('careNeeds')">
            <v-chip outlined small color="primary" value="Before Care" @click="toggleFilter('careNeeds', 'Before Care')">{{ locale.beforeCare }}</v-chip>
            <v-chip outlined small color="primary" value="After Care" @click="toggleFilter('careNeeds', 'After Care')">{{ locale.afterCare }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md12>
        <v-card-text>
          <h2 class="title mb-2">{{ locale.publicTransportation }}</h2>

          <v-chip-group column multiple :value="getFilters('publicTrans')">
            <v-chip
              v-for="transportOption in transportOptions"
              :key="transportOption"
              :value="transportOption"
              outlined
              small
              color="primary"
              @click="toggleFilter('publicTrans', transportOption)"
            >
              {{ transportOption }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md12>
        <v-card-text>
          <h2 class="title mb-2">{{ locale.neighborhood }}</h2>

          <v-chip-group column :value="getFilters('neighborhood')[0]">
            <v-chip
              v-for="neighborhood in neighborhoods"
              :key="neighborhood"
              :value="neighborhood"
              outlined
              small
              color="primary"
              @click="toggleFilter('neighborhood', neighborhood)"
            >
              {{ neighborhood }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-btn class="ml-2 mb-2" text color="primary" @click="clearFilters">Clear Filters</v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  data: () => ({
    grades: ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    careOptions: ['Before Care', 'After Care'],
    transportOptions: ['LA', 'LC', '70', '71', '71M', '72', '72M', '74', '76', '376', '681', 'BART'],
    neighborhoods: ['San Pablo', 'Richmond'],
  }),
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
      }
      else {
        this.addFilter(type, value);
      }
    },
    addFilter(type, value) {
      this.$store.dispatch("addFilter", {type, value});
    },
    removeFilter(type, value) {
      this.$store.dispatch("removeFilter", {type, value});
    },
    clearFilters() {
      this.$store.dispatch("clearFilters");
    }
  }
};
</script>


<style scoped>

@media ( max-width: 599px ) {
  h2.title.mb-2 {
    color: #222;
    font-size: .875rem !important;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0 !important;
    margin-top: 0;
  }
  .filters .v-card__text {
    padding-bottom: 0;
    padding-top: 15px;
  }
  .filters .v-card__text:last-of-type {
    padding-bottom: 10px;
  }
}
</style>
