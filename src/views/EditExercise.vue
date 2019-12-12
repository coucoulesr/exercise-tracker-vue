<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card bg-light mt-3">
          <div class="card-body">
            <div
              class="spinner-border text-primary"
              role="status"
              v-if="!renderForm"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <form @submit.prevent="editExercise" v-if="renderForm">
              <h3 class="font-weight-light mb-3 text-center">Edit Exercise</h3>
              <div v-if="error" class="col-12 alert alert-danger px-3">
                {{ error }}
              </div>
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
                  <input
                    class="form-control"
                    type="date"
                    required
                    v-model="newDate"
                  />
                </section>
              </div>

              <div class="form-group text-right mb-0">
                <input
                  class="btn btn-primary"
                  value="Edit Exercise"
                  type="submit"
                />
                <router-link class="btn btn-secondary ml-2" to="/exercise-log"
                  >Cancel</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditExercise",
  data: function() {
    return {
      newDate: null,
      newDuration: "",
      newDescription: "",
      error: "",
      renderForm: false
    };
  },
  computed: {
    exercise() {
      return this.$store.state.exercises.find(
        ex => ex._id == this.$route.params.id
      );
    },
    oldDate() {
      return this.exercise.date.substr(0, 10);
    },
    oldDuration() {
      return this.exercise.duration;
    },
    oldDescription() {
      return this.exercise.description;
    }
  },
  created() {
    setTimeout(() => {
      this.newDate = this.oldDate;
      this.newDuration = this.oldDuration;
      this.newDescription = this.oldDescription;
      this.renderForm = true;
    }, 1000);
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
      setTimeout(() => this.$router.push("/exercise-log"), 1000);
    }
  },
  components: {}
};
</script>

<style></style>
