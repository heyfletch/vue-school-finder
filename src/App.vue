<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex sm12 md6 lg4>
            <Filters />
          </v-flex>
          <v-flex xs12 md6 lg4>
            <SchoolsList />
          </v-flex>
          <v-flex xs12 md12 lg4>
            <Profile />
            <Maps />
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <Acf />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Filters from "./components/Filters";
import SchoolsList from "./components/SchoolsList";
import Profile from "./components/Profile";
import Maps from "./components/Maps";
import Acf from "./components/Acf";

export default {
  name: "App",
  components: {
    Filters,
    SchoolsList,
    Profile,
    Maps,
    Acf
  },
  data: () => ({
    //
  })
};
</script>
