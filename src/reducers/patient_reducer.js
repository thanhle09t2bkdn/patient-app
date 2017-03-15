/**
 * Created by sonvu on 15/03/2017.
 */
import { FETCH_PATIENT, PATIENT_SELECTED, UPDATE_PATIENT } from '../actions/patient/patient_actor';
export function fetchPatientReducer(state = [], action) {
  switch (action.type) {
  case FETCH_PATIENT:
    return action.payload.data.data;
  }
  return state;
}

export function selectPatientReducer(state = null, action) {
  switch (action.type) {
  case PATIENT_SELECTED:
    return action.payload.data.data;
  }
  return state;
}

export function updatePatientReducer(state = null, action) {
  switch (action.type) {
  case UPDATE_PATIENT:
    return action.payload.data.data;
  }
  return state;
}
