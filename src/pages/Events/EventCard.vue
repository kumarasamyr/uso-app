<template>
    <v-card>
        <v-img
         class="white--text"
         height="200px"
         src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <v-flex xs12 offset-xs1>
            <h3>{{event.name}}</h3>
        </v-flex>
        <v-flex xs12 offset-xs1>
            <p>{{event.description}}</p>
        </v-flex>
        <v-flex xs12 offset-xs1>
            <h4>{{event.startDate}}</h4>
        </v-flex>
    </v-card>
</template>

<script>
export default {
    props: ['event']
};
</script>

<style scoped>
p {
    margin-bottom: 0px;
}
</style>
