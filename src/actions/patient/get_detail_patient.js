import axios from 'axios';

export const DETAIL_PATIENT = 'DETAIL_PATIENT';
const ROOT_URL = `http://localhost:4000/api/patient`;
export function getPatient(id) {
    let request = axios.get(`${ROOT_URL}/patient/${id}`);
    return {
        type: DETAIL_PATIENT,
        payload: request
    };
}
