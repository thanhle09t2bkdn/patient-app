import { FETCH_PATIENT } from '../actions/patient/fetch_patient';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_PATIENT:
    return action.payload.data.data;
  }
  return state;
}
