import {userService} from '../services';
import router from '../router.js';

const userid = localStorage.getItem('userid');
const state = userid
    ? { status: { loggedIn: true }, userid: userid, userInfo: null }
    : { status: {}, userid: null, userInfo: null };

const actions = {
    login({ commit, dispatch }, { email, password }) {
        commit('loginRequest');
        let data = {
            userid: email,
            password: password
        };
        userService.login(data)
            .then(
                response => {
                    if (response.data.exit_code) {
                        console.error(response.data.message);
                        commit('registerFailure');
                        dispatch('alert/error', 'Email or password is incorrect', {root: true});
                    } else {
                        commit('loginSuccess', response.data.userId);
                        localStorage.setItem('userid', response.data.userId);
                        // router.push('/');
                        userService.getUserInfo(state.userid)
                            .then(response => {
                                commit('getUserInfo', response.data);
                                // console.log(response.data);
                                router.push('/');
                            }, error => {
                                console.error(error);
                            }
                        );
                    }
                },
                error => {
                    commit('loginFailure', error);
                    console.error(error);
                }
            );
    },
    getUserInfo({commit}) {
        userService.getUserInfo(state.userid)
            .then(response => {
                // console.log('getUserInfo response: ', response.data);
                commit('getUserInfo', response.data);
            }, error => {
                console.error(error);
            }
        );
    },
    logout({commit}) {
        userService.logout();
        commit('logoutSuccess');
        router.push('/');        
    },
    register({commit, dispatch}, {email, password}) {
        commit('registerRequest');
        let data = {
            userid: email,
            temporaryPassword: password
        };
        userService.register(data)
            .then(
                response => {
                    if (response.data.exit_code) {
                        console.error(response.data.message);
                        commit('registerFailure');
                        dispatch('alert/error', 'Email or password is incorrect', {root: true});
                    } else {
                        commit('registerSuccess', response.data.userId);
                        localStorage.setItem('userid', response.data.userId);
                        router.push('/setup');
                    }
                }, error => {
                    commit('registerFailure');
                    console.error(error);
                }
            );
    }
};

const mutations = {
    loginRequest(state) {
        state.status = { loggingIn: true };
    },
    loginSuccess(state, userid) {
        state.status = { loggedIn: true };
        state.userid = userid;
    },
    loginFailure(state) {
        state.status = {};
    },
    logoutSuccess(state) {
        state.status = {};
        state.userid = null;
    },
    getUserInfo(state, data) {
        state.userInfo = data;
    },
    registerRequest(state) {
        state.status = {
            registering: true
        };
    },
    registerSuccess(state, userid) {
        state.status = {
            userid: userid,
            registered: true
        }
    },
    registerFailure(state) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};