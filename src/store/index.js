import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    loggedIn: false,
    exercises: []
  },
  mutations: {
    setUser(state, username) {
      state.user = username;
    },
    auth(state, token) {
      state.token = token;
      state.loggedIn = true;
    },
    logout(state) {
      state.token = "";
      localStorage.clear("token");
      state.loggedIn = false;
    }
  },
  actions: {
    login({ commit }, loginData) {
      commit("auth", loginData.token);
      commit("setUser", loginData.username);
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  modules: {}
});
