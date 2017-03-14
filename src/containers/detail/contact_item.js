import React, { Component } from 'react';
class ContactItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      let contact = {
          address: '',
          postCode: '',
          email: ''
      }
      if (this.props.contact) {
          contact = this.props.contact;
      }
      let addressName = `address_${this.props.order}`;
      let postalCodeName = `postalCode_${this.props.order}`;
      let emailName = `email_${this.props.order}`;
    return (
    <div className="row contact">
        <div className="col-md-2 left">
          <span className="contact-title">Contact {this.props.order+1}</span>
        </div>
        <div className="col-md-10 left">
          <div className="contact-form">
            <div className="row">
                <div className="patient-form contact-form left">
                  <label>ADDRESS</label>
                  <input type="text" defaultValue={ contact.address } name={addressName} onChange={ this.props.onChangeContact } />
                </div>
                <div className="patient-form contact-form contact-input-last left">
                  <label>POSTAL CODE</label>
                  <input type="number" defaultValue={ contact.postalCode } name={postalCodeName} onChange={ this.props.onChangeContact } />
                </div>
                <div className="clear"></div>
                <div className="row textarea-form contact-email">
                  <label>EMAIL</label>
                  <input type="email" className="email-input" defaultValue={ contact.email } name={emailName} onChange={ this.props.onChangeContact } />
                </div>
                <div className="clear"></div>
            </div>
              <div className="clear"></div>
          </div>
        </div>
    </div>
    );
  }
}

export default (ContactItem);
