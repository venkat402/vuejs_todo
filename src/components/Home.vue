<template>
  <div class="container" id="apphome">
    <div v-if="output">
      <p class="text-success">Task changes saved successfully.</p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">TASK NAME</th>
          <th scope="col">STATUS</th>
          <th scope="col">MARK</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>

      <tbody v-if="posts && posts.length">
        <tr v-for="(item, index)  of posts" :key="item.id">
          <th scope="row">{{index + 1}}</th>
          <td>{{item.task_name}}</td>
          <td>{{item.task_status}}</td>
          <td>
            <button
              type="button"
              v-bind:value="item.id"
              class="btn btn-primary btn-sm"
              v-on:click.prevent="updateStatusTask($event)"
            >CHANGE STATUS</button>
          </td>
          <td>
            <a href="/update_task/">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                v-bind:value="item"
                v-on:click.prevent="editTask($event)"
              >EDIT</button>
            </a>
          </td>
          <td>
            <button
              v-bind:value="item.id"
              type="button"
              class="btn btn-primary btn-sm"
              v-on:click.prevent="deleteTask($event)"
            >DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ul v-if="errors && errors.length">
      <li v-for="(item, index)  of posts" :key="item.id">
        <strong>{{index}}. {{item}}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: [],
      value: null,
      delete: [],
      output: ""
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/tasks`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    deleteTask: function(event) {
      let current = this;
      console.log(event.target.value); // returns 'foo'
      axios
        .get(`http://127.0.0.1:8000/tasks/delete/` + event.target.value)
        .then(response => {
          current.output = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    updateStatusTask: function(event) {
      let current = this;
      console.log(event.target.value); // returns 'foo'
      axios
        .get(`http://127.0.0.1:8000/tasks/update_status/` + event.target.value)
        .then(response => {
          current.output = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    editTask: function(event) {
      let current = this;
      console.log(JSON.stringify(event.target.value)); // returns 'foo'
      axios
        .get(`http://127.0.0.1:8000/tasks/update_status/` + event.target.value)
        .then(response => {
          current.output = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }

    ///tasks/update_status/
  }
};
</script>