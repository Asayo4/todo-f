import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState],
  state: { 
    todo: "",
    id: ""
  },
  mutations: {
    changeTodo(state, payload) {
      state.item.todo = payload;
    }
  },
  actions: {
    changeTodo({ commit }, { todo }) {
      commit("changeTodo", todo);
    }
  },
  modules: {
    data: {
      vm:[]
    }
  }
});