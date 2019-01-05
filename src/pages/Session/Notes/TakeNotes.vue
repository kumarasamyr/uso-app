<template>
  <div>
    

    <v-container fluid grid-list-xl >
    <div>
        <h1>Take Notes about the session</h1>
        <p style="color:#f80750"> Use the Space below to write your own notes about the session </p>
        <textarea id="ip3"/>
    </div>
    <div align="center">
        <v-btn style="background-color: #f80750" @click="submit">save</v-btn>
    </div>
  </v-container>
  </div>
</template>

<script>
import topBar from "../../../components/TopBar";
import { mapActions, mapState } from "vuex";
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
h3,h1 {
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
#ip3 {
    border-radius: 25px;
    border: 2px solid #f80750;
    padding: 10px; 
    width: 95%;
    height: 350px;    
}
</style>
