<template>
  <v-card class="mx-1 mt-12">
    <v-card-text>
      <h2 class="title mb-2">Grades</h2>

      <v-chip-group column multiple>
        <v-chip v-for="grade in grades" :key="grade" filter outlined color="primary">{{ grade }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Extended Care Options</h2>

      <v-chip-group column multiple>
        <v-chip v-for="careOption in careOptions" :key="careOption" outlined color="primary">{{ careOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Public Transportation Options</h2>

      <v-chip-group column multiple>
        <v-chip v-for="transportOption in transportOptions" :key="transportOption" filter outlined color="primary">{{ transportOption }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">Locations</h2>

      <v-chip-group column multiple>
        <v-chip v-for="neighborhood in neighborhoods" :key="neighborhood" filter outlined color="primary">{{ neighborhood }}</v-chip>
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
    neighborhoods: ['North Richmond', 'South Richmond', 'El Cerrito']
  })
};
</script>
