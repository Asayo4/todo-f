import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";


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
    async updateTodo(context) {
      let data = await axios.get("https://radiant-cove-15822.herokuapp.com/api/todo");
      context.commit("updateTodo", data);
    }
  },
  modules: {
  }
});
