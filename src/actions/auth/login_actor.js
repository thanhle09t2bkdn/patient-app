import axios from 'axios';
export const AUTH_LOGIN = 'AUTH_LOGIN';
import { API_URL } from '../../config';

export function login(data) {
    Object.keys(data).forEach((key) => (data[key] === "") && delete data[key]);

    return function(dispatch) {
        let response = axios(`${API_URL}/login`, {
            method: 'post',
            data: data
        });
        return {type: AUTH_LOGIN, payload: response};
    }
}
