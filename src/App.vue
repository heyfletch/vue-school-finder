<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex sm12 md6 lg4>
            <Filters />
          </v-flex>
          <v-flex xs12 md6 lg4>
            <Cards />
          </v-flex>
          <v-flex xs12 md12 lg4>
            <Profiles />
            <Maps />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import Profiles from "./components/Profiles";
import Maps from "./components/Maps";

export default {
  name: "App",
  components: {
    Filters,
    Cards,
    Profiles,
    Maps
  },
  data: () => ({
    //
  })
};
</script>
