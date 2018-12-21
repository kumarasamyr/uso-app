<template>
    <v-container>
        <v-flex
                text-xs-center
                align-center
                xs12>
            <v-avatar
                size="60%">
                <img v-bind:src="profileUrl">
            </v-avatar>
            <h1 class="headline py-2">{{firstName}} <span v-if="nickName">"{{nickName}}"</span> {{lastName}}</h1>
            <h3 class="py-1">{{city}}, {{state}}</h3>
        </v-flex>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
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
                        <v-list-tile-title>{{address1}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{city}}, {{state}} {{zip}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                        <v-icon color="indigo">fa-user-secret</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-switch :label="`Your profile is ${profileStatus}`" v-model="profilePublic"></v-switch>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-btn block color="primary" dark slot="activator">Edit Profile</v-btn>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>fa-times</v-icon>
                    </v-btn>
                    <v-toolbar-title>Edit Profile</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="saveProfile()">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="profileForm" lazy-validation>
                        <v-text-field
                            v-model="firstName"
                            :rules="[v => !!v || 'First name is required']"
                            label="First Name"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="lastName"
                            :rules="[v => !!v || 'Last name is required']"
                            label="Last Name"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="nickName"
                            label="Nickname"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            required
                            disabled>
                        </v-text-field>
                        <v-text-field
                            v-model="phone"
                            :rules="[v => !!v || 'Phone number is required', v => (v && v.length == 14) || 'Phone number must be valid']"
                            label="Phone"
                            mask="phone"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="address1"
                            :rules="[v => !!v || 'Street address is required']"
                            label="Street Address"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="city"
                            :rules="[v => !!v || 'City is required']"
                            label="City"
                            required>
                        </v-text-field>
                        <v-select
                            v-model="state"
                            :items="stateList"
                            label="State"
                            required>
                        </v-select>
                        <v-text-field
                            v-model="zip"
                            :rules="[v => !!v || 'Zip is required', v => (v && v.length == 5) || 'Zip code must be valid']"
                            label="Zip Code"
                            mask="#####"
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
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        profilePublic: false,
        profileUrl: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
        location: 'Orlando, FL',
        firstName: 'Allison',
        lastName: 'Connors',
        nickName: 'Ali',
        email: 'aliconnors@example.com',
        phone: '(650) 555-1234',
        address1: '1400 Main Street',
        city: 'Orlando',
        state: 'FL',
        zip: '79938',
        address2: 'Orlando, FL 79938',
        stateList: [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]

      }
    },
    computed: {
            profileStatus: function() {
                return this.profilePublic ? 'public' : 'private';
            }
        },
        methods: {
            saveProfile: function() {
                if (this.$refs.profileForm.validate()) {
                    console.log('Form valid');
                    this.dialog = false;
                } else {
                    console.error('Form invalid');
                }
            }
        }
  }
</script>