<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Exercise Log</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/meetings" v-if="user"
            >Add Exercise</router-link
          >
          <router-link class="nav-item nav-link" to="/login" v-if="!user"
            >Login</router-link
          >
          <router-link class="nav-item nav-link" to="/register" v-if="!user"
            >Register</router-link
          >
          <a
            href="#"
            class="nav-item nav-link"
            @click.prevent="$emit('logout')"
            v-if="user"
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
  props: ["user"],
  components: {}
};
</script>
