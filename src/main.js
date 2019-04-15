// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../src/assets/css/reset.css';
import './assets/iconfont/iconfont.css'
import store from './vuex/index';
import "element-ui/lib/theme-chalk/index.css";
import VueSource from 'vue-resource'
import Swiper from 'swiper'
import '../node_modules/jquery/src/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
Vue.use(VueSource);
Vue.use(new Swiper());



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
