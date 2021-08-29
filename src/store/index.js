import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    destination: {
      cn_name: '大运', // 开往方向的中文站名
      en_name: 'Universiade', // 开往方向的英文站名
    },
    lineInfo: {
      start_time: '06:00', // 首班时间
      end_time:'23:30' // 末班时间
    }

  },
  mutations: {
    setDestination(state, obj){
      state.destination = obj
    },
    setLineInfo(state, obj) {
      state.lineInfo = obj
    }
  },
  actions: {
  },
  modules: {
  },
});
