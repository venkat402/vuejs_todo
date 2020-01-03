<template>
  <div class="container">
    <div>
      <h1>Add Task here...</h1>
    </div>
    <div v-if="output.id">
      <p class="text-success">Task added successfully.</p>
    </div>
    <form @submit="formSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Task Name</label>
        <input
          type="text"
          v-model="task_name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Component mounted.");
  },

  data() {
    return {
      task_name: "",

      description: "",

      output: ""
    };
  },

  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      axios
        .post("http://127.0.0.1:8000/tasks/add", {
          task_name: this.task_name
        })

        .then(function(response) {
          currentObj.output = response.data;
        })

        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>