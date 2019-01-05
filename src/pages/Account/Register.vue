<template>
    <v-container fill-height text-xs-center>
        <v-layout row wrap align-center>
            <v-flex xs-12>
                <h1>Registration</h1>
                <br />
                <div><p>{{registrationDirections}}</p></div>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        color="white"
                        prepend-icon="fa-envelope"
                        v-model="email"
                        label="Email"
                        type="email"
                        :rules="[v => !!v || 'Email is required']"
                        required>
                    </v-text-field>
                    <v-text-field
                        color="White"
                        prepend-icon="fa-lock"
                        v-model="password"
                        label="Temporary password"
                        type="password"
                        :rules="[v => !!v || 'Password is required']"
                        required>
                    </v-text-field>
                </v-form>
                <v-btn color="primary"  @click="handleRegister()" :disabled="!valid">Register</v-btn>
                <br /><br />
                <router-link to="/login" style="color:white">Already registered? Click here to login</router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
</style>

<script>
    import { mapActions } from 'vuex';

    export default {
        data () {
            return {
                registrationDirections: 'Enter your email address and the temporary password you ' +
                    'received from USO after registration. If you have not received a ' + 
                    'temporary password yet, contact reset@usoofnc.org',
                email: '',
                password: '',
                valid: false
            }
        },
        methods: {
            ...mapActions({
                register: 'account/register'
            }),
            handleRegister() {
                const {email, password} = this;
                if (this.$refs.form.validate()) {
                    this.register({email, password});
                }
            }
        }
    }
</script>
