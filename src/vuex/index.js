import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store=new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [vuexLocal.plugin]
});


export default store;

