<template>
    <div>
    <v-toolbar
      color="secondary"
      height="70px"
      app
    >
    	<v-icon color="white">fa-home</v-icon>
    	<v-spacer></v-spacer>
    	<span style="color:white"> <h1> Family Reset {{id}}</h1> </span>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
        <v-icon color="white">fa-search</v-icon>
        <v-spacer></v-spacer>
        <v-icon color="white">fa-info</v-icon>
    
     
    </v-toolbar>
    <div class="row" style="background:#4441f4; background-size:cover">
	  <div class="column left">
	    <p style="color:white">Hotel Hyatt, 602 Emperor Blvd, Cary <br>
	    {{ msg }}, {{ id }}</p>
	  </div>
	  <div class="column right">
	    <v-icon color="white">fa-map-marker-alt</v-icon>
	  </div>
	</div>
	
  <v-container fluid grid-list-xl >
    <v-layout row align-center justify-center row fill-height>
      <v-flex d-flex xs6 sm6 md4>
       <v-card>
        <v-flex text-xs-center>
        	<v-icon x-large color="red darken-2" right>fa-book</v-icon>
        	<div style="color:#f44242	">Materials</div>
        </v-flex>
       </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm6 md4>
       <v-card>
         <v-flex text-xs-center>
       	<v-icon x-large color="red darken-2" right>fa-calendar-minus</v-icon>
       	<div style="color:#f44242	">Agenda</div>
       	 </v-flex>
       </v-card>	
      </v-flex>
    </v-layout >
    <v-layout row align-center justify-center row fill-height>
      <v-flex d-flex xs6 sm6 md4>
       <v-card >
        <v-flex text-xs-center>
        	<v-icon x-large color="red darken-2" right>fa-flag</v-icon>
        	<div style="color:#f44242	">My Progress</div>
        </v-flex>
       </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm6 md4>
       <v-card height="50%" to="/events/feedback">
         <v-flex text-xs-center>
       	<v-icon x-large color="red darken-2" right>fa-comment-alt</v-icon>
       	<div style="color:#f44242	">Feedback</div>
       	 </v-flex>
       </v-card>	
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center row fill-height>
      <v-flex d-flex xs6 sm6 md4>
       <v-card>
        <v-flex text-xs-center>
        	<v-icon x-large color="red darken-2" right>fa-share-alt</v-icon>
        	<div style="color:#f44242	">Event Wall</div>
        </v-flex>
       </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm6 md4>
       <v-card>
         <v-flex text-xs-center>
       	<v-icon x-large color="red darken-2" right>fa-users</v-icon>
       	<div style="color:#f44242	">Attendees</div>
       	 </v-flex>
       </v-card>	
      </v-flex>
    </v-layout>
  </v-container>
   </div>
   
</template>

<script>
   import eventBar from "../../components/EventBar"
    export default {
        name: 'eventdetails',
        data () {
            return {
                id: 0,
                msg: 'Event ID is',
                title: 'sample',
                isEventHome: true
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.title = this.$route.params.userId;
            console.log("created")
        },
		components: {
    		eventBar
  }
        
        
    }
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


</style>

