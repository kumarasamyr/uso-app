<template>
    <v-card color="blue-grey darken-2" class="white--text session-card">
            <v-card-title primary-title>
                <v-flex xs3>
                  {{session.startTime}}
                </v-flex>
                <v-flex xs9>
                  <div class="headline">{{session.name}}</div>
                </v-flex>
                <v-flex xs3>
                  {{session.endTime}}
                </v-flex>
                <v-flex xs9>
                  <div>{{session.location}}</div>
                </v-flex>
            </v-card-title>
        <v-card-actions>
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
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'
import { activityService } from '../../../services'
import { CONFIG } from '../../../config/config'

export default {
    data() {
        return {
            likeCount: 0,
            bookmarkCount: 0,
            activityState: {like: false, bookmark: false},
            ACTIVITY_DETAILS: {
                source: CONFIG.sessionDetails.source,
                sourceId: this.session.sessionId,
            }
        }
    },

    props: ['session', 'event'],

    computed: {
        ...mapState('account', [('user')]),
        
    },

    created() {
        this.fetchLikes(),
        this.fetchBookmarks()
    },

    methods: {
        fetchLikes() {
            let details = {
                ...this.ACTIVITY_DETAILS,
                type: 'like'
            }
            activityService.getActivity(this.user, this.event, details).then(res => {
                //TODO: confirm with backend what field for number of likes is
                this.likeCount = res['data'].likes
            })
        },

        fetchBookmarks() {
            let details = {
                ...this.ACTIVITY_DETAILS,
                type: 'bookmark'
            }
            activityService.getActivity(this.user, this.event, details).then(res => {
                //TODO: confirm with backend what field for number of bookmarks is
                this.bookmarkCount = res['data'].likes
            })
        },

        callActivity(activityType) {
            let details = {
                ...this.ACTIVITY_DETAILS,
                type: activityType
            }
             if (this.activityState[activityType]) {
                 activityService.updateActivity(this.user, this.event, details).then(res => {
                     toggleActivity(activityType)
                 })
             } else {
                 activityService.undoActivity(this.user, this.event, details).then(res => {
                     toggleActivity(activityType)
                 })
             }
        },

        toggleActivity(activityType) {
            this.activityState[activityType] = !this.activityState[activityType]
        }
    }
};
</script>

<style scoped>
    .session-card {
        border-radius: 10px;
    }
</style>