import request from './common.service';
import store from '../store';
import { CONFIG } from '../config/config';

const baseUrl = CONFIG.api.users;

function changePassword(data) {
    // TODO
    return request.put(baseUrl + `/users/${store.state.account.userId}/password`, data);
}

function createProfile(data) {
    // TODO
    console.log(data);
}

function forgotPassword(data) {
    // TODO
    console.log(data);
}

function getNotifications() {
    return request.get(baseUrl + `/users/${store.state.account.userId}/notifications`);
}

function getUserInfo() {
    return request.get(baseUrl + `/users/${store.state.account.userId}`);
}

function login(data) {
    if (!isNaN(parseInt(data.userid))) {
        data.userid = parseInt(data.userid);
    }
    return request.put(baseUrl + '/users', data);
}

function register(data) {
    if (!isNaN(parseInt(data.userid))) {
        data.userid = parseInt(data.userid);
    }
    return request.post(baseUrl + '/users', data)
}

export const userService = {
    changePassword,
    createProfile,
    forgotPassword,
    getNotifications,
    getUserInfo,
    login,
    register
}
