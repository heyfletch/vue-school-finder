<template>
  <v-item-group>
    <v-container class="pa-1 pb-0">
      <v-layout wrap>
        <v-flex v-if="school">
          <v-card class="mx-1 mt-lg-3 mt-sm-0">
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
                  <div class="body-2 d-block">{{ locale.principal }}: {{ school.acf.schoolPrincipal }}</div>
                </div>
              </v-card-title>
            </v-img>

            <v-card-text class="pb-0">
              <h5 class="text--primary">{{ locale.mission }}</h5>
              <p class="mb-2">{{ school.acf.schoolIntro }}</p>
              <div>
                <span class="text--primary">{{ locale.gradeOffered }}: </span>
                <span>{{ school.acf.schoolGrades.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">{{ locale.uniforms }}: </span>
                <span v-if="school.acf.schoolUniforms">{{ locale.yes }}</span>
                <span v-else>No</span>
              </div>
              <div>
                <span class="text--primary">{{ locale.publicTransportation }}: </span>
                <span>{{ school.acf.schoolTransportation.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">{{ locale.enrollmentSize }}: </span>
                <span>{{ school.acf.schoolEnrollment }}</span>
              </div>
              <div>
                <span class="text--primary">{{ locale.beforeCare }}: </span>
                <span v-if="school.acf.schoolBeforeHours">{{ school.acf.schoolBeforeHours }}</span>
                <span v-else>{{ locale.none }}</span>
              </div>
              <div>
                <span class="text--primary">{{ locale.afterCare }}: </span>
                <span v-if="school.acf.schoolAfterHours">{{ school.acf.schoolAfterHours }}</span>
                <span v-else>{{ locale.none }}</span>
              </div>
            </v-card-text>

            <v-card-actions class="ma-2 pt-2 pb-4">
              <v-btn :href="locale.applyLink" @click="gaHandler('Apply', school.title)" flat depressed color="primary">{{ locale.applyNow }}</v-btn>
              <v-btn :href="school.link" @click="gaHandler('Learn More', school.title)" text color="primary">{{ locale.learnMore }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  computed: {
    school() {
      return this.$store.state.selectedSchool;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  methods: {
    gaHandler(btn, title) {
      this.$store.dispatch("ga", {action: btn, school: title})
    }
  }
}
</script>

<style scoped>
.v-application .subtitle-1 {
  line-height: 1.4rem;
}
p {
  color: #235290;
}
</style>
