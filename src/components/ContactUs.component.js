import React, { useEffect } from "react";
import locationIcon from "../img/location-black.svg";
import mailIcon from "../img/mail-black.svg";
import phoneIcon from "../img/phone-black.svg";
import Banner from "./Banner.component";

import confetti from "canvas-confetti";

const ContactUs = () => {
  //confetti for this page
  useEffect(() => {
    var end = Date.now() + 1 * 1000;

    // go Buckeyes!
    var colors = ["#f6a01f", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 50,
        origin: { x: 0, y: 1 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 50,
        origin: { x: 1, y: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <>
      <Banner text1="Contact Us" />
      <div className="contactContent">
        <div className="contact-container">
          <div className="Contact">
            <div className="Contact-box">
              <div className="Contact-text">
                <p>Let’s Talk</p>
                <div className="line"></div>
              </div>
              <h1>
                Speak With <code>Expert</code> Engineers.
              </h1>
            </div>
            <div className="contact-wrapper">
              <div className="contact-1">
                <div className="contact-icon">
                  <img src={phoneIcon} alt="phone" />
                </div>
                <p>+977-9876543210</p>
              </div>
              <div className="contact-1">
                <div className="contact-icon">
                  <img src={mailIcon} alt="phone" />
                </div>
                <p>zpro.company@gmail.com</p>
              </div>
              <div className="contact-1">
                <div className="contact-icon">
                  <img src={locationIcon} alt="phone" />
                </div>
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
            <textarea type="textarea" cols="40" rows="5"></textarea>
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
