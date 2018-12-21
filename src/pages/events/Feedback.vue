<template>
  <div>
    <v-toolbar
      color="secondary"
      height="70px"
      dark
      app
    >
    <div id="title"> <h1>Your Events</h1></div>
    </v-toolbar>
    <h1> feedback</h1>
    <event-title></event-title>
  </div>
</template>

<script>

import eventTitle from "../../components/EventTitle"

export default {
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  components :{
  	eventTitle
  }
}
</script>
