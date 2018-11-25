<template>
    <v-card>
        <v-img
         class="white--text"
         height="200px"
         src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <v-flex xs12 offset-xs1>
            <h2>{{event.name}}</h2>
        </v-flex>
        <v-flex xs12 offset-xs1>
            <p>{{event.description}}</p>
        </v-flex>
        <v-flex xs12 offset-xs1>
            <h3>{{event.startDate}}</h3>
        </v-flex>
    </v-card>
</template>

<script>
export default {
    props: ['event']
};
</script>
