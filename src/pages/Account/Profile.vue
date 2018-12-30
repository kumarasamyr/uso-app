<template>
    <v-container>
        <v-card-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
            <v-btn slot="activator" icon color="secondary">
                <v-icon>fa-cog</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile @click="showEditProfile()">
                    <v-list-tile-title>Edit Profile</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="showChangePassword()">
                    <v-list-tile-title>Change Password</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="logout()">
                    <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile>
            </v-list>
            </v-menu>
        </v-card-title>
        <v-flex text-xs-center align-center xs12>
            <v-avatar size="250px"><img v-bind:src="profileImage"></v-avatar>
            <h1 class="headline py-2">{{firstName}} <span v-if="nickName">"{{nickName}}"</span> {{lastName}}</h1>
            <h3 class="py-1">{{city}}, {{state}}</h3>
        </v-flex>
        <v-layout row>
            <v-flex xs12 sm12>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">fa-phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{phone}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">fa-envelope</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{email}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">fa-map-marker-alt</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{streetAddress}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{city}}, {{state}} {{zip}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="indigo">fa-user-secret</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>Your profile is {{profileStatus}}</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card v-if="action === 'editProfile'">
                    <v-toolbar dark color="primary" fixed>
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>fa-times</v-icon>
                        </v-btn>
                        <v-toolbar-title>Edit Profile</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click="saveProfile()" :disabled="!profileFormValid">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <br /><br /><br />
                        <v-form ref="profileForm" v-model="profileFormValid">
                            <div class="text-xs-center">
                                <v-avatar size="100px"><img v-bind:src="profileFormImage" @click="openFileUpload()"></v-avatar>
                                <input style="display:none" type="file" accept="image/*" id="file" ref="file" v-on:change="handleFileUpload()" />
                            </div>
                            <v-text-field
                                v-model="profileForm.firstName"
                                :rules="[v => !!v || 'First name is required']"
                                label="First Name"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.lastName"
                                :rules="[v => !!v || 'Last name is required']"
                                label="Last Name"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.nickName"
                                label="Nickname (optional)">
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.email"
                                label="Email"
                                required
                                disabled>
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.phone"
                                :rules="[v => !!v || 'Phone number is required', v => (v && v.length == 10) || 'Phone number must be valid']"
                                label="Phone"
                                mask="phone"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.streetAddress"
                                :rules="[v => !!v || 'Street address is required']"
                                label="Street Address"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="profileForm.city"
                                :rules="[v => !!v || 'City is required']"
                                label="City"
                                required>
                            </v-text-field>
                            <v-select
                                v-model="profileForm.state"
                                :items="stateList"
                                label="State"
                                required>
                            </v-select>
                            <v-text-field
                                v-model="profileForm.zip"
                                :rules="[v => !!v || 'Zip is required', v => (v && v.length == 5) || 'Zip code must be valid']"
                                label="Zip Code"
                                mask="#####"
                                required>
                            </v-text-field>
                            <v-switch 
                                :label="`Your profile is ${profileStatus}`" 
                                v-model="profileForm.profilePublic">
                            </v-switch>
                        </v-form>
                    </v-card-text>
                </v-card>
                <v-card v-if="this.action === 'changePassword'">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>fa-times</v-icon>
                        </v-btn>
                        <v-toolbar-title>Change Password</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click="submitNewPassword()" :disabled="!passwordFormValid">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="passwordForm" v-model="passwordFormValid">
                            <v-text-field
                                v-model="passwordOld"
                                :rules="[v => !!v || 'Old password is required']"
                                label="Old password"
                                type="password"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="passwordNew"
                                :rules="[v => !!v || 'New password is required']"
                                label="New password"
                                type="password"
                                required>
                            </v-text-field>
                            <v-text-field
                                v-model="passwordNewCopy"
                                :rules="[v => !!v || 'New password is required', v => (v && v === passwordNew) || 'New passwords must match']"
                                label="Retype new password"
                                type="password"
                                required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>

<script>
    import { STATELIST } from '../../utils/constants.js';
    import { mapActions, mapState } from 'vuex';
    
    export default {
        data () {
            return {
                action: '',
                dialog: false,
                passwordFormValid: false,
                passwordNew: '',
                passwordNewCopy: '',
                passwordOld: '',
                profileForm: {},
                profileFormValid: false,
                profileImageFile: null,
                profilePublic: false,
                stateList: STATELIST
            }
        },
        created() {
            this.getUserInfo();
            this.setNewHeading('My Profile');
        },
        computed: {
                ...mapState({
                    userInfo: state => state.account.userInfo
                }),
                city: function() {
                    return this.userInfo.city;
                },
                email: function() {
                    return this.userInfo.email;
                },
                firstName: function() {
                    return this.userInfo.firstName;
                },
                lastName: function() {
                    return this.userInfo.lastName;
                },
                nickName: function() {
                    return this.userInfo.nickName;
                },
                phone: function() {
                    return this.userInfo.phone;
                },
                profileFormImage: function() {
                    return this.profileForm.profileUrl || require('../../assets/blank-profile.png');
                },
                profileImage: function() {
                    return this.userInfo.profileUrl || require('../../assets/blank-profile.png');
                },
                profileStatus: function() {
                    return this.userInfo.profilePublic ? 'public' : 'private';
                },
                state: function() {
                    return this.userInfo.state;
                },
                streetAddress: function() {
                    return this.userInfo.streetAddress;
                },
                zip: function() {
                    return this.userInfo.zip;
                }
            },
        methods: {
            ...mapActions('account', ['changePassword', 'getUserInfo', 'logout']),
            ...mapActions('common', ['setNewHeading']),
            handleFileUpload: function() {
                this.file = this.$refs.file.files[0];
                let reader  = new FileReader();
                reader.addEventListener("load", function () {
                    this.profileForm.profileUrl = reader.result;
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
            saveProfile: function() {
                // TODO
                console.log('saveProfile');
                console.log(this.profileForm);
            },
            showChangePassword: function() {
                this.dialog = true;
                this.action = 'changePassword';
            },
            showEditProfile: function() {
                Object.assign(this.profileForm, this.userInfo);
                this.dialog = true;
                this.action = 'editProfile';
            },            
            submitNewPassword: function() {
                this.changePassword({
                    oldPassword: this.passwordOld,
                    newPassword: this.passwordNew
                });
            }
        }
    }
</script>
