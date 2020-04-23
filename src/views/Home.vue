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
          <h1 class="display-4 text-primary mt-1 mb-2">Exercise Tracker</h1>
          <p class="lead text-justify mb-4">
            This single-page application incorporates the MEVN stack (MongoDB,
            Express.js, Vue.js, and Node.js) to provide a robust user experience
            based on RESTful principles. This app utilizes a hand-built Express.js
            backend deployed on GCP and a MongoDB Atlas cluster. This app is a 
            fully-fledged product based on best principles in authorization, security, 
            session and state memory. The source code for the frontend of this application
            is available on
            <a href="https://github.com/coucoulesr/exercise-tracker-vue"
              >GitHub</a
            >; for more information on this or any of my other projects, visit
            my website,
            <a href="https://www.racoucoules.com">racoucoules.com</a> where you
            can get in contact with me.
          </p>
          <p class="text-muted mb-4">© 2019 Richard Coucoules</p>

          <router-link
            class="btn btn-outline-primary mr-2"
            to="/login"
            v-if="!this.$store.state.loggedIn"
            >Log In</router-link
          >
          <router-link
            class="btn btn-outline-primary mr-2"
            to="/register"
            v-if="!this.$store.state.loggedIn"
            >Register</router-link
          >
          <router-link
            class="btn btn-primary"
            to="/exercise-log"
            v-if="this.$store.state.loggedIn"
          >
            <font-awesome-icon icon="random" /> Exercise Log
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
  props: [],
  components: {
    FontAwesomeIcon
  }
};
</script>
