<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Exercise Log</router-link>
        <div class="navbar-nav ml-auto">
          <span
            class="navbar-text font-italic font-weight-light mr-3"
            v-if="this.$store.state.loggedIn"
            >{{ this.$store.state.user }}</span
          >
          <router-link
            class="nav-item nav-link"
            to="/exercise-log"
            v-if="this.$store.state.loggedIn"
            >Exercise Log</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/login"
            v-if="!this.$store.state.loggedIn"
            >Login</router-link
          >
          <router-link
            class="nav-item nav-link"
            to="/register"
            v-if="!this.$store.state.loggedIn"
            >Register</router-link
          >
          <a
            href="#"
            class="nav-item nav-link"
            @click.prevent="logout"
            v-if="this.$store.state.loggedIn"
            >Logout</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: [],
  mounted() {
    this.$store.dispatch("checkAuthorization");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },
  computed: {}
};
</script>
