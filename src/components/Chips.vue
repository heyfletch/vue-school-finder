<template>
  <v-card class="mx-1 mt-12">
    <v-container class="pa-2" fluid grid-list-md>
      <v-layout column>
        <v-flex v-for="(item, i) in items" :key="i">
          <v-card :color="item.color">
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                ></v-list-item-title>

                <v-list-item-subtitle
                  v-text="item.artist"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#efefef",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Summit School K2",
        artist: "Lorem Ipsum Dolor ..."
      },
      {
        color: "#efefef",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "AMPS - General School",
        artist: "AMPS is leading the way in educational leadership"
      }
    ]
  })
};
</script>
