const state = {
    selectedSession: {}
}

const mutations = {
    selectSession(state, session) {
        state.selectedSession = session
    }
}

const actions = {
    selectedSession({commit, state}, session) {
        commit('selectSession', state, session)
    }
}

export const sessions = {
    namespaced: true,
    state,
    mutations,
    actions
}