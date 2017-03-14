import { combineReducers } from 'redux';
import PatientReducer from './reducer_patient';
import PatientSelected from './reducer_patient_selected';

const rootReducer = combineReducers({
  patients: PatientReducer,
  patientSelected: PatientSelected
});

export default rootReducer;
