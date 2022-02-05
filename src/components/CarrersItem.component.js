import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Title from "./Title.component";
const CarrersItem = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                {career.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
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
                  <input type="text" />
                </div>
                <div className="formInput">
                  <p>E-mail</p>
                  <input type="email" />
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput">
                  <p>Phone Number</p>
                  <input type="number" />
                </div>
                <div className="formInput">
                  <p>Current Address</p>
                  <input type="text" />
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput formInputMessage">
                  <p>Message</p>
                  <textarea id="" rows="12"></textarea>
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formInput">
                  <p>Please attach your CV here ( In .pdf format )</p>
                  {/* <CustomFileDrag
                    handleChange={(e) => setPdf(e.target.value)}
                    getData={getPdf}
                    data={pdf}
                  /> */}
                  <input type="file" />
                </div>
              </div>
              <input type="button" value="Submit" />
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
                    navigate("/carrers/" + index);
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
