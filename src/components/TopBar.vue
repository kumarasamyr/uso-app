<template>
  <v-toolbar color="secondary" height="70px" dark app>
    <v-btn v-if="showBackButton" fab small color="primary" :to="backlink">
      <v-icon style="height:auto;width:auto" small>fa-chevron-left</v-icon>
    </v-btn>
    <img v-if="!showBackButton" class height="55px" src="../assets/uso-logo.svg">
    <v-spacer></v-spacer>
    <v-toolbar-title>{{heading}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn fab small color="primary" to="/search">
      <v-icon style="height:auto;width:auto" small>fa-search</v-icon>
    </v-btn>
    <v-btn fab small color="primary" to="/faq">
      <v-icon style="height:auto;width:auto" small>fa-info</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('common', ['backlink', 'heading', 'showBackButton']),
    },
    name: "TopBar"
  };
</script>
