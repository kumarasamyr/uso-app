<template>
  <v-app>
    <top-bar></top-bar>
    <v-content>
      <div class="text-xs-center"><v-alert transition="slide-y-transition" style="position: absolute; z-index: 2; width: 100%;" v-if="alert.message" :value="true" :type="alert.type" dismissible>{{alert.message}}</v-alert></div>
      <transition name="fade">
        <router-view/>
      </transition>
    </v-content>
    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import topBar from "./components/TopBar";
import bottomBar from "./components/BottomBar";
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      // fab: "home",
      bottomNav: 0
    };
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  components: {
    topBar,
    bottomBar
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
