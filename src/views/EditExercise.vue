<template>
  <div>
    <form class="mt-3" @submit.prevent="editExercise">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 text-center">Edit Exercise</h3>
                <div v-if="error" class="col-12 alert alert-danger px-3">{{ error }}</div>
                <div class="form-row">
                  <section class="col-sm-12 form-group">
                    <input
                      class="form-control"
                      type="text"
                      id="description"
                      placeholder="Description"
                      name="description"
                      required
                      v-model="newDescription"
                    />
                  </section>
                </div>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Duration (min)"
                      required
                      v-model="newDuration"
                    />
                  </section>

                  <section class="col-sm-6 form-group">
                    <input class="form-control" type="date" required v-model="newDate" />
                  </section>
                </div>

                <div class="form-group text-right mb-0">
                  <input class="btn btn-primary" value="Edit Exercise" type="submit" />
                  <router-link class="btn btn-secondary ml-2" to="/exercise-log">Cancel</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditExercise",
  data: function() {
    return {
      newDate: new Date(),
      newDuration: "",
      newDescription: "",
      error: ""
    };
  },
  mounted: function() {
    const exercise = this.$store.state.exercises.find(
      ex => ex._id == this.$route.params.id
    );
    this.newDuration = exercise.duration;
    this.newDescription = exercise.description;
    this.newDate = exercise.date.substr(0, 10);
  },
  methods: {
    editExercise() {
      this.$store.dispatch("editExercise", {
        id: this.$route.params.id,
        exerciseObject: {
          duration: this.newDuration,
          description: this.newDescription,
          date: this.newDate
        }
      });
      setTimeout(() => this.$router.push("/exercise-log"), 1000)
    }
  },
  components: {}
};
</script>

<style>
</style>
