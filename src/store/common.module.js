const state = {
    backlink: '',
    heading: '',
    showBackButton: false
};

const actions = {
    setNewBacklink({commit}, link) {
        commit('newBacklink', link);
    },
    setNewHeading({commit}, heading) {
        commit('newHeading', heading);
    },
    setShowBackButton({commit}, show) {
        commit('showBackButton', show);
    }
};

const mutations = {
    newBacklink(state, link) {
        state.backlink = link;
    },
    newHeading(state, heading) {
        state.heading = heading;
    },
    showBackButton(state, show) {
        state.showBackButton = show;
    }
};

export const common = {
    actions,
    mutations,
    namespaced: true,
    state
};
