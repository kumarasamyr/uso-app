<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout v-for="event in events" :key="event.event_id" row wrap>
            <v-flex xs12>
                <EventCard v-bind:event="event" @click.native="clickEvent(event)"></EventCard>
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
                //TODO: change to make service handle parameter object parsing
                eventsService.getEvents(this.user.id).then(res => {
                    this.events = res['data']
                })
            },
            clickEvent(event) {
                this.selectEvent(event)
                this.$router.push({ path: 'eventdetails' })
            }
        }
    };
</script>