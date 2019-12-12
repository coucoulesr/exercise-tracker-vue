import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ExerciseLog from "../views/ExerciseLog.vue";
import EditExercise from "../views/EditExercise.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/exercise-log",
    name: "exercise-log",
    component: ExerciseLog
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditExercise
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
