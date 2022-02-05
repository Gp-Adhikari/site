import React, { useEffect, useContext, useState } from "react";
import AdminTitle from "./AdminTitle.Component";

import { TokenContext } from "../../Contexts/TokenContext";
import { url } from "../../URL";

const Carrers = () => {
  useEffect(() => {
    document.title = "Careers | Admin Panel - Zpro";
  }, []);

  const { csrfToken, setLoading } = useContext(TokenContext);

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

  //get carrers on load
  useEffect(() => {
    const abortController = new AbortController();
    const abortController2 = new AbortController();

    fetch(url + "/token", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          fetch(url + "/admin/vacancy", {
            method: "GET",
            signal: abortController2.signal,
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
            .then((res) => res.json())

            .then((data) => {
              if (!data.status) return 0;
              setCarrers(data.vacancies);
              setLoading(false);
            });
        }
      });

    return () => {
      abortController.abort();
      abortController2.abort();
    };
  }, [csrfToken, setLoading]);

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

    setLoading(true);

    setJobTitle("");
    setCorporateTItle("");
    setNumberOfVacancies("");
    setRequirements("");
    setSalary("");

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
          const accessToken = data.accessToken;
          fetch(url + "/vacancy/announcement", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
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
            .then((data) => {
              if (!data.status) return 0;

              fetch(url + "/admin/vacancy", {
                method: "GET",
                credentials: "include",
                headers: {
                  "xsrf-token": csrfToken,
                  Authorization: `Bearer ${accessToken}`,
                },
              })
                .then((res) => res.json())

                .then((data) => {
                  if (!data.status) return 0;
                  setCarrers(data.vacancies);
                  setLoading(false);
                });
            });
        }
      });
  };

  //on carrers delete
  const deleteCarrers = (carreer) => {
    if (carrers.includes(carreer)) {
      setCarrers(carrers.filter((item) => item !== carreer));
    } else {
      return;
    }
    setLoading(true);
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
          const accessToken = data.accessToken;
          fetch(url + "/vacancy/" + String(carreer._id), {
            method: "DELETE",
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
            });
        }
      });
  };

  return (
    <>
      <div className="carrersContainer">
        <AdminTitle title="Careers" desc="Careers / Vacancy" />
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
              <p>Requirements (Separate lines using \)</p>
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
        <AdminTitle title="Review Careers" desc="Careers / Vacancy" />
        <div className="contacts-wrapper">
          {carrers[0] !== undefined ? (
            carrers.map((data) => (
              <div className="contacts" key={data._id}>
                <h2>Job Title: {data.title}</h2>
                <div className="contact-info">
                  <p>Corporate:</p>
                  <p>{data.corporateTitle}</p>
                </div>
                <div className="contact-info">
                  <p>Vacancy:</p>
                  <p>{data.noOfVacancy}</p>
                </div>
                <div className="contact-infomsg">
                  <p>Requirement:</p>
                  {data.requirements.map((req, idx) =>
                    req === "" ? null : <p key={idx}>- {req}</p>
                  )}
                </div>
                <div className="contact-info">
                  <p>Salary:</p>
                  <p>{data.salary}</p>
                </div>
                <div className="contact-info">
                  <p>Job Type:</p>
                  <p>{data.type === 1 ? "Full Time" : "Intern"}</p>
                </div>
                <input
                  type="button"
                  value="Remove"
                  onClick={() => deleteCarrers(data)}
                />
              </div>
            ))
          ) : (
            <p className="not-available">No Careers Available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Carrers;
