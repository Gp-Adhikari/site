import React from "react";
import locationIcon from "../img/location-icon.svg";
import mailIcon from "../img/mail-icon.svg";
import phoneIcon from "../img/phone-icon.svg";
const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
        <div className="Contact">
          <div className="Contact-box">
            <div className="Contact-text">
              <p>Let’s Talk</p>
              <div className="line"></div>
            </div>
            <h1>Speak With Expert Engineers.</h1>
          </div>
          <div className="contact-wrapper">
            <div className="contact-1">
              <img src={mailIcon} alt="phone" />
              <p>+977-9876543210</p>
            </div>
            <div className="contact-1">
              <img src={locationIcon} alt="mail" />
              <p>zpro.company@gmail.com</p>
            </div>
            <div className="contact-1">
              <img src={phoneIcon} alt="address" />
              <p>Bhaktapur, Nepal</p>
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <h3>Get In Touch</h3>
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="email" />
          <p>Phone Number</p>
          <input type="number" />
          <p>Subject</p>
          <input type="text" />
          <p>Message</p>
          <textarea type="textarea" id="#" cols="20" rows="4"></textarea>
          <button type="button">Submit</button>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
