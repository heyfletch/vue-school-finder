<template>
  <v-card class="mx-1 mt-12">
    <v-item-group>
      <v-container class="pa-1 pb-0">
        <v-layout wrap>
          <v-flex v-for="school in schools.nodes" :key="school.id">
            <v-item v-slot:default="{ active, toggle }">
              <v-card :color="active ? 'primary' : ''" @click="toggle" class="mb-1">
                <v-list-item>
                  <v-list-item-content class="align-self-start pb-0">
                    <v-layout pb-3 pl-1>
                      <v-list-item-avatar class="mr-5" size="80">
                        <v-img
                          :src="school.featuredImage.sourceUrl"
                          gradient="to bottom, rgba(35, 82, 144, 0.25), rgba(35, 82, 144, 0.25)"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-layout class="mt-2" column>
                        <h4 class="subtitle-1" v-html="school.title"></h4>
                        <v-card-text class="body-2 px-0 py-1">
                          <div>{{ school.acf.schoolAddress }}</div>
                          <div>{{ school.acf.schoolCity }}, CA {{ school.acf.schoolZip }}</div>
                        </v-card-text>

                        <div>
                          <span>Grades {{ school.acf.schoolGrades[0] }} - {{ school.acf.schoolGrades.pop() }}, </span>

                          <span class="text--primary">Uniforms: </span>
                          <span v-if="school.acf.schoolUniforms">Yes</span>
                          <span v-else>No</span>

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
import gql from "graphql-tag";

export default {
  apollo: {
    schools: gql`
      query getSchools {
        schools(where: { language: EN }) {
          nodes {
            id
            title
            link
            featuredImage {
              sourceUrl(size: MEDIUM_LARGE)
            }
            language {
              id
              name
            }
            acf {
              schoolAddress
              schoolAfterHours
              schoolBeforeHours
              schoolCity
              schoolEnrollment
              schoolNeighborhood
              schoolPrincipal
              schoolUniforms
              schoolUrl
              schoolZip
              schoolGrades
              schoolTransportation
              schoolHours
              schoolIntro
            }
          }
        }
      }
    ` //end GGL
  }
};
</script>

<style scoped>
.v-list-item__avatar {
  align-self: baseline;
}
.v-list-item__avatar .v-responsive.v-image {
  border-radius: 4px;
}
.v-application .subtitle-1 {
  line-height: 1.4rem;
}
</style>