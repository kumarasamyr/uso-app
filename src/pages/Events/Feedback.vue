<template>
    <v-container>
        <h1>Feedback page</h1>
    </v-container>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';

import eventTitle from "../../components/EventTitle";

export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    this.setNewHeading('Feedback');
    this.setShowBackButton(true);
    axios

      .get(`http://jsonplaceholder.typicode.com/posts`)

      .then(response => {
        // JSON responses are automatically parsed.

        this.posts = response.data;
      })

      .catch(e => {
        this.errors.push(e);
      });
  },
  components: {
    eventTitle
  },
  methods: {
    ...mapActions('common', ['setNewHeading', 'setShowBackButton'])
  }
};
</script>