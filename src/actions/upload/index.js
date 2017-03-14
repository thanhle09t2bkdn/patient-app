import axios from 'axios';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
const ROOT_URL = `http://localhost:4000/api`;
export function upload(data) {
    Object.keys(data).forEach((key) => (data[key] === "") && (data[key] = null));
    let request = axios({
        method: 'post',
        url: `${ROOT_URL}/upload`,
        data: data
    });
    return {
        type: UPLOAD_IMAGE,
        payload: request
    };
}
