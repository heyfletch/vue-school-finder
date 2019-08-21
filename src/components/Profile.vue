<template>
  <v-item-group>
    <v-container class="pa-1 pb-0">
      <v-layout wrap>
        <v-flex v-if="school">
          <v-card class="mx-1 mt-4">
            <v-img
              class="white--text primary"
              height="200px"
              :src="school.featuredImage.sourceUrl"
              gradient="to bottom, rgba(35, 82, 144, 0.9), rgba(35, 82, 144, 0.3)"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
              <v-card-title class="align-start">
                <div>
                  <div class="subtitle-1 d-block" v-html="school.title"></div>
                  <div class="body-2 d-block">{{ principalLabel }}: {{ school.acf.schoolPrincipal }}</div>
                </div>
              </v-card-title>
            </v-img>

            <v-card-text class="pb-0">
              <h5 class="text--primary">{{ missionLabel }}</h5>
              <p class="mb-2">{{ school.acf.schoolIntro }}</p>
              <div>
                <span class="text--primary">{{ gradeOfferedLabel }}: </span>
                <span>{{ school.acf.schoolGrades.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">{{ uniformLabel }}: </span>
                <span v-if="school.acf.schoolUniforms">{{ yes }}</span>
                <span v-else>No</span>
              </div>
              <div>
                <span class="text--primary">{{ transportLabel }}: </span>
                <span>{{ school.acf.schoolTransportation.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">{{ enrollmentLabel }}: </span>
                <span>{{ school.acf.schoolEnrollment }}</span>
              </div>
              <div>
                <span class="text--primary">{{ beforeLabel }}: </span>
                <span v-if="school.acf.schoolBeforeHours">{{ school.acf.schoolBeforeHours }}</span>
                <span v-else>{{ none }}</span>
              </div>
              <div>
                <span class="text--primary">{{ afterLabel }}: </span>
                <span v-if="school.acf.schoolAfterHours">{{ school.acf.schoolAfterHours }}</span>
                <span v-else>{{ none }}</span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn :href="school.link" text color="primary">{{ learnMore }}</v-btn>
              <v-btn href="https://enrollwcc.org/apply/" text color="primary">{{ applyNow }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
const isEnglish = document.querySelector("html").lang.slice(0,2).toUpperCase() === "EN" ? true : false;

export default {
  data: () => ({
    // translations
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
  computed: {
    school() {
      return this.$store.state.selectedSchool;
    }
  }
}
</script>

<style scoped>
.v-application .subtitle-1 {
  line-height: 1.4rem;
}
</style>
