<template>
  <v-card>
    <v-card-text>
      <h2>Schools</h2>

      <v-chip-group column multiple>
        <v-chip v-for="school in schools.nodes" :key="school.id">{{ school.title }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    schools: gql`
      query getAllSchools {
        schools(where: {language: EN}) {
          nodes {
            id
            title
            uri
            acfSchoolProfiles {
              schoolAddress
              schoolPhoneNumber
              schoolGrades
              schoolHours
              schoolZip
            }
            language {
              id
              name
            }
          }
        }
      }
    `
  }
};
</script>