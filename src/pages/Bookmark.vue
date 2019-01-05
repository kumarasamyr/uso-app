<template>
  <div>
    <v-list two-line class="mx-2">
      <transition-group name="slide">
        <v-list-tile
          class="elevation-5 primary white--text mb-2"
          v-for="(bookmark, index) in bookmarks"
          :key="bookmark"
          @click="to='/events/1'"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              <span class="font-weight-medium subheading">{{ bookmark.name }}</span>
            </v-list-tile-title>
            <v-list-tile-title>
              <span class="font-weight-medium subheading">{{ bookmark.eventName }}</span>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-spacer></v-spacer>
          <v-btn fab style="height:30px;width:30px" @click.prevent.stop="removeBookmark(index)">
            <v-icon small style="height:auto;width:auto">fa-times</v-icon>
          </v-btn>
        </v-list-tile>
      </transition-group>
    </v-list>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      bookmarks: [
        {
          name: "Resource info: bookmark name 1",
          eventName: "Family Reset"
        },
        {
          name: "Session info: bookmark name 2",
          eventName: "Family Reset"
        },
        {
          name: "Resource info: bookmark name 3",
          eventName: "Family Reset"
        },
        {
          name: "Session info: bookmark name 4",
          eventName: "Family Reset"
        },
        {
          name: "Resource info: bookmark name 5",
          eventName: "Family Reset"
        },
        {
          name: "Session info: bookmark name 6",
          eventName: "Family Reset"
        }
      ]
    };
  },
  created() {
    this.setNewHeading('My Bookmarks');
  },
  methods: {
    ...mapActions('common', ['setNewHeading']),
    removeBookmark(index) {
      this.bookmarks.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.5s;
  -ms-transform: scaleY(0); /* IE 9 */
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
}

.slide-enter-active {
  transition-delay: 0.25s;
}
</style>

