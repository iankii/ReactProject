import React from 'react';
import InputBox from './../../components/GlobalComponents/InputBox';
import Button from './../../components/GlobalComponents/Button';

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us">
        <div className="contact-details">
          <div className="contact-title"><span>CONTACT</span></div>
          <div className="contact-intro"><span>I'm a Web Developer.</span></div>
          <div className="contact-email"><span>email - ankit.pal2011@gmail.com</span></div>
        </div>
        <div className="contact-form">
          <div className="required-fields">
            <InputBox name="input-name" placeholder="Name" />
            <InputBox name="input-email" placeholder="Email" />
          </div>
          <InputBox name="input-subject" placeholder="Subject" />
          <InputBox name="input-message" placeholder="Message" />
          <Button />
        </div>
      </div>
    )
  }
}

export default ContactUs;