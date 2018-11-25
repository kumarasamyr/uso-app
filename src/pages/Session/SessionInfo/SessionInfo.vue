<template>
      <v-container fluid text-xs-center>
        <v-layout row wrap>
          <v-flex class="session-info-img-container" xs12>
            Picture goes here
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h1><strong>Deployment Stress</strong></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean 
                  massa. Cum sociis natoque penatibus et magnis dis 
                  parturient montes, nascetur ridiculus mus. Donec quam 
                  felis, ultricies nec, pellentesque eu, pretium quis, 
                  sem. Nulla consequat massa quis enim. Donec pede justo, 
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis 
                  vitae, justo. Nullam dictum felis eu pede mollis 
                  pretium. Integer tincidunt.
            </p>
            <br>
            <h2>Speaker: Robert O'Neill</h2>
          </v-flex>
        </v-layout>
        <br>
        <v-layout>
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
        </v-layout>
        <br>
        <v-layout>
            <v-flex>
              <v-btn class="session-info-btn" small disabled>Resources</v-btn>
            </v-flex>
            <v-flex>
              <v-btn class="session-info-btn" small disabled>Take Notes</v-btn>
            </v-flex>
            <v-flex> 
              <v-btn class="session-info-btn" small disabled>Ask Questions</v-btn>
            </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .session-info-btn {
    font-size: 12px;
    border-radius: 10px;
  }
</style>
