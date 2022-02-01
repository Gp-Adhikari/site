import React, { useContext, useEffect, useRef, useState } from "react";
import { url } from "../../URL";
import adminLogo from "../img/admin_logo.svg";

import { TokenContext } from "../../Contexts/TokenContext";

const AdminLogin = () => {
  useEffect(() => {
    document.title = "Admin Login";
  }, []);

  const { csrfToken, setToken } = useContext(TokenContext);

  const emailRef = useRef(null);
  const otpRef = useRef(null);

  const [email, setEmail] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState("");
  const [isOtpValid, setIsOtpValid] = useState("");

  const [otp, setotp] = useState("");

  useEffect(() => {
    if (emailRef.current === null || otpRef === null) return;
    if (isEmailEmpty === false) {
      emailRef.current.style.display = "none";
      otpRef.current.style.display = "block";
    } else {
      emailRef.current.style.display = "block";
      otpRef.current.style.display = "none";
    }
  }, [emailRef, otpRef, isEmailEmpty, isOtpValid]);

  const validateEmail = (email) => {
    const key =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email).toLowerCase().match(key);
  };

  //handle email submit event
  const Submit = (email) => {
    if (email === "") {
      return setIsEmailEmpty(true);
    }
    if (!validateEmail(email)) {
      return setIsEmailEmpty("Invalid Email");
    }

    setIsEmailEmpty(false);

    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xsrf-token": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify({
        email: String(email),
      }),
    });
  };

  //handle otp submit event
  const SubmitOtp = (email, otp) => {
    if (otp === "") {
      return setIsOtpValid(false);
    } else {
      setIsOtpValid(true);
    }
    if (!isOtpValid) return 0;

    if (email === "") {
      return setIsEmailEmpty(true);
    }
    if (!validateEmail(email)) {
      return setIsEmailEmpty("Invalid Email");
    }

    setIsOtpValid(true);

    console.log(email, otp);

    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xsrf-token": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify({
        email: String(email),
        code: String(otp),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data.accessToken);
      });
  };

  return (
    <>
      <div className="adminPanelContainer">
        <div className="adminPanelContent">
          <p className="title">Admin Panel for Zpro</p>
          <div className="loginForm" ref={emailRef}>
            <img src={adminLogo} alt="adminLogo" />
            <p className="Header">Login</p>
            <div className="formInput">
              <p>E-mail</p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {!isEmailEmpty ? null : isEmailEmpty === "Invalid Email" ? (
                <p className="redMessage">*Invalid Email</p>
              ) : (
                <p className="redMessage"> *Email is required</p>
              )}
            </div>
            <div className="align-left">
              <input
                type="button"
                value="Login"
                onClick={() => Submit(email)}
              />
            </div>
          </div>

          {/* otp form */}
          <div className="loginForm" ref={otpRef}>
            <img src={adminLogo} alt="adminLogo" />
            <p className="Header">Verification</p>
            <div className="formInput">
              <p>Verification Code: *{email}</p>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setotp(e.target.value);
                }}
              />
              {isOtpValid === "" ? null : isEmailEmpty === false ? (
                <p className="redMessage">*Code is invalid.</p>
              ) : null}
            </div>
            <div className="align-left">
              <input
                type="button"
                value="Verify"
                onClick={() => SubmitOtp(email, otp)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
