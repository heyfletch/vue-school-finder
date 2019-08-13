<template>
  <v-card class="mx-1 mt-12">
    <v-item-group>
      <v-container class="pa-2 pb-0" fluid grid-list-md>
        <v-layout wrap>
          <v-flex v-for="school in schools.nodes" :key="school.id">
            <v-item v-slot:default="{ active, toggle }">
              <v-card :color="active ? 'primary' : ''" @click="toggle" class="mb-2">
                <v-list-item one-line>
                  <v-list-item-content class="align-self-start pb-0">
                    <h4 v-html="school.title"></h4>

                    <v-layout pb-2 pl-1>
                      <v-card-text class="px-0 py-3" v-html="school.acfSchoolProfiles.schoolIntro"></v-card-text>

                      <v-list-item-avatar tile size="125" color="primary">
                        <v-img :src="school.featuredImage.sourceUrl"></v-img>
                      </v-list-item-avatar>
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
            uri
            featuredImage {
              sourceUrl(size: MEDIUM_LARGE)
            }
            language {
              id
              name
            }
            acfSchoolProfiles {
              schoolAbsenteeism
              schoolAddress
              schoolAfterHours
              schoolAsian
              schoolBeforeHours
              schoolBlack
              schoolCity
              schoolDisadvantaged
              schoolEnglish
              schoolEnrollment
              schoolGraduation
              schoolLatino
              schoolNeighborhood
              schoolOther
              schoolPhoneNumber
              schoolPrincipal
              schoolSbacEnglishExceeded
              schoolSbacEnglishMet
              schoolSbacEnglishNearlyMet
              schoolSbacEnglishNotMet
              schoolSbacMathExceeded
              schoolSbacMathMet
              schoolSbacMathNearlyMet
              schoolSbacMathNotMet
              schoolSpecialEducation
              schoolSuspension
              schoolUcCsu
              schoolUniforms
              schoolUrl
              schoolWhite
              schoolZip
              schoolGrades
              schoolTransportation
              schoolHours
              schoolIntro
              schoolCurriculum
              schoolCulture
              schoolPrograms
              schoolEnrollmentPriorities
            }
          }
        }
      }
    ` //end GGL
  }
};
</script>
