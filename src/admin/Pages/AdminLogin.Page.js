import React, { useEffect, useState } from "react";
import adminLogo from "../img/admin_logo.svg";

const AdminLogin = () => {
  useEffect(() => {
    document.title = "Admin Login";
  }, []);

  const [email, setEmail] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const validateEmail = (email) => {
    const key =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email).toLowerCase().match(key);
  };
  const Submit = (email) => {
    if (email === "") {
      return setIsEmailEmpty(true);
    }
    if (!validateEmail(email)) {
      return setIsEmailEmpty("Invalid Email");
    }
    setIsEmailEmpty(false);
  };

  return (
    <>
      <div className="adminPanelContainer">
        <div className="adminPanelContent">
          <p className="title">Admin Panel for Zpro</p>
          <div className="loginForm">
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
            <input type="button" value="Login" onClick={() => Submit(email)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
