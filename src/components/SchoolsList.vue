<template>
  <v-card class="mx-1 mt-4 py-1 schools" ref="schools">
    <v-item-group v-if="schools.length > 0">
      <v-container class="pa-1 pb-0">
        <v-layout wrap>
          <v-flex v-for="school in schools" :key="school.id">
            <v-item v-slot:default="{ active, toggle }">
              <v-card :dark="selected(school)" :color="selected(school) ? 'primary' : ''" @click="selectSchool(school)" class="mb-1">
                <v-list-item>
                  <v-list-item-content class="pb-0">
                    <v-layout pb-3 pl-1>
                      <v-list-item-avatar class="mr-5" size="90">
                        <v-img
                          :src="school.featuredImage.sourceUrl"
                          gradient="to bottom, rgba(35, 82, 144, 0.25), rgba(35, 82, 144, 0.25)"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-layout class="mt-2" column>
                        <h4 class="title mb-0" v-html="school.title"></h4>
                        <v-card-text class="d-none d-sm-block body-2 px-0 pt-0 pb-2">
                          <div>{{ school.acf.schoolAddress }}</div>
                          <div>{{ school.acf.schoolCity }}, CA {{ school.acf.schoolZip }}</div>
                        </v-card-text>

                        <div class="school-data pb-3">
                          <span>{{ locale.grades }} {{ school.acf.schoolGrades[0] }}-{{ school.acf.schoolGrades[school.acf.schoolGrades.length - 1] }}, </span>

                          <span v-if="school.acf.schoolUniforms">{{ locale.uniforms }}</span>
                          <span v-else>{{ locale.no }} {{ locale.uniforms }}</span>

                          <span
                            v-if="school.acf.schoolBeforeHours && school.acf.schoolAfterHours"
                          >, {{ locale.beforeAfterCare }}</span>
                          <span v-else-if="school.acf.schoolBeforeHours">, {{ locale.beforeCare }}</span>
                          <span v-else-if="school.acf.schoolAfterHours">, {{ locale.afterCare }}</span>
                        </div>
                      </v-layout>
                    </v-layout>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
    <v-card v-else class="my-3 mx-3">
      <h4 class="title px-3 py-3">
        {{ locale.noSchoolsFound }}
      </h4>
    </v-card>
    <transition name="fade">
      <div class="scroll-down" v-if="schools.length > 5 && scrollIndicator">
        <span class="d-none d-md-block">
          <v-icon large>mdi-chevron-down</v-icon>
          <!-- {{ locale.moreSchoolsHere }} -->
        </span>
      </div>
    </transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      scrollIndicator: true
    }
  },
  computed: {
    schools() {
      return this.$store.state.filteredSchools;
    },
    locale() {
      return this.$store.state.locale;
    }
  },
  watch: {
    schools() {
      this.$refs.schools.$el.scrollBy(0, -5000);
      this.scrollIndicator = true;
    }
  },
  methods: {
    selectSchool(school) {
      this.$store.commit("selectSchool", school);
      document.getElementById("hero-section").style.display = "none";
    },
    selected(school) {
      return this.$store.state.selectedSchool === school;
    }
  },
  mounted() {
    this.$refs.schools.$el.addEventListener("scroll", () => {
      this.scrollIndicator = false;
    })
  }
}
</script>

<style scoped>
.v-list-item__avatar {
  align-self: baseline;
}
.v-list-item__avatar .v-responsive.v-image {
  border-radius: 4px;
}
.v-application .title {
  font-size: 1rem !important;
  line-height: 1.4rem;
}
.school-data {
  line-height: 1.3;
}
.schools {
  height: 680px;
  overflow-y: auto;
  position: relative;
}
.schools h4 {
  margin: 0;
}
.scroll-down {
  position: sticky;
  z-index: 300;
  font-size: 20px;
  text-align: center;
  height: 100px;
  bottom: -4px;
  left: 0;
  right: 0;
  background-image: linear-gradient(#ffffff00, #ffffffff);
}
.scroll-down span {
  position: absolute;
  bottom: -3px;
  left: 0px;
  right: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media ( max-width: 959px) {
  .schools {
    height: auto;
    overflow-y: initial;
  }
}

@media ( max-width: 599px ) {
  .schools .v-list-item {
    padding: 5px 8px;
  }
  .schools .v-list-item__content {
    padding-top: 2px !important;
  }
  .schools .layout {
    padding-bottom: 2px !important;
    padding-right: 2px !important;
  }
  .schools .v-avatar.v-list-item__avatar {
    margin-right: 15px !important;
  }
  .schools h4 {
    padding-bottom: 5px;
  }
}
</style>
