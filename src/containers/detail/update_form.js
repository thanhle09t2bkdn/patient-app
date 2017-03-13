import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePatient } from '../../actions/patient/update_patient';

import ReactDOM from 'react-dom';
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        avatar: '',
        imagePreviewUrl: '',
        name: '',
        birthday: '',
        // id: '',
        pastMediacation: '',
        tags: '',
        postalCode: '',
        gender: '',
        email: '',
        isPregnancy: '',
        elaboration: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.trigerInputFile = this.trigerInputFile.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.onPatientNameChange = this.onPatientNameChange.bind(this);
    this.onBirthdayChange = this.onBirthdayChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onPregnancyChange = this.onPregnancyChange.bind(this);
    this.onAddressChange = this.onGenderChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onElaborationChange = this.onElaborationChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onPostalCodeChange = this.onPostalCodeChange.bind(this);
    this.onPastMediaChange = this.onPastMediaChange.bind(this);
    // this.onPatientIdChange = this.onPatientIdChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.updatePatient('855f5f20-05bc-11e7-94be-71da41a91fc3', this.state);
  }
  imageChange(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        avatar: file.name,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  trigerInputFile() {
    ReactDOM.findDOMNode(this.refs.fileInput).click();
  }
  // onPatientIdChange(event) {
  //   this.setState({ id: event.target.value });
  // }
  onPatientNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onBirthdayChange(event) {
    this.setState({ birthday: event.target.value });
  }
  onGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  onPastMediaChange(event) {
    this.setState({ pastMediacation: event.target.value });
  }
  onTagChange(event) {
    this.setState({ tags: event.target.value });
  }
  onAddressChange(event) {
    this.setState({ address: event.target.value });
  }
  onPostalCodeChange(event) {
    this.setState({ postalCode: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPregnancyChange(event) {
    this.setState({ isPregnancy: event.target.value });
  }
  onElaborationChange(event) {
    this.setState({ elaboration: event.target.value });
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img className="default-img" src={imagePreviewUrl} onClick={ this.trigerInputFile } />);
    } else {
      imagePreview = (<img className="default-img" src="/uploads/images/No-image-found.jpg" onClick={ this.trigerInputFile } alt=""/>);
    }
    return (
        <form onSubmit={ this.onFormSubmit }>
          <div className="container detail-form">
            <div className="row">
              <div className="col-md-4 profile-photo left">
                  {imagePreview}
                  <input type="file" name="avatar" ref="fileInput" className="file-input"
                         onChange={ this.imageChange } />
              </div>
              <div className="col-md-4 col-xs-4 middle-form left">
                <div className="patient-form">
                  <label>PATIENT ID</label>
                  <input type="text" placeholder="1234" />
                </div>
                <div className="patient-form">
                  <label>PATIENT NAME</label>
                  <input type="text" onChange={ this.onPatientNameChange } defaultValue={ this.state.name } />
                </div>
              </div>
              <div className="col-md-4 col-xs-4 right-form left">
                <div className="patient-form">
                  <label>BIRTHDAY</label>
                  <input type="text" onChange={ this.onBirthdayChange } defaultValue={ this.state.birthday } />
                </div>
                <div className="patient-form">
                  <label>GENDER</label>
                  <div className="gender-group">
                    <div>
                      <input type="radio" name="gender" onChange={ this.onGenderChange } defaultValue='1' /> <label>Male</label>
                    </div>
                    <div>
                      <input type="radio" name="gender" onChange={ this.onGenderChange } defaultValue='0' /> <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="row textarea-form media">
              <label>PAST MEDIACATION</label>
              <textarea name="" placeholder="Mediaction" className="media-input" onChange={ this.onPastMediaChange } defaultValue={ this.state.pastMediacation }></textarea>
            </div>
            <div className="row textarea-form">
              <label>TAGS</label>
              <input name=""  placeholder="Add a tag" onChange={ this.onTagChange } defaultValue={ this.state.tags } />
            </div>
            <div className="divided"></div>
            <div className="row contact">
              <div className="col-md-2 left">
                <span className="contact-title">Contact</span>
              </div>
              <div className="col-md-10 left">
                <div className="row">
                  <div className="patient-form contact-form left">
                    <label>ADDRESS</label>
                    <input type="text" onChange={ this.onAddressChange } defaultValue={ this.state.address } />
                  </div>
                  <div className="patient-form contact-form contact-input-last left">
                    <label>POSTAL CODE</label>
                    <input type="text" onChange={ this.onPostalCodeChange } defaultValue={ this.state.postalCode } />
                  </div>
                  <div className="clear"></div>
                </div>
                <div className="row textarea-form contact-email">
                  <label>EMAIL</label>
                  <input type="text" className="email-input" onChange={ this.onEmailChange } defaultValue={ this.state.email } />
                </div>
                <div className="row">
                  <a className="add-more-contact" href="#">&#43; Add another contact</a>
                </div>
              </div>
            </div>
            <div className="divided"></div>
            <div className="clear"></div>
            <div className="row pregnancy">
              <span>Are you planing for pregnancy ?</span>
                <div className="pregnancy">
                  <input type="radio" name="isPregnancy" defaultValue={true} onChange={ this.onPregnancyChange } />
                  <label>Yes</label>
                </div>
                <div className="pregnancy">
                  <input type="radio" name="isPregnancy" defaultValue={false} onChange={ this.onPregnancyChange } />
                  <label>No</label>
                </div>
            </div>
            <div className="clear"></div>
            <div className="row">
                <div className="row textarea-form">
                  <label>IF YES, PLEASE ELABORATE</label>
                  <textarea placeholder="Elaborate" onChange={ this.onElaborationChange } defaultValue={ this.state.elaboration }></textarea>
                </div>
            </div>
            <div className="row submit">
              <button type="submit" className="btn btn-whatever navbar-btn">Save</button>
            </div>
          </div>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePatient }, dispatch);
}

export default connect(null, mapDispatchToProps)(UpdateForm);
/**
 * Created by sonvu on 12/03/2017.
 */
