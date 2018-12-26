import axios from 'axios'

export const userService = {
    login,
    logout,
    getUserInfo,
    register
}

function login(data) {
    return axios.put('http://54.146.128.49:8080/users', data);
}

function logout() {
    localStorage.removeItem('userid');
}

function getUserInfo(userid) {
    userid;
    // return axios.post('http://54.146.128.49:8080/users' + '/' + userid);
    return axios.get('userInfo.json');
}

function register(data) {
    return axios.post('http://54.146.128.49:8080/users', data)
}