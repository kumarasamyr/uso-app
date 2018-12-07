<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout v-for="session in sessions" :key="session.sessionId" row wrap>
          <v-flex xs12>
            <SessionCard :session="session" :event="selectedEvent" ></SessionCard>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import SessionCard from './SessionCard.vue'
  import { mapState } from 'vuex'
  import { sessionsService } from '../../../services'
  
  export default {
    data() {
      return {
        sessions: []
      }
    },
    computed: {
      ...mapState('events', [('selectedEvent')])
    },
    created() {
      this.fetchSessions()
    },
    components: {
      SessionCard
    },
    methods: {
      fetchSessions() {
        sessionsService.getSessions(this.selectedEvent.eventId).then(res => {
          this.sessions = res["body"].sessionList
        })
      }
    }
  }
</script>