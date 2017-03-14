import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatient } from '../../actions/patient/fetch_patient';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
      if(this.state.term !== '') {
          this.props.fetchPatient(this.state.term);
          this.setState({ term: '' });
      }
  }

  render() {
    return (
        <div className="container-fluid">
          <form onSubmit={ this.onFormSubmit }>
            <div className="row">
              <div className="col-md-11">
                <div className="row">
                  <div className="col-md-6 search-input">
                    <input type="text" className="form-control"
                           placeholder="Enter patient id, name, phone..."
                           value={ this.state.term }
                           onChange={ this.onInputChange }/>
                  </div>
                  <div className="col-md-6 search-input">
                    <input type="text" className="form-control" placeholder="Find in all hospital" />
                  </div>
                </div>
              </div>
              <div className="col-md-1 search-button">
                <button type="submit" className="btn btn-whatever navbar-btn">
                  <span className="glyphicon glyphicon-search"></span>
                  Find
                </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPatient }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
