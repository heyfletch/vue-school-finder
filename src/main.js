import Vue from 'vue'
import App from './App.vue'
import Hero from './Hero.vue'
import vuetify from './plugins/vuetify';
import store from "./store"

import * as VueGoogleMaps from "vue2-google-maps"

import "raf/polyfill";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCjrrfSWNTGE6CYQuWnPx7BCGsFsKxXlXE" // TODO, need dev key?: AIzaSyCWsxoy4A5zoSYIR78hWjBqf4lV5-Vl2LI
  }
});

Vue.component("GmapMap", VueGoogleMaps.Map);
Vue.component("GmapMarker", VueGoogleMaps.Marker);

Vue.config.productionTip = false


window.mainApp = new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  vuetify,
  store,
  render: h => h(Hero)
}).$mount('#hero-app')
