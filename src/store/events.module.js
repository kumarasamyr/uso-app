const state = {
    selectedEvent: {}
}

const mutations = {
    selectEvent(state, event) {
        state.selectedEvent = event;
    }
}

const actions = {
    selectEvent({commit, state}, event) {
        commit('selectEvent', state, event);
    }
}

export const events = {
    namespaced: true,
    state,
    mutations,
    actions
}