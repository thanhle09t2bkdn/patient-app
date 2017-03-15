/**
 * Created by sonvu on 15/03/2017.
 */
import axios from 'axios';
import { ROOT_URL } from '../../config';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const PATIENT_SELECTED = 'PATIENT_SELECTED';
import util from '../../utils/Auth'
const header = {
    headers: { 'Authorization': `Bearer ${util.getToken()}` }
}
export function fetchPatient(term) {
    if (!term) {
        let request = axios.get(`${ROOT_URL}/patient/index`, header);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    } else {
        let request = axios.get(`${ROOT_URL}/patient/index/${term}`, header);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    }
}
export function getDetailPatient(id) {
    let request = axios.get(`${ROOT_URL}/patient/${id}`, header);
    return {
        type: PATIENT_SELECTED,
        payload: request
    };
}
export function updatePatient(id, data) {
  Object.keys(data).forEach((key) => (data[key] === "") && (data[key] = null));
  return function(dispatch) {
    let response = axios(`${ROOT_URL}/patient/update/${id}`, {
        method: 'put',
        data: data,
        headers: header.headers
    });
    return { type: UPDATE_PATIENT, payload: response };
  }
}
