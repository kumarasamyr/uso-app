import axios from 'axios'

export const userService = {
    login
}

function login() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}