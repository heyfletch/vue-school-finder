<template>
  <v-card class="mx-1 mt-5">
    <v-card-text width="1">
      <h2 v-if="isEspanol" class="title mb-2">Grados</h2>
      <h2 v-else class="title mb-2">Grades</h2>

      <v-chip-group column multiple>
        <v-chip v-for="grade in grades" :key="grade" outlined small color="primary" @click="toggleFilter('grade', grade)">{{ grade }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 v-if="isEspanol" class="title mb-2">Cuidado Extendido</h2>
      <h2 v-else class="title mb-2">Extended Care Needs</h2>

      <v-chip-group column multiple>
        <v-chip v-for="careOption in careOptions" :key="careOption" outlined small color="primary" @click="toggleFilter('careNeeds', careOption)">{{ careOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 v-if="isEspanol" class="title mb-2">Transporte Público</h2>
      <h2 v-else class="title mb-2">Public Transportation</h2>

      <v-chip-group column multiple>
        <v-chip v-for="transportOption in transportOptions" :key="transportOption" outlined small color="primary" @click="toggleFilter('publicTrans', transportOption)">{{ transportOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 v-if="isEspanol" class="title mb-2">Vecindario</h2>
      <h2 v-else class="title mb-2">Neighborhood</h2>

      <v-chip-group column multiple>
        <v-chip v-for="neighborhood in neighborhoods" :key="neighborhood" outlined small color="primary" @click="toggleFilter('neighborhood', neighborhood)">{{ neighborhood }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
// Grab the 2 letter ISO code of the current page
const LANG = document.querySelector("html").lang.slice(0,2).toUpperCase() === "ES" ? true : false;

export default {
  data: () => ({
    grades: ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    careOptions: ['Before Care', 'After Care'],
    transportOptions: ['LA', 'LC', '70', '71', '71M', '72', '72M', '74', '76', '376', '681', 'BART'],
    neighborhoods: ['San Pablo', 'Richmond'],
    isEspanol: LANG
  }),
  methods: {
    toggleFilter(type, value) {
      if (this.$store.getters.hasFilter(type, value)) {
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
    }
  }
};
</script>
