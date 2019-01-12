<template>
  <div>
    <v-layout class="primary white--text" row>
      <v-flex xs10>
        <v-card-text class="event-location">
          <span>{{eventLocationString}}</span>
          <br>
          {{eventTimeString}}
        </v-card-text>
      </v-flex>
      <v-flex align-self-center xs2>
        <v-icon medium>fa-map-marker-alt</v-icon>
      </v-flex>
    </v-layout>

    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card class="elevation-5 primary">
            <v-flex text-xs-center>
              <v-icon x-large right>fa-book</v-icon>
              <div>Materials</div>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card class="elevation-5 primary" to="/agenda">
            <v-flex text-xs-center>
              <v-icon x-large white right>fa-calendar-minus</v-icon>
              <div>Agenda</div>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card class="elevation-5 primary">
            <v-flex text-xs-center>
              <v-icon x-large white right>fa-flag</v-icon>
              <div>My Progress</div>
            </v-flex>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card class="elevation-5 primary" to="/events/feedback">
            <v-flex text-xs-center>
              <v-icon x-large white right>fa-comment-alt</v-icon>
              <div>Feedback</div>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card class="elevation-5 primary">
            <v-flex text-xs-center>
              <v-icon x-large white right>fa-share-alt</v-icon>
              <div>Event Wall</div>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card class="elevation-5 primary" to="/attendeelist">
            <v-flex text-xs-center>
              <v-icon x-large white right>fa-users</v-icon>
              <div>Attendees</div>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import topBar from "../../components/TopBar";
import { mapActions, mapState } from "vuex";
export default {
  // TODO: clean up html
  data() {
    return {
      eventLocationString: "",
      eventTimeString: ""
    };
  },

  computed: {
    ...mapState("events", ["selectedEvent"])
  },

  created() {
    this.setEventDetails();
    this.setNewHeading(this.selectedEvent.name);
    this.setShowBackButton(true);
  },

  methods: {
    ...mapActions('common', ['setNewHeading', 'setShowBackButton']),
    setEventDetails() {
      this.eventLocationString = `${this.selectedEvent.venueName}, ${
        this.selectedEvent.venueAddress1
      }`;
      this.eventTimeString = `${this.selectedEvent.startDate} . ${
        this.selectedEvent.startTime
      } to ${this.selectedEvent.endTime}`;
    }
  },
  components: {
    topBar
  }

};
</script>

<style>
p {
  margin-bottom: 0px;
}

.event-location {
  padding: 8px 16px 8px 16px;
}

.column {
  float: left;
  padding: 10px;
}

.left {
  width: 80%;
}

.right {
  width: 20%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
