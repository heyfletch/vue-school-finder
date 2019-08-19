<template>
  <v-item-group>
    <v-container class="pa-1 pb-0">
      <v-layout wrap>
        <v-flex v-if="school">
          <v-card class="mx-1 mt-11">
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
                  <div class="body-2 d-block">Principal: {{ school.acf.schoolPrincipal }}</div>
                </div>
              </v-card-title>
            </v-img>

            <v-card-text class="pb-0">
              <h5 class="text--primary">Mission</h5>
              <p class="mb-2">{{ school.acf.schoolIntro }}</p>
              <div>
                <span class="text--primary">Grades Served: </span>
                <span>{{ school.acf.schoolGrades.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">Uniforms: </span>
                <span v-if="school.acf.schoolUniforms">Yes</span>
                <span v-else>No</span>
              </div>
              <div>
                <span class="text--primary">Public Transportation Options: </span>
                <span>{{ school.acf.schoolTransportation.join(', ') }}</span>
              </div>
              <div>
                <span class="text--primary">Enrollment Size: </span>
                <span>{{ school.acf.schoolEnrollment }}</span>
              </div>
              <div>
                <span class="text--primary">Before Care: </span>
                <span v-if="school.acf.schoolBeforeHours">{{ school.acf.schoolBeforeHours }}</span>
                <span v-else>None</span>
              </div>
              <div>
                <span class="text--primary">After Care: </span>
                <span v-if="school.acf.schoolAfterHours">{{ school.acf.schoolAfterHours }}</span>
                <span v-else>None</span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn :href="school.link" text color="primary">Learn More</v-btn>
              <v-btn href="https://enrollwcc.org/apply/" text color="primary">Apply Now</v-btn>
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
    }
  }
}
</script>

<style scoped>
.v-application .subtitle-1 {
  line-height: 1.4rem;
}
</style>
