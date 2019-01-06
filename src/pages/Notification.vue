<template>
    <v-container fluid grid-list-lg>
        <v-layout v-if="notifications.length" row wrap>
            <v-layout v-for="n in notifications" :key="n.id">
                <v-flex xs12>
                    <v-list three-line class="primary pa-0" :class="notificationClass(n.read)" dark>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title style="font-size:14px;" class="white--text">{{n.time}}</v-list-tile-title>
                                <v-list-tile-sub-title style="font-size:16px">{{n.message}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-divider></v-divider>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-layout v-if="!notifications.length" justify-center>
            <h2 class="pa-4">You have no notifications</h2>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .newNotification {
        font-weight: bold;
        filter: brightness(150%);
    }
</style>

<script>
    import { mapActions } from 'vuex';
    export default {
        created() {
            this.setNewHeading('My Notifications');
        },
        data() {
            return {
                notifications: [
                    {
                        id: 1,
                        message: "Just 3 days to go for your Family Reset event. Are you excited? We are!",
                        read: false,
                        time: "1 hour ago"
                        
                    },
                    {
                        id: 2,
                        message: "The venue for Family Reset has changed. Please check the Events section for details.",
                        read: true,
                        time: "1 day ago"
                    }
                ]
            }
        },
        methods: {
            ...mapActions('common', ['setNewHeading']),
            notificationClass(readStatus) {
                if (!readStatus) {
                    return 'newNotification';
                }
            }
        }
    }
</script>