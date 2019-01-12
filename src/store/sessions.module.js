const state = {
    selectedSession: {}
}

const mutations = {
    selectSession(state, session) {
        state.selectedSession = session
    }
}

const actions = {
    setSelectedSession({commit}, session) {
        commit('selectSession', session)
    }
}

export const sessions = {
    namespaced: true,
    state,
    mutations,
    actions
}