import { UPDATE_PATIENT } from '../actions/patient/update_patient';

export default function(state = null, action) {
  switch (action.type) {
  case UPDATE_PATIENT:
    return action.payload.data.data;
  }
  return state;
}
