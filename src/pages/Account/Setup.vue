<template>
    <v-stepper v-model="progress" class="elevation-0">
        <v-stepper-header>
            <v-stepper-step :complete="progress > 1" step="1">Change Password</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="progress > 2" step="2">Update Profile</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Add Photo</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">        
                <v-card>
                    <v-card-text>
                        <div class="text-xs-center"><p>Please change your password.</p></div>
                        <v-form ref="passwordForm" v-model="passwordFormValid">
                            <v-text-field
                                color="white"
                                v-model="password"
                                :rules="[v => !!v || 'Password is required']"
                                label="New Password"
                                type="password"
                                required>
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="passwordCopy"
                                :rules="[v => !!v || 'Password is required']"
                                label="Retype password"
                                type="password"
                                required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <div class="text-xs-center"><v-btn color="primary" @click="submitPasswordChange()" :disabled="!passwordFormValid">Next</v-btn></div>
                </v-card>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-card>
                    <v-card-text>
                        <div class="text-xs-center"><p>Please complete all fields not marked optional to move to the next step.</p></div>
                        <v-form ref="profileForm" v-model="profileFormValid">
                            <v-text-field
                                color="white"
                                v-model="firstName"
                                :rules="[v => !!v || 'First name is required']"
                                label="First Name"
                                required>
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="lastName"
                                :rules="[v => !!v || 'Last name is required']"
                                label="Last Name"
                                required>
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="nickName"
                                label="Nickname (optional)">
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="phone"
                                :rules="[v => !!v || 'Phone number is required', v => (v && v.length == 10) || 'Phone number must be valid']"
                                label="Phone"
                                mask="phone"
                                required>
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="streetAddress"
                                :rules="[v => !!v || 'Street address is required']"
                                label="Street Address"
                                required>
                            </v-text-field>
                            <v-text-field
                                color="white"
                                v-model="city"
                                :rules="[v => !!v || 'City is required']"
                                label="City"
                                required>
                            </v-text-field>
                            <v-select
                                color="white"
                                v-model="state"
                                :items="stateList"
                                :rules="[v => !!v || 'State is required']"
                                label="State"
                                required>
                            </v-select>
                            <v-text-field
                                color="white"
                                v-model="zip"
                                :rules="[v => !!v || 'Zip is required', v => (v && v.length == 5) || 'Zip code must be valid']"
                                label="Zip Code"
                                mask="#####"
                                required>
                            </v-text-field>
                        </v-form>
                        <div class="text-xs-center">
                            <v-btn color="secondary" @click="progress = 1">Back</v-btn>
                            <v-btn color="primary" @click="progress = 3" :disabled="!profileFormValid">Next</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-card>
                    <v-card-text>
                        <div class="text-xs-center"><p>Please upload a picture of yourself.</p></div>
                        <div class="text-xs-center">
                            <v-avatar size="100px"><img v-bind:src="profileImage" @click="openFileUpload()"></v-avatar>
                            <input style="display:none" type="file" accept="image/*" id="file" ref="file" v-on:change="handleFileUpload()" />
                        </div>
                        <br />
                        <div class="text-xs-center"><v-btn color="primary" @click="submitForm()">Submit</v-btn></div>
                    </v-card-text>
                </v-card>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<style scoped></style>

<script>
    import { STATELIST } from '../../utils/constants.js';
    import { mapActions } from 'vuex';

    export default {
        data () {
            return {
                city: '',
                firstName: '',
                lastName: '',
                nickName: '',
                password: '',
                passwordCopy: '',
                passwordFormValid: false,
                phone: '',
                profileFormValid: false,
                profileImage: require('../../assets/blank-profile.png'),
                progress: 0,
                state: '',
                stateList: STATELIST,
                streetAddress: '',
                zip: ''
            }
        },
        methods: {
            ...mapActions({
                createProfile: 'account/createProfile',
                error: 'alert/error'
            }),
            handleFileUpload: function() {
                this.file = this.$refs.file.files[0];
                let reader  = new FileReader();
                reader.addEventListener("load", function () {
                    this.profileImage = reader.result;
                }.bind(this), false);
                if (this.file) {
                    if (/\.(jpe?g|png|gif)$/i.test( this.file.name)) {
                        reader.readAsDataURL(this.file);
                    }
                }
            },
            openFileUpload: function() {
                this.$refs.file.click();
            },
            submitForm: function() {
                // TODO
                const data = {};
                this.createProfile(data);
            },
            submitPasswordChange: function() {
                if (this.password !== this.passwordCopy) {
                    this.error('Passwords do not match.');
                } else {
                    this.progress = 2;
                }
            }
        }
    }
</script>
