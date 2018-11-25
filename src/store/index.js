import Vue from 'vue'
import Vuex from 'vuex'

// Module imports
import { account } from './account.module'
import { events } from './events.module'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //prevents mutation of store directly
  modules: {
    account,
    events
  }
});
