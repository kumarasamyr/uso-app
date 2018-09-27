<template>
  <v-app>
      <v-navigation-drawer v-model="sidebar" app>
      </v-navigation-drawer>

      <v-toolbar app>
        <span class="hidden-sm-up">
          <v-toolbar-side-icon @click="sidebar = !sidebar">
          </v-toolbar-side-icon>
        </span>
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        appTitle: 'USO Event Manager',
        sidebar: false
      }
    }
  }
</script>
