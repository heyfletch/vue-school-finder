import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"

import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCWsxoy4A5zoSYIR78hWjBqf4lV5-Vl2LI" // TODO may use AIzaSyCjrrfSWNTGE6CYQuWnPx7BCGsFsKxXlXE
  }
});

Vue.component("GmapMap", VueGoogleMaps.Map);
Vue.component("GmapMarker", VueGoogleMaps.Marker);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
