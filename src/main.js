import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://www.thecocktaildb.com/api/json/v1/1/';


new Vue({
  render: h => h(App),
  router: Router,
  store,
}).$mount('#app')
