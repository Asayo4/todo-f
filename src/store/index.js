import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState],
  state: {
    todos: [
      { id:"", todo:"" }
    ]
  },
  mutations: {
    changeTodo(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    changeTodo({ commit }, todos) {
      commit("changeTodo", todos);
    }
  },
  modules: {
  }
});