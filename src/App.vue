<template>
  <v-app>
    <v-content>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm4 md5 lg3>
            <Filters />
          </v-flex>
          <v-flex xs12 sm8 md7 lg5>
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
            <Schools />
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
import Schools from "./components/Schools";

export default {
  name: "App",
  components: {
    Filters,
    SchoolsList,
    Profile,
    Maps,
    Schools
  },
  data: () => ({
    //
  })
};
</script>
