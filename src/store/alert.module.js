const state = {
    type: null,
    message: null
};

const actions = {
    clear({commit} ) {
        commit('clear');
    },
    error({commit}, message) {
        commit('error', message);
    },
    success({commit}, message) {
        commit('success', message);
    }
};

const mutations = {
    clear(state) {
        state.type = null;
        state.message = null;
    },
    error(state, message) {
        state.type = 'error';
        state.message = message;
    },
    success(state, message) {
        state.type = 'success';
        state.message = message;
    }    
};

export const alert = {
    actions,
    mutations,
    namespaced: true,
    state
};
