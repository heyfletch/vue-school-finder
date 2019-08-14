<template>
  <v-card>
    <v-card-text>
      <h2>School Data - For Development Reference Only</h2>

      <div>
        {{ schools }}
      </div>
      <!-- <v-chip-group column multiple>
        <v-chip v-for="school in schools.nodes" :key="school.id">
          <span v-html="school.title"></span>
        </v-chip>
      </v-chip-group> -->
    </v-card-text>
  </v-card>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    schools: gql`
      query getSchools {
        schools(where: { language: ALL }, first: 100) {
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
    `// end gql
  }
};
</script>