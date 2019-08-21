<template>
  <v-card class="mx-1 mt-5 filters">
    <v-card-text width="1">
      <h2 class="title mb-2 xs-mb-0">{{ gradeLabel }}</h2>

      <v-chip-group column multiple>
        <v-chip v-for="grade in grades" :key="grade" outlined small color="primary" @click="toggleFilter('grade', grade)">{{ grade }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">{{ extendedLabel }}</h2>

      <v-chip-group v-if="isEnglish" column multiple>
        <v-chip v-for="careOption in careOptions" :key="careOption" outlined small color="primary" @click="toggleFilter('careNeeds', careOption)">{{ careOption }}</v-chip>
      </v-chip-group>

      <v-chip-group v-else column multiple>
        <v-chip outlined small color="primary" @click="toggleFilter('careNeeds', 'Before Care')">{{ beforeLabel }}</v-chip>
        <v-chip outlined small color="primary" @click="toggleFilter('careNeeds', 'After Care')">{{ afterLabel }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text class="d-none d-sm-block">
      <h2 class="title mb-2">{{ transportLabel }}</h2>

      <v-chip-group column multiple>
        <v-chip v-for="transportOption in transportOptions" :key="transportOption" outlined small color="primary" @click="toggleFilter('publicTrans', transportOption)">{{ transportOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">{{ neighborhoodLabel }}</h2>

      <v-chip-group column multiple>
        <v-chip v-for="neighborhood in neighborhoods" :key="neighborhood" outlined small color="primary" @click="toggleFilter('neighborhood', neighborhood)">{{ neighborhood }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
// English page true or false
const isEnglish = document.querySelector("html").lang.slice(0,2).toUpperCase() === "ES" ? false : true;

export default {
  data: () => ({
    grades: ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    careOptions: ['Before Care', 'After Care'],
    transportOptions: ['LA', 'LC', '70', '71', '71M', '72', '72M', '74', '76', '376', '681', 'BART'],
    neighborhoods: ['San Pablo', 'Richmond'],
    //translations
    gradeLabel: isEnglish ? "Grades" : "Grados",
    gradeOfferedLabel: isEnglish ? "Grades Offered" : "Grados Ofrecidos",
    uniformLabel: isEnglish ? "Uniforms" : "Uniformes",
    beforeLabel: isEnglish ? "Before Care" : "Cuidado Antes",
    afterLabel: isEnglish ? "After Care" : "Cuidado Después",
    bothLabel: isEnglish ? "Before &amp; After Care" : "Cuidado Antes y Después",
    principalLabel: isEnglish ? "Principal" : "Director/a",
    missionLabel: isEnglish ? "Mission" : "Misión",
    transportLabel: isEnglish ? "Public Transportation" : "Transporte Público",
    enrollmentLabel: isEnglish ? "Enrollment Size" : "Matricula Total",
    learnMore: isEnglish ? "Learn More" : "Aprende más",
    applyNow: isEnglish ? "Apply Now" : "Inscribirse",
    none: isEnglish ? "None" : "Nada",
    yes: isEnglish ? "Yes" : "Sí",
    extendedLabel: isEnglish ? "Extended Care" : "Cuidado Extendido",
    neighborhoodLabel: isEnglish ? "Neighborhood" : "Vecindario",
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