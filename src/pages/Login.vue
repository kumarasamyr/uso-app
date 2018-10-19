<template>
    <v-container>
        <v-layout align-center>
            <p>This is the login page</p>
            <v-btn v-on:click="handleSubmit()">Login</v-btn>
            <div v-if="status && status.loggedIn">
                <p>You are logged in</p>
            </div>
        </v-layout>
    </v-container>
</template>

<style scoped>
</style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data () {
        return {
            username: 'username',
            password: 'password',
            submitted: false,
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['login']),
        handleSubmit() {
            this.submitted = true;
            const {username, password} = this;
            if (username && password) {
                this.login({username, password});
            }
        }
    }
}
</script>