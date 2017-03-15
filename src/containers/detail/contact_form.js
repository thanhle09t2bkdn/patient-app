import React, { Component } from 'react';
import ContactItem from '../../containers/detail/contact_item';
const ContactForm = (props) => {
    let count = 1;
    const contactItem = props.contacts.map((contact) => {
        return (
            <ContactItem key={count++} />
        );
    });
    return (
        <div>
            {contactItem}
        </div>
    );
};
export default ContactForm;
