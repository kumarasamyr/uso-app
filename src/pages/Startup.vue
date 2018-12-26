<template>
    <v-container text-xs-center>
        <div><h1 style="color:#002147">Welcome to Reset</h1></div><br /><br />
        <img width="75%" v-bind:src="logo" /><br /><br /><br />
        <div><v-btn color="primary" @click="register()">Register</v-btn></div>
        <div><v-btn color="secondary" @click="login()">Login</v-btn></div>
    </v-container>
</template>

<style scoped></style>

<script>
    export default {
        computed: {
            logo() {
                return require('../assets/uso-logo.svg');
            }
        },
        methods: {
            register() {
                this.$router.push('/register');
            },
            login() {
                this.$router.push('/login');
            }
        }
    }
</script>