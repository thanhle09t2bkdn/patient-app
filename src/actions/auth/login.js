import axios from 'axios';
export const AUTH_LOGIN = 'AUTH_LOGIN';
const ROOT_URL = `http://localhost:4000/api`;

export function login(data) {
    Object.keys(data).forEach((key) => (data[key] === "") && delete data[key]);

    return function(dispatch) {
        let response = axios(`${ROOT_URL}/login`, {
            method: 'post',
            data: data
        });
        return {type: AUTH_LOGIN, payload: response};
    }
}
