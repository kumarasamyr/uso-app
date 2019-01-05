<template>
  <div>
    <v-layout class="primary white--text" row>
      <v-flex xs10>
        <v-card-text>
          <v-spacer></v-spacer>
            <v-toolbar-title style="text-align: center">My Progress</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-card-text>
      </v-flex>
    </v-layout>

    <v-container fluid grid-list-xl >
    <v-flex text-xs-center align-center xs12>
            <v-avatar size="250px"><img v-bind:src="profileImage"></v-avatar>
    </v-flex>
    
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
  },
  components: {
    topBar,
    StarRating,
    Rating
  },
  computed: {
      ...mapState({
                    userInfo: state => state.account.userInfo
         }),
      profileImage: function() {
                    return this.userInfo.profileUrl || require('../../assets/blank-profile.png');
        }
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
