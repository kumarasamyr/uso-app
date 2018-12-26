<template>
    <v-container text-xs-center>
    <!-- <v-container grid-list-md text-xs-center primary fluid> -->
        <!-- <v-layout> -->
            <div><h1 style="color:#002147">Login</h1></div><br /><br />
            <!-- <div><p>{{loginDirections}}</p></div> -->
            <v-form ref="form" v-model="valid">
                <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    :rules="[v => !!v || 'Email is required']"
                    required>
                </v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    :rules="[v => !!v || 'Password is required']"
                    required>
                </v-text-field>
            </v-form>
            <div><v-btn color="primary" @click="handleSubmit" :disabled="account.loggingIn || !valid">Login</v-btn></div><br />
            <div><router-link to=''>Forgot password</router-link></div><br />
            <div><router-link to="/register">Don't have an account? Click here to register</router-link></div><br /><br />
            <div><v-alert v-if="alert.message" :value="true" :color="alert.type">{{alert.message}}</v-alert></div>
        <!-- </v-layout> -->
    </v-container>
</template>

<style scoped>
</style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data () {
        return {
            loginDirections: 'Enter your email address and password.',
            email: '',
            password: '',
            submitted: false,
            valid: true
        }
    },
    computed: {
        ...mapState({
            account: state => state.account,
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions('account', ['login']),
        handleSubmit() {
            this.submitted = true;
            // const {email, password} = this;
            const email = 1;
            const password = 'reset2018';
            if (this.$refs.form.validate()) {
                this.login({email, password});
            }
        },
        forgotPassword() {
            console.log('TODO: forgotPassword');
        }
    }
}
</script>
