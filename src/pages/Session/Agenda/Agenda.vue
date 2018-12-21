<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout v-for="session in sessions" :key="session.sessionId" row wrap>
          <v-flex xs12>
            <SessionCard :session="session" :event="selectedEvent" v-on:click="selectSession(session)" ></SessionCard>
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
      ...mapActions('sessions',['selectSession']),
      fetchSessions() {
        sessionsService.getSessions(this.selectedEvent.id).then(res => {
          this.sessions = res['data']
        })
      },
      selectSession(session) {
        this.selectSession(session)
        this.$router.push({ path: 'session-info' })
      }
    }
  }
</script>