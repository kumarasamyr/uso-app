<template>
  <v-app>
    <v-toolbar
      color="secondary"
      height="70px"
      dark
      app
    >
      <v-btn :color="(fab!='home')?'grey':'white'" :fab="fab=='home'" light :icon="fab!='home'"  @click.stop="fab = 'home'">
        <v-badge right color="red">
          <v-icon color="secondary">fa-home</v-icon>
        </v-badge>
      </v-btn>
      <v-btn :color="(fab!='globe')?'grey':'white'" :fab="fab=='globe'" light :icon="fab!='globe'"  @click.stop="fab = 'globe'">
        <v-icon color="secondary">fas fa-globe</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>fas fa-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content color="secondary">
      <router-view/>
    </v-content>
    
    <v-card>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      color="secondary"
      absolute
      app
    >
      <v-btn dark>
        <span>Bookmarks</span>
        <v-icon>fa-bookmark</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Notifications</span>
        <v-badge fab color="primary">
          <span slot="badge">99</span>
          <v-icon>fa-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-btn dark>
        <span>Games</span>
        <v-icon>fa-gamepad</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Settings</span>
        <v-icon>fa-user-cog</v-icon>
      </v-btn>

    </v-bottom-nav>
  </v-card>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      fab: "home",
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'fas fa-shapes',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      bottomNav: 0
    }
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'primary'
        case 1: return 'primary'
        case 2: return 'brown'
        case 3: return 'indigo'
      }
    }
  }
}
</script>
<style scoped>
</style>
