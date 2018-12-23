<template>
  <div>
    <v-toolbar color="secondary" height="70px" dark app>
      <div id="title">
        <h1>Your events</h1>
      </div>
    </v-toolbar>
    <h1>You have subscribed to the following events</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <a :href="'#/eventdetails/'+post.id">
          <p>
            <strong>{{post.title}}</strong>
          </p>

          <p>{{post.body}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)

      .then(response => {
        // JSON responses are automatically parsed.

        this.posts = response.data;
      })

      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>