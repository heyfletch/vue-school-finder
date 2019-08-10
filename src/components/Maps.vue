<template>
  <v-card class="mx-1 mt-4">
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
      "https://maps.googleapis.com/maps/api/staticmap?center=4123+Lakeside+Drive++Richmond,+CA+94806&zoom=13&scale=2&size=600x300&maptype=roadmap&key=AIzaSyCjrrfSWNTGE6CYQuWnPx7BCGsFsKxXlXE&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x25548e%7Clabel:%7C3040+Hilltop+Mall+Road+Richmond+CA+94806&markers=size:small%7Ccolor:0xe8ad08%7Clabel:%7C4123+Lakeside+Drive++Richmond,+CA+94806&markers=size:small%7Ccolor:0xe8ad08%7Clabel:0%7C1121+Allview+Avenue++El+Sobrante,+CA+94803&markers=size:small%7Ccolor:0xe8ad08%7Clabel:0%7C3170+Hilltop+Mall+Road++Richmond,+CA+94806&markers=size:small%7Ccolor:0xe8ad08%7Clabel:1%7C3020+Hilltop+Mall+Road++San+Pablo,+CA+94806"
  })
};
</script>
