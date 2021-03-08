import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState],
  state: {
    content: "",
    id: ""
  },
  mutations: {
    changeTodo(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    changeTodo({ commit }, content) {
      commit("changeTodo", content);
    }
  },
  modules: {
  }
});