import { PATIENT_SELECTED } from '../actions/patient/patient_selected';

export default function(state = null, action) {
  switch (action.type) {
  case PATIENT_SELECTED:
    return action.payload.data.data;
  }
  return state;
}
