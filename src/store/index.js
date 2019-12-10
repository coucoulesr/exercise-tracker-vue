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
    },
    editExerciseById(state, payload) {
      let exercise = state.exercises.find(ex => ex._id == payload.id);
      exercise.duration = payload.exerciseObject.duration;
      exercise.date = payload.exerciseObject.date;
      exercise.description = payload.exerciseObject.description;
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
    },
    addExercise({ commit }, exerciseObject) {
      axios
        .post("http://localhost:5000/exercises/", exerciseObject)
        .then(res => {
          commit("addExercise", res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteExerciseById({ commit }, id) {
      axios
        .delete("http://localhost:5000/exercises/" + id)
        .then(res => {
          if (res.status == 204) {
            commit("removeExerciseById", id);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    editExercise({ commit }, {id, exerciseObject}) {
      console.log(exerciseObject)
      axios
        .put("http://localhost:5000/exercises/" + id, exerciseObject)
        .then(res => {
          console.log(res)
          commit("editExerciseById", { id: res.data._id, exerciseObject: res.data });
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  modules: {}
});
