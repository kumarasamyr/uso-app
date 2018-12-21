<template>
   <v-toolbar
      color="secondary"
      height="70px"
      app
    >
    	<v-icon v-if="isEventHome" color="white">fa-home</v-icon>
    	<v-icon v-else color="white">fa-arrow-left</v-icon>
    	<v-spacer></v-spacer>
    	<span style="color:white"> <h1> Family reset {{id}}</h1> </span>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
    	<v-spacer></v-spacer>
        <v-icon color="white">fa-search</v-icon>
        <v-spacer></v-spacer>
        <v-icon color="white">fa-info</v-icon>
    
     
    </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

