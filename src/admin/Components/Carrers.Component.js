import React, { useEffect, useContext, useState } from "react";
import AdminTitle from "./AdminTitle.Component";
import { CarrersData } from "../Data/Carrers.Data";

import { TokenContext } from "../../Contexts/TokenContext";
import { url } from "../../URL";

const Carrers = () => {
  useEffect(() => {
    document.title = "Carrers | Admin Panel - Zpro";
  }, []);

  const { csrfToken, token, setLoading, setToken } = useContext(TokenContext);

  const [carrers, setCarrers] = useState([]);

  const [jobTitle, setJobTitle] = useState("");
  const [corporateTItle, setCorporateTItle] = useState("");
  const [numberOfVacancies, setNumberOfVacancies] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState(1);

  //select options
  const SelectBox = ({ children, onChange, value }) => (
    <select onChange={onChange} value={value}>
      {children}
    </select>
  );

  //handle select option change
  const handleChange = (e) => {
    setJobType(e.target.value);
  };

  //select options
  const Option = ({ value, description }) => (
    <option value={value}>{description}</option>
  );

  //on carrers submit / add
  const addCarrers = (
    jobTitle,
    corporateTItle,
    numberOfVacancies,
    requirements,
    salary,
    jobType
  ) => {
    if (
      jobTitle === "" ||
      !jobTitle ||
      corporateTItle === "" ||
      !corporateTItle ||
      numberOfVacancies === "" ||
      !numberOfVacancies ||
      requirements === "" ||
      !requirements ||
      salary === "" ||
      !salary
    ) {
      return 0;
    }

    console.log(
      JSON.stringify({
        title: jobTitle,
        corporateTitle: corporateTItle,
        noOfVacancy: numberOfVacancies,
        requirements: requirements,
        salary: salary,
        type: String(jobType),
      })
    );

    fetch(url + "/token", {
      method: "GET",
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setToken(data.accessToken);
          fetch(url + "/vacancy/announcement", {
            method: "POST",
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${data.accessToken}`,
            },
            body: JSON.stringify({
              title: jobTitle,
              corporateTitle: corporateTItle,
              noOfVacancy: numberOfVacancies,
              requirements: requirements,
              salary: salary,
              type: String(jobType),
            }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });

    // let formData = new FormData();

    // formData.append("title", jobTitle);
    // formData.append("corporateTitle", corporateTItle);
    // formData.append("noOfVacancy", numberOfVacancies);
    // formData.append("requirements", requirements);
    // formData.append("salary", salary);
    // formData.append("type", jobType);
  };
  return (
    <>
      <div className="carrersContainer">
        <AdminTitle title="Carrers" desc="Carrers / Vacancy" />
        <div className="carrersForm">
          <h3>Add New Vacancy</h3>
          <form action="#">
            <div className="formInput">
              <p>Job Title</p>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Corporate Title</p>
              <input
                type="text"
                value={corporateTItle}
                onChange={(e) => setCorporateTItle(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>No. of Vacancy (In Number)</p>
              <input
                type="number"
                value={numberOfVacancies}
                onChange={(e) => setNumberOfVacancies(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Requirements (Separate lines using \\)</p>
              <textarea
                name="textarea"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows="10"
              ></textarea>
            </div>
            <div className="formInput">
              <p>Salary</p>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Job Type</p>
              <SelectBox
                name="type"
                onChange={(e) => handleChange(e)}
                value={jobType}
              >
                <Option value="1" description="Full Time" />
                <Option value="2" description="Intern" />
              </SelectBox>
            </div>
            <input
              type="button"
              value="Add"
              onClick={() =>
                addCarrers(
                  jobTitle,
                  corporateTItle,
                  numberOfVacancies,
                  requirements,
                  salary,
                  jobType
                )
              }
            />
          </form>
        </div>
        <AdminTitle title="Review Careers" desc="Carrers / Vacancy" />
        <div className="contacts-wrapper">
          {CarrersData[0] !== undefined ? (
            CarrersData.map((data) => (
              <div className="contacts" key={data.id}>
                <h2>Job Title: {data.title}</h2>
                <div className="contact-info">
                  <p>Corporate:</p>
                  <p>{data.c_title}</p>
                </div>
                <div className="contact-info">
                  <p>Vacancy:</p>
                  <p>{data.vacancy}</p>
                </div>
                <div className="contact-infomsg">
                  <p>Requirement:</p>
                  {data.requirement.map((req, idx) => (
                    <p key={idx}>- {req}</p>
                  ))}
                </div>
                <div className="contact-info">
                  <p>Salary:</p>
                  <p>{data.salary}</p>
                </div>
                <div className="contact-info">
                  <p>Job Type:</p>
                  <p>{data.type}</p>
                </div>
                <input type="button" value="Remove" />
              </div>
            ))
          ) : (
            <p className="not-available">No Carrers Available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Carrers;
