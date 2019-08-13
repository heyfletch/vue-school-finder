<template>
  <v-card class="mx-1 mt-12">
    <v-card-text width="1">
      <h2 class="title mb-2">Grades</h2>

      <v-chip-group column multiple>
        <v-chip v-for="grade in grades" :key="grade" outlined small color="primary">{{ grade }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Extended Care Needs</h2>

      <v-chip-group column multiple>
        <v-chip v-for="careOption in careOptions" :key="careOption" outlined small color="primary">{{ careOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Public Transportation</h2>

      <v-chip-group column multiple>
        <v-chip v-for="transportOption in transportOptions" :key="transportOption" outlined small color="primary">{{ transportOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Neighborhood</h2>

      <v-chip-group column multiple>
        <v-chip v-for="neighborhood in neighborhoods" :key="neighborhood" outlined small color="primary">{{ neighborhood }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    grades: ['TK', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    careOptions: ['Before Care', 'After Care'],
    transportOptions: ['LA', 'LC', '70', '71', '71M', '72', '72M', '74', '76', '376', '681', 'BART'],
    neighborhoods: ['San Pablo', 'Richmond']
  })
};
</script>
