<template>
  <div>
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Register</h3>
                <div class="form-row">
                  <div v-if="error" class="col-12 alert alert-danger px-3">
                    {{ error }}
                  </div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label sr-only" for="displayName"
                      >Username</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="username"
                      placeholder="Username"
                      name="username"
                      required
                      v-model="username"
                    />
                  </section>
                </div>
                <div class="form-row">
                  <section class="col-sm-12 form-group">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="passOne"
                    />
                  </section>
                </div>
                <div class="form-row">
                  <section class="col-sm-12 form-group">
                    <input
                      class="form-control"
                      type="password"
                      required
                      placeholder="Repeat Password"
                      v-model="passTwo"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/login">login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { BACKEND_URI } from "../config";

export default {
  name: "register",
  data: function() {
    return {
      username: null,
      passOne: null,
      passTwo: null,
      error: null
    };
  },
  watch: {
    passTwo: function() {
      if (
        this.passOne !== "" &&
        this.passTwo !== "" &&
        this.passTwo !== this.passOne
      ) {
        this.error = "Passwords do not match.";
      } else {
        this.error = null;
      }
    }
  },
  methods: {
    register() {
      if (this.passOne !== this.passTwo) {
        return null;
      }
      axios
        .post(BACKEND_URI + "/register", {
          username: this.username,
          password: this.passOne
        })
        .then(response => {
          this.$store.dispatch("login", {
            username: this.username,
            token: response.data
          });
          this.$router.push("exercise-log");
        })
        .catch(err => (this.error = err.response.data));
    }
  },
  components: {}
};
</script>
