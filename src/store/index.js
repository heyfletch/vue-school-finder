
import Vue from 'vue';
import Vuex from 'vuex';

import locales from '../locales';

import getSchools from "../graphql/getSchools"

// Grab the 2 letter ISO code of the browser
const lang = document.documentElement.attributes["lang"].value;
const LANG = lang.slice(0, 2).toUpperCase() === "ES" ? "ES" : "EN";

const mapFiltersToGa = {
  grade: "Grade",
  careNeeds: "Care",
  publicTrans: "Transport",
  neighborhood: "Location"
}

Vue.use(Vuex);

const QUERY_VERSION = 4;

export default new Vuex.Store({
  state: {
    schools: [],
    filteredSchools: [],
    filters: [],
    neighborhoodFilters: [],
    transportFilters: [],
    selectedSchool: undefined,
    language: LANG,
    locale: locales[LANG]
  },
  getters: {
    getFilter(state) {
      return (type, value) => {
        return state.filters.findIndex(filter => filter.type === type && filter.value === value);
      }
    },
    hasFilter(_, getters) {
      return (type, value) => getters.getFilter(type, value) > -1;
    },
    getFiltersByType(state) {
      return (type) => state.filters.filter(filter => filter.type === type);
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
    setNeighborhoodFilters(state, neighborhoods) {
      state.neighborhoodFilters = neighborhoods;
    },
    setTransportOptions(state, options) {
      state.transportFilters = options;
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
    clearFilters(state) {
      state.filters = [];
    },
    removeNeighborhoodFilters(state) {
      let filters = state.filters.slice();
      filters = filters.filter(v => v.type !== "neighborhood");
      state.filters = filters;
    },
    selectSchool(state, school) {
      state.selectedSchool = school;
    },
    unselectSchool(state) {
      state.selectedSchool = undefined;
    }
  },
  actions: {
    selectSchool({commit, dispatch}, { school, fromMap }) {
      commit("selectSchool", school);
      dispatch("ga", {
        category: "Schools List",
        action: fromMap ? "Map Click" : "Direct Click",
        label: school.title
      })
    },
    async getSchools({commit, dispatch, state}) {
      const storage = window.localStorage;
      const cached = JSON.parse(storage.getItem("schools"));

      let schools
      if (!cached || cached.expires < Date.now() || cached.language !== state.language || !cached.queryVersion || cached.queryVersion !== QUERY_VERSION) {
        const resp = await (await fetch("https://enrollwcc.kinsta.cloud/graphql", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ query: getSchools, variables: { language: state.language } })
        })).json()

        schools = resp.data.schools.nodes;

        const obj = {
          schools,
          expires: Date.now() + 1000 * 60 * 60 * 24, // Expires in a day
          queryVersion: QUERY_VERSION, // Changing this force-updates data if we change the graphql query
          language: state.language // Let's store this in case it changes
        }

        storage.setItem("schools", JSON.stringify(obj));
      }
      else {
        schools = cached.schools;
      }

      commit("setSchools", schools);
      dispatch("generateFilters");
    },
    generateFilters({commit, state}) {
      const schools = state.schools;

      let neighborhoods = schools.map(sch => sch.acf.schoolNeighborhood);
      neighborhoods = neighborhoods.filter((val, ind, arr) => arr.indexOf(val) === ind);
      commit("setNeighborhoodFilters", neighborhoods);

      let transportOptions = schools.reduce((acc, cur) => acc.concat(...cur.acf.schoolTransportation), []);
      transportOptions = transportOptions.filter((val, ind, arr) => arr.indexOf(val) === ind);
      transportOptions.sort();
      commit("setTransportOptions", transportOptions);
    },
    clearFilters({commit, dispatch}) {
      commit("clearFilters");
      dispatch("applyFilters");
    },
    addFilter({commit, dispatch}, filter) {
      if (filter.type === "neighborhood") {
        commit("removeNeighborhoodFilters");
      }
      commit("addFilter", filter);
      dispatch("applyFilters");
      dispatch("ga", {
        category: "Filter",
        label: filter.value,
        action: mapFiltersToGa[filter.type]
      })
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
    },
    ga(_, payload) {
      try {
        // eslint-disable-next-line no-undef
        gtag("event", payload.action, {
          event_category: payload.category,
          event_label: payload.label,
          transport: "beacon"
        });
      }
      catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        // No gtag detected, moving on.
      }
    }
  }
});
