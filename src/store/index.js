import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    },
    setExercises(state, exerciseArray) {
      state.exercises = exerciseArray;
    },
    addExercise(state, exerciseObject) {
      state.exercises.push(exerciseObject);
    },
    removeExerciseById(state, id) {
      state.exercises = state.exercises.filter(ex => ex._id != id);
    }
  },
  actions: {
    login(context, loginData) {
      context.commit("auth", loginData.token);
      context.commit("setUser", loginData.username);
      context.dispatch("populateExercises");
    },
    logout({ commit }) {
      commit("logout");
    },
    populateExercises({ commit }) {
      axios
        .get("http://localhost:5000/exercises/")
        .then(res => {
          commit("setExercises", res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  modules: {}
});
