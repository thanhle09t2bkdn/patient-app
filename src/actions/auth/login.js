import axios from 'axios';
export const AUTH_LOGIN = 'AUTH_LOGIN';
const ROOT_URL = `http://localhost:4000/api`;

export function login(data) {
    Object.keys(data).forEach((key) => (data[key] === "") && delete data[key]);
    let request = axios({
        method: 'post',
        url: `${ROOT_URL}/login`,
        data: data
    });
    return {
        type: AUTH_LOGIN,
        payload: request
    };
}
