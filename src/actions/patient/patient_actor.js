/**
 * Created by sonvu on 15/03/2017.
 */
import axios from 'axios';
import { ROOT_URL } from '../../config';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const PATIENT_SELECTED = 'PATIENT_SELECTED';

export function fetchPatient(term) {
    if (!term) {
        let request = axios.get(`${ROOT_URL}/patient/index`);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    } else {
        let request = axios.get(`${ROOT_URL}/patient/index/${term}`);
        return {
            type: FETCH_PATIENT,
            payload: request
        };
    }
}
export function getDetailPatient(id) {
    let request = axios.get(`${ROOT_URL}/patient/${id}`);
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
      data: data
    });
    return { type: UPDATE_PATIENT, payload: response };
  }
}
