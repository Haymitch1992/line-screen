import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    destination: {
      cn_name: '',
      cn_name:''
    }
  },
  mutations: {
    setDestination(state, obj){
      state.destination = obj
    }
  },
  actions: {
  },
  modules: {
  },
});
