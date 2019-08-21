<template>
  <v-card class="mx-5 mt-5">
    <v-item-group>
      <v-container class="pa-1 pb-0">
        <v-layout wrap>
          <v-flex v-for="school in schools" :key="school.id">
            <v-item v-slot:default="{ active, toggle }">
              <v-card :dark="selected(school)" :color="selected(school) ? 'primary' : ''" @click="selectSchool(school)" class="mb-1">
                <v-list-item>
                  <v-list-item-content class="align-self-start pb-0">
                    <v-layout pb-3 pl-1>
                      <v-list-item-avatar class="mr-5" size="90">
                        <v-img
                          :src="school.featuredImage.sourceUrl"
                          gradient="to bottom, rgba(35, 82, 144, 0.25), rgba(35, 82, 144, 0.25)"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-layout class="mt-2" column>
                        <h4 class="title mb-0" v-html="school.title"></h4>
                        <v-card-text class="body-2 px-0 pt-0 pb-2">
                          <div>{{ school.acf.schoolAddress }}</div>
                          <div>{{ school.acf.schoolCity }}, CA {{ school.acf.schoolZip }} [{{ school.language.name }}]</div>
                        </v-card-text>

                        <div class="pb-3">
                          <span>Grades {{ school.acf.schoolGrades[0] }} - {{ school.acf.schoolGrades[school.acf.schoolGrades.length - 1] }}, </span>

                          <span v-if="school.acf.schoolUniforms">Uniforms</span>
                          <span v-else>No Uniforms</span>

                          <span
                            v-if="school.acf.schoolBeforeHours && school.acf.schoolAfterHours"
                          >, Before &amp; After Care</span>
                          <span v-else-if="school.acf.schoolBeforeHours">, Before Care</span>
                          <span v-else-if="school.acf.schoolAfterHours">, After Care</span>
                        </div>
                      </v-layout>
                    </v-layout>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  computed: {
    schools() {
      return this.$store.state.filteredSchools;
    }
  },
  methods: {
    selectSchool(school) {
      this.$store.commit("selectSchool", school);
    },
    selected(school) {
      return this.$store.state.selectedSchool === school;
    }
  }
}
</script>

<style scoped>
.v-list-item__avatar {
  align-self: baseline;
}
.v-list-item__avatar .v-responsive.v-image {
  border-radius: 4px;
}
.v-application .title {
  font-size: 1rem !important;
  line-height: 1.4rem;
}
</style>
