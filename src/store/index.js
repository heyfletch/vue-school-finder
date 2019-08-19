
import Vue from 'vue';
import Vuex from 'vuex';

import getSchools from "../graphql/getSchools"

// Grab the 2 letter ISO code of the current page
const LANG = document.querySelector("html").lang.slice(0,2).toUpperCase() === "ES" ? "ES" : "EN";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schools: [],
    filteredSchools: [],
    filters: [],
    selectedSchool: undefined
  },
  getters: {
    getFilter(state) {
      return (type, value) => {
        return state.filters.findIndex(filter => filter.type === type && filter.value === value);
      }
    },
    hasFilter(_, getters) {
      return (type, value) => getters.getFilter(type, value) > -1;
    }
  },
  mutations: {
    setSchools(state, schools) {
      state.schools = schools;
      state.filteredSchools = schools;
    },
    setFilteredSchools(state, schools) {
      state.filteredSchools = schools;
    },
    addFilter(state, filter) {
      const filters = state.filters.slice();
      filters.push(filter);
      state.filters = filters;
    },
    removeFilter(state, index) {
      const filters = state.filters.slice();
      filters.splice(index, 1);
      state.filters = filters;
    },
    selectSchool(state, school) {
      state.selectedSchool = school;
    },
  },
  actions: {
    async getSchools({commit}) {
      const storage = window.localStorage;
      const cached = JSON.parse(storage.getItem("schools"));

      let schools
      if (!cached || cached.expires < Date.now() || cached.language !== LANG) {
        const resp = await (await fetch("https://enrollwcc.kinsta.cloud/graphql", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ query: getSchools, variables: { language: LANG } })
        })).json()

        schools = resp.data.schools.nodes;

        const obj = {
          schools,
          expires: Date.now() + 1000 * 60 * 60 * 24, // Expires in a day
          language: LANG // Let's store this in case it changes.
        }

        storage.setItem("schools", JSON.stringify(obj));
      }
      else {
        schools = cached.schools;
      }

      commit("setSchools", schools);
    },
    addFilter({commit, dispatch}, filter) {
      commit("addFilter", filter);
      dispatch("applyFilters");
    },
    removeFilter({commit, dispatch, getters}, filter) {
      const ind = getters.getFilter(filter.type, filter.value)
      commit("removeFilter", ind);
      dispatch("applyFilters");
    },
    applyFilters({commit, state}) {
      const schools = state.schools.slice();
      const filters = state.filters;

      if (filters.length === 0) {
        commit("setFilteredSchools", schools);
        return;
      }

      const filtered = schools.filter((school) => {
        for (let filter of filters) {
          switch (filter.type) {
            case "grade":
              if (!school.acf.schoolGrades.includes(filter.value)) {
                return false;
              }
              break;
            case "careNeeds":
              if (
                (filter.value === "Before Care" && !school.acf.schoolBeforeHours) ||
                (filter.value === "After Care" && !school.acf.schoolAfterHours)
              ) {
                return false;
              }
              break;
            case "publicTrans":
              if (!school.acf.schoolTransportation.includes(filter.value)) {
                return false;
              }
              break;
            case "neighborhood":
              if (school.acf.schoolNeighborhood !== filter.value) {
                return false;
              }
              break;
            default:
              break;
          }
        }
        return true;
      })

      commit("setFilteredSchools", filtered);
    }
  }
});
