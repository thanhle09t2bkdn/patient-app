import { combineReducers } from 'redux';
// import PatientReducer from './reducer_patient';
// import PatientSelected from './reducer_patient_selected';
import {fetchPatientReducer, selectPatientReducer, updatePatientReducer} from './patient_reducer';
const rootReducer = combineReducers({
  patients: fetchPatientReducer,
  patientSelected: selectPatientReducer
});

export default rootReducer;
