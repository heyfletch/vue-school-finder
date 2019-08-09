<template>
  <v-card class="mx-1 mt-12">
    <v-container class="pa-2" fluid grid-list-md>
      <v-layout column>
        <v-flex v-for="(item, i) in items" :key="i">
          <v-card :color="item.color">
            <v-list-item three-line>
              <v-list-item-avatar size="100%" tile>
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
        src: "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=-73.7638,42.6564&z=13&l=map&size=600,300&pt=-73.7638,42.6564,pmgrm~-73.7638,42.65,pmgrm~-73.76,42.64,pmgrm~-73.7638,42.64,pmgrm",
        title: "Summit School K2",
        artist: "Lorem Ipsum Dolor ..."
      }
    ]
  })
};
</script>
