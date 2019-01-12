<template>
    <v-container fluid grid-list-lg>
        <v-layout v-if="bookmarks.length" row wrap>
            <v-layout v-for="b in bookmarks" :key="b.id">
                <v-flex xs12>
                    <v-list two-line class="primary pa-0" dark>
                        <v-list-tile>
                            <v-list-tile-avatar>
                                <v-icon>fa-{{icons[b.type]}}</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content @click="$router.push(b.link)">
                                <v-list-tile-title>{{b.event}}</v-list-tile-title>
                                <v-list-tile-sub-title>{{b.title}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-avatar>
                                <v-btn icon><v-icon>fa-trash-alt</v-icon></v-btn>
                            </v-list-tile-avatar>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-layout v-if="!bookmarks.length" justify-center>
            <h2 class="pa-4">You have no bookmarks</h2>
        </v-layout>
    </v-container>
</template>

<style scoped></style>

<script>
    import { mapActions } from 'vuex';
    export default {
        created() {
            this.setNewHeading('Bookmarks');
        },
        data() {
            return {
                bookmarks: [
                    {
                        event: 'Family Reset',
                        link: '',
                        title: 'Resource name goes here',
                        type: 'resource'
                    },
                    {
                        event: 'Warrior Reset',
                        link: '',
                        title: 'A very long title that doesn\'t end and goes on forever and ever',
                        type: 'session'
                    }
                ],
                icons: {
                    resource: 'book',
                    session: 'calendar-minus'
                }
            }
        },
        methods: {
            ...mapActions('common', ['setNewHeading'])
        }
    }
</script>

