import React, { useEffect } from "react";
import AdminTitle from "./AdminTitle.Component";
import { CarrersData } from "../Data/Carrers.Data";

const Carrers = () => {
  useEffect(() => {
    document.title = "Carrers | Admin Panel - Zpro";
  }, []);
  return (
    <>
      <div className="carrersContainer">
        <AdminTitle title="Carrers" desc="Carrers / Vacancy" />
        <div className="carrersForm">
          <h3>Add New Vacancy</h3>
          <form action="#">
            <div className="formInput">
              <p>Job Title</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Corporate Title</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>No. of Vacancy (In Number)</p>
              <input type="number" />
            </div>
            <div className="formInput">
              <p>Requirements (Separate lines using \\)</p>
              <textarea name="textarea" id="" rows="10"></textarea>
            </div>
            <div className="formInput">
              <p>Salary</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Job Type</p>
              <select name="type">
                <option value="1">Full Time</option>
                <option value="2">Intern</option>
              </select>
            </div>
            <input type="button" value="Add" />
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
