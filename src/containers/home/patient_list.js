import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatient } from '../../actions/patient/fetch_patient';
import PatientItem from '../../containers/home/paitent_item';

class PatientList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchPatient();
    }

    renderPatient(patient) {
        return (
            <PatientItem key={ patient.id } patient={patient} />
        );
    }

    render() {
        if(this.props.patients) {
            return (
                <div className="col-md-9 content rigt-bar" onClick={this.onClickPatient}>
                    <h3 className="result-title">{this.props.patients.length} results</h3>
                    { this.props.patients.map(this.renderPatient) }
                </div>
            );
        } else {
          return (<div>Loading...</div>)
        }
    }
}

function mapStateToProps({ patients }) {
  return { patients };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPatient: fetchPatient }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
