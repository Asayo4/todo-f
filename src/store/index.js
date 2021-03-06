import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todo: "",
  },
  mutations: {
    todo(state, payload) {
      state.todo = payload;
    },
  },
  actions: {
  },
  modules: {
  }
});
