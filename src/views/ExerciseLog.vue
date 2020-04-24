<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="text-center mb-3">
          Your Exercise Log
          <button
            class="ml-3 btn btn-primary font-weight-bold"
            v-if="!addExerciseFormVisible"
            @click.prevent="showForm"
          >+</button>
        </h1>
        <div class="card bg-light py-0" v-if="addExerciseFormVisible">
          <div class="card-body text-center pb-1">
            <form class="form-group" @submit.prevent="addExercise">
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
                    v-model="newDuration"
                  />
                </section>
                <section class="col-sm-6 form-group">
                  <input class="form-control" type="date" v-model="newDate" />
                </section>
              </div>
              <div class="form-group text-right mb-0">
                <input class="btn btn-primary" value="Add Exercise" type="submit" />
                <button class="btn btn-secondary ml-2" @click.prevent="clearForm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-12 col-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="font-weight-normal text-center" scope="col">
                  <button
                    :class="searchTerm ? 'btn-warning' : 'btn-light'"
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="toggleSearchBox"
                  >Exercise</button>
                </th>
                <th class="font-weight-normal text-center" scope="col">
                  <button
                    :class="
                      durationGT || durationLT ? 'btn-warning' : 'btn-light'
                    "
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="toggleDurationBox"
                  >Duration (min.)</button>
                </th>
                <th class="font-weight-normal text-center" scope="col">
                  <button
                    :class="startDate || endDate ? 'btn-warning' : 'btn-light'"
                    class="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="toggleDateBox"
                  >Date</button>
                </th>
                <th class="font-weight-normal text-center" scope="col">
                  <button class="btn btn-light" disabled>Actions</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="searchBoxVisible">
                <td colspan="4">
                  <form class="form-inline">
                    <div class="mx-auto form-group">
                      <input
                        class="form-control mr-2"
                        type="search"
                        placeholder="Search by Exercise Name"
                        aria-label="Search"
                        v-model="searchTerm"
                      />
                      <button
                        class="btn btn-outline-secondary my-2 my-sm-0"
                        @click.prevent="clearSearchBox"
                      >Clear</button>
                    </div>
                  </form>
                </td>
              </tr>
              <tr v-if="durationBoxVisible">
                <td colspan="4">
                  <form class="form-inline">
                    <div class="mx-auto form-group">
                      <input
                        class="form-control"
                        placeholder="Min Length (min.)"
                        v-model="durationGT"
                      />
                      <input
                        class="form-control mx-1"
                        placeholder="Max Length (min.)"
                        v-model="durationLT"
                      />
                      <button
                        class="btn btn-outline-secondary my-2 my-sm-0"
                        @click.prevent="clearDurationBox"
                      >Clear</button>
                    </div>
                  </form>
                </td>
              </tr>
              <tr v-if="dateBoxVisible">
                <td colspan="4">
                  <form class="form-inline">
                    <div class="mx-auto form-group">
                      <label for="start-date" class="mr-1">Start Date:</label>
                      <input id="start-date" class="form-control" type="date" v-model="startDate" />
                      <label for="end-date" class="ml-2 mr-1">End Date:</label>
                      <input id="end-date" class="form-control" type="date" v-model="endDate" />
                      <button
                        class="btn btn-outline-secondary ml-1 my-2 my-sm-0"
                        @click.prevent="clearDateBox"
                      >Clear</button>
                    </div>
                  </form>
                </td>
              </tr>
              <tr v-for="item in filteredOutput" :key="item._id">
                <td class="font-weight-light text-center">{{ item.description }}</td>
                <td class="font-weight-light text-center">{{ item.duration }}</td>
                <td class="font-weight-light text-center">{{ item.date.substr(0, 10) }}</td>
                <td class="text-center">
                  <router-link
                    class="btn btn-sm btn-outline-secondary"
                    title="Edit"
                    :to="'/edit/' + item._id"
                  >
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
      searchTerm: "",
      durationGT: null,
      durationLT: null,
      startDate: null,
      endDate: null,
      addExerciseFormVisible: false,
      searchBoxVisible: false,
      durationBoxVisible: false,
      dateBoxVisible: false
    };
  },
  methods: {
    showForm() {
      this.addExerciseFormVisible = true;
    },
    clearForm() {
      this.newDate = null;
      this.newDuration = "";
      this.newDescription = "";
      this.addExerciseFormVisible = false;
    },
    addExercise() {
      console.log("addExercise invoked");
      this.$store.dispatch("addExercise", {
        description: this.newDescription,
        duration: this.newDuration,
        date: this.newDate
      });
      setTimeout(this.clearForm, 500);
    },
    deleteExercise(id) {
      this.$store.dispatch("deleteExerciseById", id);
    },
    toggleSearchBox() {
      this.searchBoxVisible = !this.searchBoxVisible;
    },
    clearSearchBox() {
      this.searchBoxVisible = false;
      this.searchTerm = "";
    },
    toggleDurationBox() {
      this.durationBoxVisible = !this.durationBoxVisible;
    },
    clearDurationBox() {
      this.durationBoxVisible = false;
      this.durationGT = null;
      this.durationLT = null;
    },
    toggleDateBox() {
      this.dateBoxVisible = !this.dateBoxVisible;
    },
    clearDateBox() {
      this.dateBoxVisible = false;
      this.startDate = null;
      this.endDate = null;
    }
  },
  computed: {
    filteredOutput: function() {
      let search = this.$store.state.exercises.filter(ex =>
        ex.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.durationGT) {
        search = search.filter(ex => ex.duration >= this.durationGT);
      }
      if (this.durationLT) {
        search = search.filter(ex => ex.duration <= this.durationLT);
      }
      if (this.startDate) {
        search = search.filter(ex => ex.date >= this.startDate);
      }
      if (this.endDate) {
        search = search.filter(ex => ex.date <= this.endDate);
      }
      return search;
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>