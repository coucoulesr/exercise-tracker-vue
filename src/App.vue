<template>
  <div id="app">
    <navigation />
    <router-view class="container" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  data: function() {
    return {
      user: null,
      meetings: [],
      error: null
    };
  },
  methods: {},
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: steelblue;
@import "node_modules/bootstrap/scss/bootstrap.scss";
</style>
