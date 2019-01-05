<template>
    <v-container>
        <h1>Notifications page</h1>
    </v-container>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        created() {
            this.setNewHeading('My Notifications');
        },
        methods: {
            ...mapActions('common', ['setNewHeading'])
        }
    }
</script>