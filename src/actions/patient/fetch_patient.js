import axios from 'axios';

export const FETCH_PATIENT = 'FETCH_PATIENT';
const ROOT_URL = `http://localhost:4000/api/patient`;
export function fetchPatient(term) {
    if (!term) {
        let request = axios.get(`${ROOT_URL}/index`);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    } else {
        let request = axios.get(`${ROOT_URL}/index/${term}`);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    }
}
