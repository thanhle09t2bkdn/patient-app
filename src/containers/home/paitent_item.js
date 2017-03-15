import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailPatient } from '../../actions/patient/patient_actor';
class PatientItem extends Component {
  constructor(props) {
    super(props);
  }
  clickOnPatient(patient) {
      this.props.getDetailPatient(patient.id).then(response => {
          browserHistory.push(`${patient.id}`);
      });

  }
  render() {
      let patient = this.props.patient;
      return (
        <div className="media" onClick={() => {this.clickOnPatient(patient)}}>
            <div className="media-left">
                <img src={ patient.avatar ? `/uploads/${patient.avatar}` : `/uploads/images/no-avatar.png`} alt="" className="media-object"  />
            </div>
            <div className="media-body">
                <h4 className="media-heading"><b>{ patient.name }</b></h4>
                <div className="patient-detail">
                    <div className="row">
                        <div className="col-md-6 nopadding"> CP &bull; Fulltime &bull; Need appointment
                        </div>
                        <div className="col-md-6 nopadding"> <span></span> New York
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 nopadding">Update</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        );
  }
}

function mapStateToProps({ patientSelected }) {
  return { patientSelected };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetailPatient }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientItem);
