<template>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
        <v-flex xs12>
            <EventCard></EventCard>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
    import EventCard from './EventCard.vue'

    export default {
        components: {
            EventCard
        }
    };
</script>