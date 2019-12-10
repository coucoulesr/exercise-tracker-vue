<template>
  <div>
    <form class="mt-3" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Log in</h3>
                <section class="form-group">
                  <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
                  <label class="form-control-label sr-only" for="Username">Username</label>
                  <input
                    required
                    class="form-control"
                    type="username"
                    id="username"
                    placeholder="Username"
                    v-model="username"
                  />
                </section>
                <section class="form-group">
                  <input
                    required
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/register">register</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data: function() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login: function() {
      this.error = "";
      axios
        .post("http://localhost:5000/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("token", response.data);
          axios.defaults.headers.common["Authorization"] = response.data;
          this.$store.dispatch("login", {
            token: response.data,
            username: this.username
          });
          this.$router.push("exercise-log");
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.error = "Invalid username or password";
          } else {
            this.error = err;
          }
        });
    }
  },
  components: {}
};
</script>
