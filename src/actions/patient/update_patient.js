import axios from 'axios';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
const ROOT_URL = `http://localhost:4000/api/patient`;
export function updatePatient(id, data) {
  Object.keys(data).forEach((key) => (data[key] === "") && (data[key] = null));
  return function(dispatch) {
    let response = axios(`${ROOT_URL}/update/${id}`, {
      method: 'put',
      data: data
    });
    return { type: UPDATE_PATIENT, payload: response };
  }
}

