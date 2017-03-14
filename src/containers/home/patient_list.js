import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatient } from '../../actions/patient/fetch_patient';
import { Link } from 'react-router'

class PatientList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchPatient();
    }
    renderPatient(patient) {
        return (
            <div className="media" key={ patient.id }>
                <Link to={patient.id}>
                    <div className="media-left">
                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" alt="" className="media-object"  />
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
                </Link>
                <hr />
            </div>
        );
    }

    render() {
        if(this.props.patients) {
            return (
                <div className="col-md-9 content rigt-bar">
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
