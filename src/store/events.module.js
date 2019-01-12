import { attendeesService } from '../services';

const state = {
    selectedEvent: {}
}

const mutations = {
    selectEvent(state, event) {
        state.selectedEvent = event
    }
}

const actions = {
    selectEvent({commit}, event) {
        commit('selectEvent', event)
    },
    getAttendees({}, eventId) {
        attendeesService.getAttendees(eventId).then (
            response => {
                return response;
            }, error => {
                Vue.$log.error(error.message);
            }
        )
    }
}

export const events = {
    namespaced: true,
    state,
    mutations,
    actions
}