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
      // console.log(contact);
      let addressName = `address${this.props.order}`;
    return (
        <div>
            <div className="row">
                <div className="patient-form contact-form left">
                  <label>ADDRESS</label>
                  <input type="text" defaultValue={ contact.address } name={addressName} onChange={ this.props.onChangeData } />
                </div>
                <div className="patient-form contact-form contact-input-last left">
                  <label>POSTAL CODE</label>
                  <input type="number" defaultValue={ contact.postalCode } name="postalCode" />
                </div>
                <div className="clear"></div>
                <div className="row textarea-form contact-email">
                  <label>EMAIL</label>
                  <input type="email" className="email-input" defaultValue={ contact.email } name="email" />
                </div>
                <div className="clear"></div>
            </div>
            <div className="clear"></div>
        </div>
    );
  }
}

export default (ContactItem);
