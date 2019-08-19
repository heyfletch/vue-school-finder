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
export default {
  computed: {
    schools() {
      return this.$store.state.schools;
    }
  }
};
</script>
