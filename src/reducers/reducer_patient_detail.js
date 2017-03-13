import { DETAIL_PATIENT } from '../actions/patient/get_detail_patient';

export default function(state = [], action) {
  switch (action.type) {
  case DETAIL_PATIENT:
    return action.payload.data.data;
  }
  return state;
}
