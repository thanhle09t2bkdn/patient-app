import { combineReducers } from 'redux';
import PatientReducer from './reducer_patient';

const rootReducer = combineReducers({
  patient: PatientReducer
});

export default rootReducer;
