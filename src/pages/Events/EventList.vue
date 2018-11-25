<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout v-for="event in events" :key="event.eventId" row wrap>
            <v-flex xs12>
                <EventCard v-bind:event="event" v-on:click="clickEvent(event)"></EventCard>
            </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
    import { mapActions, mapState} from 'vuex'
    import EventCard from './EventCard.vue'
    import { eventsService } from '../../services'

    export default {
        data() {
            return {
                events: []
            }
        },

        computed: {
            ...mapState('account', [('user')])
        },

        created() {
            this.fetchEvents()
        },

        components: {
            EventCard
        },

        methods: {
            ...mapActions('events',['selectEvent']),
            fetchEvents() {
                eventsService.getEvents(this.user).then(res => {
                    this.events = res["body"].eventList
                })
            },
            clickEvent(event) {
                this.selectEvent(event)
                //TODO: change to actual path once event home page has been created
                this.$router.push({ path: 'eventHome' })
            }
        }
    };
</script>