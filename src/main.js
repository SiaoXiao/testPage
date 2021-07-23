import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueCookies from 'vue-cookies';
import SignCanvas from 'sign-canvas';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.prototype.$Cookies = VueCookies;

Vue.use(SignCanvas);
Vue.use(VueCookies);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
