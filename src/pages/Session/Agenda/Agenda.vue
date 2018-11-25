<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <SessionCard></SessionCard>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import SessionCard from './SessionCard.vue'
  
  export default {
    data() {
      return {
        sessions: []
      }
    },
    created() {
      console.log('get selected event from store, pass to session service, service will return all sessions for that event, update this.sessions here')
    },
    components: {
      SessionCard
    }
  }
</script>