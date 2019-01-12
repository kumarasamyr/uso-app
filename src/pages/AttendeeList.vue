


<template>
  <div>
    <v-container fluid grid-list-sm>
      <v-layout v-for="attendee in attendeeList" :key="attendee.attendeeId" row wrap>
        
        <v-flex xs12>
          <EventCard class="primary" v-bind:event="event" @click.native="clickEvent(event)"></EventCard>
        </v-flex>

        <v-flex xs4>
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"><div class="fill-height bottom-gradient">attendee.name</div></v-img>
        </v-flex>


      </v-layout>
    </v-container>
  </div>
</template>
      
      
      


    <script>
        import { mapActions, mapState } from 'vuex';
        export default {
            data () {
                return {
                    attendeeList:[]
                }
            },
            created() {
               this.setNewHeading('Attendee List');
               this.attendeeList = this.getAttendees(event.eventId);
               console.log(event);
            },
            computed: {
                ...mapState({
                    event: state => state.selectedEvent,
                }),
            },
            methods: {
                ...mapActions('events', ['getAttendees']),
            }
        }
    </script>
  