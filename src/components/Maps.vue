<template>
  <v-card class="mx-2 mt-5">
    <v-img :src="src">
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    src:
      "staticmap.png"
  })
};
</script>
