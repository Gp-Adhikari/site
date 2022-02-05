import React, { useEffect } from "react";
import locationIcon from "../img/location-black.svg";
import mailIcon from "../img/mail-black.svg";
import phoneIcon from "../img/phone-black.svg";
import Banner from "./Banner.component";

import confetti from "canvas-confetti";

const ContactUs = () => {
  //confetti for this page
  useEffect(() => {
    document.title = "Contact Us - Zpro";
    let end = Date.now() + 1 * 1000;

    // go Buckeyes!
    let colors = ["#f6a01f", "#ffffff"];

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
      <div className="contactUsContainer">
        <div className="contactUsContent">
          <div className="contactUsLeftPart">
            <div className="leftTit">
              <p className="HighlightedText">Let's Talk</p>
              <div className="line"></div>
            </div>
            <pre>
              Speak With
              <br />
              <code className="HighlightedText">
                Expert <br />
              </code>
              Engineers.
            </pre>
            <div className="contactDetails">
              <div className="contactDetail">
                <div className="Icon">
                  <img src={phoneIcon} alt="location" />
                </div>
                <p>+977-9876543210</p>
              </div>
              <div className="contactDetail">
                <div className="Icon">
                  <img src={mailIcon} alt="location" />
                </div>
                <p>zpro.company@gmail.com</p>
              </div>
              <div className="contactDetail">
                <div className="Icon">
                  <img src={locationIcon} alt="location" />
                </div>
                <p>Bhaktapur, Nepal</p>
              </div>
            </div>
          </div>
          <div className="contactUsRightPart">
            <p className="tit">Get In Touch</p>
            <form action="#">
              <div className="formInput">
                <p>Name</p>
                <input type="text" />
              </div>
              <div className="formInput">
                <p>Email</p>
                <input type="email" />
              </div>
              <div className="formInput">
                <p>Phone Number</p>
                <input type="number" />
              </div>
              <div className="formInput">
                <p>Subject</p>
                <input type="text" />
              </div>
              <div className="formInput">
                <p>Message</p>
                <textarea cols="30" rows="10"></textarea>
              </div>
              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
