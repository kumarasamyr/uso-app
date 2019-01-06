<template>
  <div>
    <v-layout class="primary white--text" row>
      <v-flex xs10>
        <v-card-text>
          <v-spacer></v-spacer>
            <v-toolbar-title style="text-align: center">Feedback</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-card-text>
      </v-flex>
    </v-layout>

    <v-container fluid grid-list-xl >
    <v-layout row align-center justify-center fill-height>
      <v-flex d-flex xs12 sm6 md4>
       <v-card>
        <v-flex text-xs-center>
          <h3 align="justify">In terms of overall satisfaction, how would you rate the event</h3>
          <div align="center" >
            <star-rating align="center" :star-size="20" :show-rating="false" active-color="#f80750" @rating-selected="setSatisfactionRating"></star-rating> 
          </div>
        </v-flex>
       </v-card>
      </v-flex>
    </v-layout >
    <v-layout row align-center justify-center fill-height>
      <v-flex d-flex xs12 sm6 md4>
       <v-card>
        <v-flex text-xs-center>
          <h3 align="justify">Do you think the event met the objectives you had in mind</h3>
          <div align="center" >
            <star-rating align="center" :star-size="20" :show-rating="false" active-color="#f80750" @rating-selected="setObjectivesRating"></star-rating>
          </div>
        </v-flex>
       </v-card>
      </v-flex>
    </v-layout >
    <v-layout row align-center justify-center fill-height>
      <v-flex d-flex xs12 sm6 md4>
       <v-card tile="true">
        <v-flex text-xs-center>
          <h3 align="justify">How likely are you to suggest events from USO to your friends</h3>
          <div align="center" >
            <star-rating align="center" :star-size="20" :show-rating="false" active-color="#f80750" @rating-selected="setSuggestionRating"></star-rating>
          </div>
        </v-flex>
       </v-card>
      </v-flex>
    </v-layout >
    <div>
        <p style="color:#f80750"> Use the Space below to provide any additional comments you might have </p>
        <textarea id="ip2"/>
    </div>
    <div align="center">
        <v-btn style="background-color: #f80750" @click="submit">submit</v-btn>
    </div>
  </v-container>
  </div>
</template>

<script>
import topBar from "../../components/TopBar";
import { mapActions, mapState } from "vuex";
import StarRating from 'vue-star-rating'
import Rating from 'v-rating';
export default {
  data() {
    return {
      satisfactionRating: 0,
      objectivesRating: 0,
      suggestionRating: 0,
      comments: ''
    };
  },

  computed: {
    ...mapState("events", ["selectedEvent"])
  },

  created() {
    this.setEventDetails();
    this.setNewHeading(this.selectedEvent.name);
    this.setShowBackButton(true);
    this.setNewBacklink('/event/details');
  },

  methods: {
    ...mapActions('common', ['setNewBacklink', 'setNewHeading', 'setShowBackButton']),
    setEventDetails() {
      this.eventLocationString = `${this.selectedEvent.venueName}, ${
        this.selectedEvent.venueAddress1
      }`;
      this.eventTimeString = `${this.selectedEvent.startDate} . ${
        this.selectedEvent.startTime
      } to ${this.selectedEvent.endTime}`;
    },
    setSatisfactionRating: function(rating) {
        this.satisfactionRating = rating;
    },
    setObjectivesRating: function(rating) {
        this.objectivesRating = rating;
    },
    setSuggestionRating: function(rating) {
        this.suggestionRating = rating;
    },
    submit: function() {
        console.log("satisfactionRating = " + this.satisfactionRating);
        console.log("objectivesRating = " + this.objectivesRating);
        console.log("suggestionRating = " + this.suggestionRating);
        console.log("comments = " + this.comments);
    }
  },
  components: {
    topBar,
    StarRating,
    Rating
  }
};
</script>

<style>
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
body {
  font-family: 'Raleway', sans-serif;
}
h3 {
  color: #f80750;
  font-family: 'Raleway', sans-serif;
}
#ip2 {
    border-radius: 25px;
    border: 2px solid #f80750;
    padding: 10px; 
    width: 95%;
    height: 50px;    
}
</style>
