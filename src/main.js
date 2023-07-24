import Vue from 'vue'
import App from './App.vue'

import "@/Plugins";
import router from "@/Plugins/Router"
import LoadScript from 'vue-plugin-load-script';

import "@/Assets/Styles/_reset.scss";
import "@/Assets/Styles/_main.scss";

Vue.config.productionTip = false

Vue.use(LoadScript);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
