import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'


import vco from "v-click-outside"

import router from './router'
import store from '@/state/store'
import i18n from './i18n'
import 'vue2-datepicker/index.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import "@/assets/scss/app.scss";

// import './lib/datepicker/nepali.datepicker.v3.7.min.js';
import './lib/datepicker/nepali.datepicker.v3.7.min.css';


import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown, 'vac')


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(vco);
Vue.use(Vuelidate);

Vue.use(VueMask)


Vue.component('apexchart', VueApexCharts)
export const bus = new Vue();
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
