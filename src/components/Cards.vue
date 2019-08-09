<template>
  <v-card class="mx-1 mt-12">
    <v-container class="pa-2" fluid grid-list-md>
      <v-layout column>
        <v-flex v-for="(item, i) in items" :key="i">
          <v-card>
            <v-list-item one-line>
              <v-list-item-content class="align-self-start pb-0">
                <v-list-item-title
                  class="headline mt-5"
                  v-text="item.title"
                ></v-list-item-title>

                <v-layout py-1 px-1>
                  <v-card-text
                    class="px-0 py-3"
                    v-text="item.description"
                  >
                  </v-card-text>

                  <v-list-item-avatar
                    tile
                    size="125"
                    color="primary">
                    <v-img :src="item.src"></v-img>
                  </v-list-item-avatar>
                </v-layout>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Learn More</v-btn>
              <v-btn text>Apply Now</v-btn>
            </v-card-actions>

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
        src: "https://enrollwcc.org/wp-content/uploads/2018/08/summit-public-school-tamalpais-300x169.jpg",
        title: "Summit Public School Tamalpais",
        description: "Summit Public Schools’ mission is to prepare a diverse student population for success in college and to be thoughtful, contributing members of society.",
      },
      {
        src: "https://enrollwcc.org/wp-content/uploads/2018/08/summit-public-school-k2-300x169.jpg",
        title: "Summit Public School K2",
        description: "Preparing a diverse student population for success in college and to be thoughtful, contributing members of society.",
      }
    ]
  })
};
</script>
