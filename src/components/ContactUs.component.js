import React, { useEffect, useContext, useState } from "react";
import locationIcon from "../img/location-black.svg";
import mailIcon from "../img/mail-black.svg";
import phoneIcon from "../img/phone-black.svg";
import Banner from "./Banner.component";

import confetti from "canvas-confetti";
import { url } from "../URL";

import { TokenContext } from "../Contexts/TokenContext";

const ContactUs = () => {
  const { csrfToken } = useContext(TokenContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isEmailValid, setEmailValid] = useState("");

  const [isNameEmpty, setIsNameEmpty] = useState("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState("");
  const [isSubjectEmpty, setIsSubjectEmpty] = useState("");
  const [isMessageEmpty, setIsMessageEmpty] = useState("");

  const validateEmail = (email) => {
    const key =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email).toLowerCase().match(key);
  };

  const validateNumber = (txt) => {
    const n = txt.replace(/[^0-9]/g, "");
    setPhoneNumber(n);
  };

  const submitForm = (name, email, phoneNumber, subject, message) => {
    if (name === "") return setIsNameEmpty(true);
    if (name.length > 50) return setIsNameEmpty("characterLimitMax");
    if (name.length < 2) return setIsNameEmpty("characterLimitMin");
    setIsNameEmpty(false);

    if (email === "") return setEmailValid(false);
    if (email.length > 50) return setEmailValid("characterLimitMax");
    if (!validateEmail(email)) return setEmailValid("invalid");
    setEmailValid(true);

    if (phoneNumber === "") return setIsPhoneEmpty(true);
    if (phoneNumber.length > 20) return setIsPhoneEmpty("characterLimitMax");
    if (phoneNumber.length < 5) return setIsPhoneEmpty("characterLimitMin");
    setIsPhoneEmpty(false);

    if (subject === "") return setIsSubjectEmpty(true);
    if (subject.length > 150) return setIsSubjectEmpty("characterLimitMax");
    if (subject.length < 10) return setIsSubjectEmpty("characterLimitMin");
    setIsSubjectEmpty(false);

    if (message === "") return setIsMessageEmpty(true);
    if (message.length < 10) return setIsMessageEmpty("characterLimitMin");
    if (message.length > 1000) return setIsMessageEmpty("characterLimitMax");
    setIsMessageEmpty(false);

    fetch(url + "/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xsrf-token": csrfToken,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        ph: phoneNumber,
        subject: subject,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {isNameEmpty === true ? (
                  <p className="redMessage">
                    Name Field is required and must be between 2 and 50
                    characters.
                  </p>
                ) : isNameEmpty === "characterLimitMin" ? (
                  <p className="redMessage">
                    Name Field is required and must be between 2 and 50
                    characters.
                  </p>
                ) : isNameEmpty === "characterLimitMax" ? (
                  <p className="redMessage">
                    Name Field is required and must be between 2 and 50
                    characters.
                  </p>
                ) : null}
              </div>
              <div className="formInput">
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isEmailValid === false ? (
                  <p className="redMessage">
                    Email Field is required and must be a valid email address.
                  </p>
                ) : isEmailValid === "characterLimitMax" ? (
                  <p className="redMessage">
                    Email Field is required and must be less than 50 characters.
                  </p>
                ) : isEmailValid === "invalid" ? (
                  <p className="redMessage">Invalid Email.</p>
                ) : null}
              </div>
              <div className="formInput">
                <p>Phone Number</p>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => validateNumber(e.target.value)}
                />
                {isPhoneEmpty === true ? (
                  <p className="redMessage">
                    Phone Number is required and must be between 5 and 10
                    characters.
                  </p>
                ) : isPhoneEmpty === "characterLimitMin" ? (
                  <p className="redMessage">
                    Phone Number is required and must be between 5 and 10
                    characters.
                  </p>
                ) : isPhoneEmpty === "characterLimitMax" ? (
                  <p className="redMessage">
                    Phone Number is required and must be between 5 and 10
                    characters.
                  </p>
                ) : null}
              </div>
              <div className="formInput">
                <p>Subject</p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {isSubjectEmpty === true ? (
                  <p className="redMessage">
                    Subject is required and must be between 10 and 150
                    characters.
                  </p>
                ) : isSubjectEmpty === "characterLimitMin" ? (
                  <p className="redMessage">
                    Subject is required and must be between 10 and 150
                    characters.
                  </p>
                ) : isSubjectEmpty === "characterLimitMax" ? (
                  <p className="redMessage">
                    Subject is required and must be between 10 and 150
                    characters.
                  </p>
                ) : null}
              </div>
              <div className="formInput">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Message</p>
                  {isMessageEmpty === true ? (
                    <p
                      className="redMessage"
                      style={{ marginTop: "0", marginLeft: "0.5rem" }}
                    >
                      *Required
                    </p>
                  ) : isMessageEmpty === "characterLimitMin" ? (
                    <p
                      className="redMessage"
                      style={{ marginTop: "0", marginLeft: "0.5rem" }}
                    >
                      *Must have atleast 10 characters.
                    </p>
                  ) : null}
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <p
                  style={
                    message.length > 1000
                      ? { color: "red", fontSize: "12px" }
                      : { color: "#fff", fontSize: "12px" }
                  }
                >
                  {message.length} / 1000
                </p>
              </div>
              <input
                type="button"
                value="Submit"
                onClick={() => {
                  submitForm(name, email, phoneNumber, subject, message);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
