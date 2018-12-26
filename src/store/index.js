import Vue from 'vue'
import Vuex from 'vuex'

// Module imports
import { account } from './account.module'
import { events } from './events.module'
import { sessions } from './sessions.module'
import { alert } from './alert.module'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //prevents mutation of store directly
  modules: {
    account,
    events,
    sessions,
    alert
  }
});
