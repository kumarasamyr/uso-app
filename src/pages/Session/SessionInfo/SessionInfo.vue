<template>
      <v-container fluid text-xs-center>
        <v-layout row wrap>
          <v-flex class="session-info-img-container" xs12>
            Picture goes here
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h1><strong>{{sessionInfo.name}}</strong></h1>
            <p>
              {{sessionInfo.description}}
            </p>
            <br>
            <h2>Speaker: Robert O'Neill</h2>
            <!-- TODO: need to get speaker name, just getting speaker id now -->
          </v-flex>
        </v-layout>
        <br>
        <v-layout>
            <v-flex xs3 offset-xs6>
                <v-btn v-on:click="callActivity('like')" icon>
                    <v-icon color="white">fas fa-thumbs-up</v-icon>
                </v-btn>
                {{likeCount}}
            </v-flex>
            <v-flex xs3>
                <v-btn v-on:click="callActivity('bookmark')" icon>
                    <v-icon color="white">fas fa-bookmark</v-icon>
                </v-btn>
                {{bookmarkCount}}
            </v-flex>
        </v-layout>
        <br>
        <v-layout>
            <v-flex>
              <v-btn class="session-info-btn" small disabled>Resources</v-btn>
            </v-flex>
            <v-flex>
              <v-btn class="session-info-btn" small disabled>Take Notes</v-btn>
            </v-flex>
            <v-flex> 
              <v-btn class="session-info-btn" small disabled>Ask Questions</v-btn>
            </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import { mapState } from "vuex";
import { sessionsService } from "../../../services";
import { activityService } from "../../../services";
import { CONFIG } from "../../../config/config";

export default {
  data() {
    return {
      sessionInfo: {},
      likeCount: 0,
      bookmarkCount: 0,
      activityState: { like: false, bookmark: false },
      ACTIVITY_DETAILS: {
        source: CONFIG.sessionDetails.source, //TODO: there needs to be a separate source for session info
        sourceId: this.session.sessionId
      }
    };
  },

  computed: {
    ...mapState("sessions", ["selectedSession"]),
    ...mapState("events", ["selectedEvent"])
  },

  created() {
    this.fetchSessionInfo();
    this.fetchLikes();
    this.fetchBookmarks();
  },

  methods: {
    fetchSessionInfo() {
      sessionsService.getSessionInfo(this.selectedEvent.id, this.selectedSession.id).then(res => {
        this.sessionInfo = res["data"];
      });
    },

    fetchLikes() {
      let details = {
        ...this.ACTIVITY_DETAILS,
        type: "like"
      };
      activityService.getActivity(this.user, this.event, details).then(res => {
        //TODO: confirm with backend what field for number of likes is
        this.likeCount = res["data"].likes;
      });
    },

    fetchBookmarks() {
      let details = {
        ...this.ACTIVITY_DETAILS,
        type: "bookmark"
      };
      activityService.getActivity(this.user, this.event, details).then(res => {
        //TODO: confirm with backend what field for number of bookmarks is
        this.bookmarkCount = res["data"].likes;
      });
    },

    callActivity(activityType) {
      let details = {
        ...this.ACTIVITY_DETAILS,
        type: activityType
      };
      if (this.activityState[activityType]) {
        activityService.undoActivity(this.user, this.event, details).then(res => {
          toggleActivity(activityType);
        });
      } else {
        activityService.updateActivity(this.user, this.event, details).then(res => {
          toggleActivity(activityType);
        });
      }
    },

    toggleActivity(activityType) {
      this.activityState[activityType] = !this.activityState[activityType];
    }
  }
};
</script>

<style scoped>
  .session-info-btn {
    font-size: 12px;
    border-radius: 10px;
  }
</style>
