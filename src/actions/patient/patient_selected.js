import axios from 'axios';

export const PATIENT_SELECTED = 'PATIENT_SELECTED';
const ROOT_URL = `http://localhost:4000/api/patient`;
export function getDetailPatient(id) {
    let request = axios.get(`${ROOT_URL}/${id}`);
    return {
        type: PATIENT_SELECTED,
        payload: request
    };
}
