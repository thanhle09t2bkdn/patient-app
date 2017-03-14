import axios from 'axios';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
const ROOT_URL = `http://localhost:4000/api/patient`;
export function updatePatient(data) {
    Object.keys(data).forEach((key) => (data[key] === "") && (data[key] = null));
    let request = axios({
      method: 'put',
      url: `${ROOT_URL}/update/${data.id}`,
      data: data
    });
    return {
        type: UPDATE_PATIENT,
        payload: request
    };
}
