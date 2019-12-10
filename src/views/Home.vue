<template>
  <div class="mt-3">
    <div class="text-secondary text-center" v-if="user">
      Welcome back,
      <span class="font-weight-bold text-info">{{ user.displayName }}</span
      >!
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h1 class="display-4 text-primary mt-1 mb-2">Meeting Log</h1>
          <p class="lead mb-4">
            This simple app creates meetings, allows people to check in, and
            picks random users to award giveaways. It's a good example of a
            Single Page Application which includes connection to a database and
            routing. It's a practical way to learn
            <a href="https://vuejs.org/">Vue.js</a>
            with
            <a href="https://firebase.google.com">Firebase</a>.
          </p>

          <router-link
            class="btn btn-outline-primary mr-2"
            to="/register"
            v-if="!user"
            >Register</router-link
          >
          <router-link
            class="btn btn-outline-primary mr-2"
            to="/login"
            v-if="!user"
            >Log In</router-link
          >
          <router-link class="btn btn-primary" to="/meetings" v-if="user">
            <font-awesome-icon icon="random" /> Meetings
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "home",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>
