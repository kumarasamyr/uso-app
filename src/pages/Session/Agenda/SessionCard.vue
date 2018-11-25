<template>
    <v-card color="blue-grey darken-2" class="white--text session-card">
            <v-card-title primary-title>
                <v-flex xs3>
                  7:30 am
                </v-flex>
                <v-flex xs9>
                  <div class="headline">Session Name</div>
                </v-flex>
                <v-flex xs3>
                  9:30 am
                </v-flex>
                <v-flex xs9>
                  <div>Session Location</div>
                </v-flex>
            </v-card-title>
        <v-card-actions>
            <v-flex xs3 offset-xs6>
                <v-btn icon disabled>
                    <v-icon color="white">fas fa-thumbs-up</v-icon>
                </v-btn>
                (50)
            </v-flex>
            <v-flex xs3>
                <v-btn icon disabled>
                    <v-icon color="white">fas fa-bookmark</v-icon>
                </v-btn>
                (50)
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.session-card {
  border-radius: 10px;
}
</style>