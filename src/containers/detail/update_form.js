import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetailPatient } from '../../actions/patient/patient_selected';
import { updatePatient } from '../../actions/patient/update_patient';
import ContactItem from '../../containers/detail/contact_item';
const $ = require ('jquery');

import ReactDOM from 'react-dom';
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imagePreviewUrl: null,
        countContact: null,
        patient: {
          avatar: null,
          name: null,
          birthday: null,
          id: this.props.id,
          pastMediacation: null,
          tags: null,
          gender: null,
          pregnancy: null,
          elaboration: null,
          contact: {}
        }
    };
    this.props.getDetailPatient(this.props.id).then((response) => {
      let data = response.payload.data.data;
      Object.assign(this.state.patient, data);
      this.setState({ countContact: JSON.parse(data.contact).length });
    }).catch((error) => {
      return error;
    });
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.trigerInputFile = this.trigerInputFile.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.onAddContact = this.onAddContact.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
  }

  onFormSubmit(event) {
      event.preventDefault();
      this.props.updatePatient(this.state.patient);
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
  // onAddressChange(event) {
  //   let newContact = JSON.parse(this.state.contact);
  //   newContact.address = event.target.value;
  //   newContact = JSON.stringify(newContact);
  //   this.setState({ contact: newContact });
  // }
  // onPostalCodeChange(event) {
  //   let newContact = JSON.parse(this.state.contact);
  //   newContact.postalCode = event.target.value;
  //   newContact = JSON.stringify(newContact);
  //   this.setState({ contact: newContact });
  // }
  // onEmailChange(event) {
  //   let newContact = JSON.parse(this.state.contact);
  //   newContact.email = event.target.value;
  //   newContact = JSON.stringify(newContact);
  //   this.setState({ contact: newContact });
  // }
  onChangeData(event) {
    const field = event.target.name;
    const patient = this.state.patient;
    patient[field] = event.target.value;
    this.setState({ patient });
  }
  onAddContact(event) {
    this.setState({ countContact: ++this.state.countContact });
  }

  renderForm(patientSelected) {
    let contacts = JSON.parse(patientSelected.contact);
    const contactItem = [];
    for (var i = 0; i < this.state.countContact; i += 1) {
        contactItem.push(<ContactItem key={i} order={i} contact={ contacts[i] } onChangeData={ this.onChangeData } />);
    };
    let maleChecked = false;
    let femaleChecked = false;
    let notPregnancy = null;
    if (patientSelected.gender === 0) {
        femaleChecked = true;
    } else {
        maleChecked = true;
    }
    if (!patientSelected.pregnancy) {
      notPregnancy = true;
    }
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img className="default-img" src={ imagePreviewUrl } onClick={ this.trigerInputFile } />);
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
                <input type="text" disabled="disabled" placeholder="1234" defaultValue={ this.props.id } />
              </div>
              <div className="patient-form">
                <label>PATIENT NAME</label>
                <input type="text" onChange={ this.onChangeData } name="name" defaultValue={ patientSelected.name } />
              </div>
            </div>
            <div className="col-md-4 col-xs-4 right-form left">
              <div className="patient-form">
                <label>BIRTHDAY</label>
                <input type="text" onChange={ this.onChangeData } name="birthday" defaultValue={ patientSelected.birthday } />
              </div>
              <div className="patient-form">
                <label>GENDER</label>
                <div className="gender-group">
                  <div>
                    <input type="radio" name="gender" onChange={ this.onChangeData } defaultValue='1' defaultChecked={ maleChecked } /> <label>Male</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" onChange={ this.onChangeData } defaultValue='0' defaultChecked={ femaleChecked } /> <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
          <div className="row textarea-form media">
            <label>PAST MEDIACATION</label>
            <textarea name="pastMediacation" placeholder="Mediaction" className="media-input" onChange={ this.onChangeData } defaultValue={ patientSelected.pastMediacation }></textarea>
          </div>
          <div className="row textarea-form">
            <label>TAGS</label>
            <input name="tags"  placeholder="Add a tag" onChange={ this.onChangeData } defaultValue={ patientSelected.tags } />
          </div>
          <div className="divided"></div>
          <div className="row contact">
            <div className="col-md-2 left">
              <span className="contact-title">Contact</span>
            </div>
            <div className="col-md-10 left">
              <div className="contact-form">
                { contactItem }
              </div>
              <div className="row">
                <a className="add-more-contact" onClick={ this.onAddContact }>&#43; Add another contact</a>
              </div>
            </div>
          </div>
          <div className="divided"></div>
          <div className="clear"></div>
          <div className="row pregnancy">
            <span>Are you planing for pregnancy ?</span>
              <div className="pregnancy">
                <input type="radio" name="pregnancy" defaultValue={ true } defaultChecked={ patientSelected.pregnancy } onChange={ this.onChangeData } />
                <label>Yes</label>
              </div>
              <div className="pregnancy">
                <input type="radio" name="pregnancy" defaultValue={ false } defaultChecked={ notPregnancy } onChange={ this.onChangeData } />
                <label>No</label>
              </div>
          </div>
          <div className="clear"></div>
          <div className="row">
              <div className="row textarea-form">
                <label>IF YES, PLEASE ELABORATE</label>
                <textarea name="elaboration" placeholder="Elaborate" onChange={ this.onChangeData } defaultValue={ patientSelected.elaboration }></textarea>
              </div>
          </div>
          <div className="row submit">
            <button type="submit" className="btn btn-whatever navbar-btn">Save</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    if(this.props.patientSelected) {
      return (
        this.renderForm(this.props.patientSelected)
      );
    } else {
      return (<div>Loading...</div>);
    }
  }
}

function mapStateToProps({ patientSelected }) {
  return { patientSelected };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updatePatient, getDetailPatient }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
/**
 * Created by sonvu on 12/03/2017.
 */