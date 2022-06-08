import Vue from 'vue';
import App from './App.vue';

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMagnifyingGlass);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* /import the fontawesome */

Vue.config.productionTip = false;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
