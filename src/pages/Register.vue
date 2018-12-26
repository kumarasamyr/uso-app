<template>
    <v-container text-xs-center>
        <div><h1 style="color:#002147">Registration</h1></div><br /><br />
        <div><p>{{registrationDirections}}</p></div>
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
                label="Temporary password"
                type="password"
                :rules="[v => !!v || 'Password is required']"
                required>
            </v-text-field>
        </v-form>
        <v-btn color="primary"  @click="handleRegister" :disabled="account.registering || !valid">Register</v-btn><br /><br />
        <router-link to="/login" class="btn">Already registered? Click here to login</router-link><br /><br />
        <div><v-alert v-if="alert.message" :value="true" :color="alert.type">{{alert.message}}</v-alert></div>
    </v-container>
</template>

<style scoped></style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data () {
        return {
            registrationDirections: 'Enter your email address and the temporary password you ' +
                   'received from USO after registration. If you have not received a ' + 
                   'temporary password yet, contact reset@usoofnc.org',
            bgImage: '@/assets/tempImg.jpeg', 
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
        ...mapActions({
            register: 'account/register'
        }),
        handleRegister() {
            this.submitted = true;
            // const {email, password} = this;
            const email = 1;
            const password = 'reset2018';
            if (this.$refs.form.validate()) {
                this.register({email, password});
            }
        }
    }
}
</script>
