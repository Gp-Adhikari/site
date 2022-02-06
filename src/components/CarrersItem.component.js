import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Title from "./Title.component";
import Congrats from "./Congrats.component";

import { TokenContext } from "../Contexts/TokenContext";
import { url } from "../URL";

const CarrersItem = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { csrfToken } = useContext(TokenContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // form Validation

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [pdf, setPdf] = useState("");

  const [isEmailValid, setEmailValid] = useState("");

  const [isNameEmpty, setIsNameEmpty] = useState("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState("");
  const [isAddressEmpty, setIsAddressEmpty] = useState("");
  const [isMessageEmpty, setIsMessageEmpty] = useState("");
  const [isPdfEmpty, setIsPdfEmpty] = useState("");

  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const key =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    return String(email).toLowerCase().match(key);
  };
  const validateNumber = (txt) => {
    const n = txt.replace(/[^0-9]/g, "");
    setPhone(n);
  };

  const submitForm = (name, email, phone, address, message, pdf) => {
    if (name === "") return setIsNameEmpty(true);
    if (name.length > 50) return setIsNameEmpty("characterLimitMax");
    if (name.length < 3) return setIsNameEmpty("characterLimitMin");
    setIsNameEmpty(false);

    if (email === "") return setEmailValid(false);
    if (email.length > 50) return setEmailValid("characterLimitMax");
    if (!validateEmail(email)) return setEmailValid("invalid");
    setEmailValid(true);

    if (phone === "") return setIsPhoneEmpty(true);
    if (phone.length > 20) return setIsPhoneEmpty("characterLimitMax");
    if (phone.length < 5) return setIsPhoneEmpty("characterLimitMin");
    setIsPhoneEmpty(false);

    if (address === "") return setIsAddressEmpty(true);
    if (address.length > 100) return setIsAddressEmpty("characterLimitMax");
    if (address.length < 10) return setIsAddressEmpty("characterLimitMin");
    setIsAddressEmpty(false);

    if (message === "") return setIsMessageEmpty(true);
    if (message.length > 500) return setIsMessageEmpty("characterLimitMax");
    if (message.length < 10) return setIsMessageEmpty("characterLimitMin");
    setIsMessageEmpty(false);

    if (pdf === "") return setIsPdfEmpty(true);
    setIsPdfEmpty(false);

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
    setPdf("");

    let formData = new FormData();
    formData.append("vacancyAnnouncedID", data[id]._id);
    formData.append("applicantName", name);
    formData.append("email", email);
    formData.append("ph", phone);
    formData.append("address", address);
    formData.append("desc", message);
    formData.append("file", pdf);

    fetch(url + "/vacancy/applicants", {
      method: "POST",
      credentials: "include",
      headers: {
        // "Content-Type": "application/json",
        "xsrf-token": csrfToken,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLoading("success");
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        } else {
          setLoading("error");
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }
      });
  };

  if (
    id !== undefined &&
    id !== null &&
    id !== "" &&
    id !== "undefined" &&
    id !== "null" &&
    typeof id !== "undefined" &&
    typeof id !== undefined
  ) {
    const career = data[id];

    if (typeof career === "undefined") {
      return (
        <h1
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
            color: "red",
          }}
        >
          No Data Found.
        </h1>
      );
    }

    return (
      <>
        <Congrats loading={loading} />
        <div className="applyNowSection" style={{ marginTop: "-3rem" }}>
          <div className="applyNowContainer">
            <div className="vacancyTitle">
              <h3>Apply Now!</h3>
              <h1>
                {career.title} {career.type === 2 ? "(Intern)" : null}
              </h1>
              <h3>Corporate Title: {career.corporateTitle}</h3>
              <p>No. of Vacancies: {career.noOfVacancy}</p>
              <p>Posted Date: {career.date.split("T")[0]}</p>
            </div>
            <div className="vacancyRequirement">
              <h1>Requirements:</h1>
              <ul type="disc">
                {career.requirements.map((item, index) =>
                  item === "" ? null : <li key={index}>{item}</li>
                )}
              </ul>
            </div>
            <div className="jobSalary">
              <p>Salary:</p>
              <p>{career.salary}.</p>
            </div>
            <h1>Apply for this Job</h1>
            <form action="#">
              <div className="formInputWrapper">
                <div className="formInput">
                  <p>Full Name</p>
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
                  <p>E-mail</p>
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
                      Email Field is required and must be less than 50
                      characters.
                    </p>
                  ) : isEmailValid === "invalid" ? (
                    <p className="redMessage">Invalid Email.</p>
                  ) : null}
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput">
                  <p>Phone Number</p>
                  <input
                    type="text"
                    value={phone}
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
                  <p>Current Address</p>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {isAddressEmpty === true ? (
                    <p className="redMessage">
                      Current Address is required and must be between 5 and 100
                      characters.
                    </p>
                  ) : isAddressEmpty === "characterLimitMin" ? (
                    <p className="redMessage">
                      Current Address is required and must be between 5 and 100
                      characters.
                    </p>
                  ) : isAddressEmpty === "characterLimitMax" ? (
                    <p className="redMessage">
                      Current Address is required and must be between 5 and 100
                      characters.
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput formInputMessage">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Tell us about yourself</p>
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
                      message.length > 500
                        ? { color: "red", fontSize: "12px" }
                        : { color: "#fff", fontSize: "12px" }
                    }
                  >
                    {message.length} / 500
                  </p>
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput">
                  <p>Please attach your CV here ( In .pdf format )</p>
                  <div className="fileDiv">
                    <label className="custom-file-upload">
                      <input
                        type="file"
                        onChange={(e) => {
                          setPdf(e.target.files[0]);
                        }}
                        accept="application/pdf"
                      />
                      Upload a file
                    </label>
                    <h4>{pdf !== "" ? `${pdf.name}` : "No PDF Selected."}</h4>
                  </div>
                  {isPdfEmpty === true ? (
                    <p className="redMessage">Please attach your CV.</p>
                  ) : null}
                </div>
              </div>
              <input
                type="button"
                value="Submit"
                onClick={() => {
                  submitForm(name, email, phone, address, message, pdf);
                }}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="CarrersContainer">
        <Title TitleText="Careers" />
        <div className="CarrersItem-wrapper">
          {data[0] !== undefined ? (
            data.map((carrer, index) => (
              <div className="CarrersItem-box" key={carrer._id}>
                <p>{carrer.title}</p>
                <input
                  type="button"
                  value="Apply Now"
                  onClick={() => {
                    scrollToTop();
                    navigate("/careers/" + index);
                  }}
                />
              </div>
            ))
          ) : (
            <p className="not-available">No Careers yet.</p>
          )}
        </div>
      </div>
    </>
  );
};
export default CarrersItem;
