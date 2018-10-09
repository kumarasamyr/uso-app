<template>
  <v-card>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      color="secondary"
      absolute
      app
    >
      <v-btn dark to="/bookmark">
        <span>Bookmarks</span>
        <v-icon>fa-bookmark</v-icon>
      </v-btn>

      <v-btn dark to="/notification">
        <span>Notifications</span>
        <v-badge fab color="primary">
          <span slot="badge">99</span>
          <v-icon>fa-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-btn dark to="/game">
        <span>Games</span>
        <v-icon>fa-gamepad</v-icon>
      </v-btn>

      <v-btn dark to="/setting">
        <span>Settings</span>
        <v-icon>fa-user-cog</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card> 
</template>
<script>
export default {
  data () {
    return {
      bottomNav: 0
    }
  }
}
</script>

