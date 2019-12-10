<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="text-center mb-3">Your Exercise Log <button class="ml-3 btn btn-primary font-weight-bold" v-if="!addExerciseFormVisible" @click.prevent="showForm()">+</button></h1>
        <div class="card bg-light py-0" v-if="addExerciseFormVisible">
          <div class="card-body text-center pb-1">
            <form class="form-group" @submit.prevent="addExercise">
              <div class="form-row">
                <div v-if="error" class="col-12 alert alert-danger px-3">{{ error }}</div>
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
                      v-model="newDuration"
                    />
                  </section>
                  <section class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      type="date"
                      v-model="newDate"
                    />
                  </section>
              </div>
              <div class="form-group text-right mb-0">
                <input class="btn btn-primary" value="Add Exercise" type="submit" />
                <button class="btn btn-secondary ml-2" @click.prevent="clearForm()">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <div class="card rounded-0">
          <table class="table">
            <thead>
              <tr>
                <th class="font-weight-normal text-center" scope="col">Exercise</th>
                <th class="font-weight-normal text-center" scope="col">Duration (min.)</th>
                <th class="font-weight-normal text-center" scope="col">Date</th>
                <th class="font-weight-normal text-center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in exercises" :key="item._id">
                <td class="font-weight-light text-center">{{ item.description }}</td>
                <td class="font-weight-light text-center">{{ item.duration }}</td>
                <td class="font-weight-light text-center">{{ item.date.substr(0, 10) }}</td>
                <td class="text-center">
                  <router-link class="btn btn-sm btn-outline-secondary" title="Edit" :to="'/edit/' + item._id">
                  <font-awesome-icon icon="edit" />
                  </router-link>

                  <button
                    class="btn btn-sm btn-outline-danger"
                    title="Delete"
                    @click.prevent="deleteExercise(item._id)"
                  >
                  <font-awesome-icon icon="trash" />
                </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ExerciseLog",
  props: [],
  data: function() {
    return {
      newDate: new Date(),
      newDuration: "",
      newDescription: "",
      addExerciseFormVisible: false
    };
  },
  methods: {
    showForm() {
      this.addExerciseFormVisible = true;
    },
    clearForm() {
      this.newDate = new Date();
      this.newDuration = "";
      this.newDescription = "";
      this.addExerciseFormVisible = false;
    },
    addExercise() {},
    deleteExercise(id) { return id },
  },
  computed: {
    exercises: function() {
      return this.$store.state.exercises;
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>
