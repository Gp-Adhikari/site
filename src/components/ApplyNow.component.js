import React, { useState } from "react";
import CustomFileDrag from "./CustomFileDrag.component";

const ApplyNow = () => {
  const [pdf, setPdf] = useState("");
  const getPdf = (pdf) => {
    setPdf(pdf);
  };

  return (
    <>
      <div className="applyNowSection">
        <div className="applyNowContainer">
          <div className="vacancyTitle">
            <h3>Apply Now!</h3>
            <h1>ReactJS Developer</h1>
            <h3>Corporate Title: Front-End Developer</h3>
            <p>No. of Vacancies: 1</p>
            <p>Posted Date: April 12, 2021</p>
          </div>
          <div className="vacancyRequirement">
            <h1>Requirements:</h1>
            <ul type="disc">
              <li>Must have 1 year experience with React.</li>
              <li>Have experience with third-party libraries and REST APIs.</li>
              <li>Solid understanding of the web development.</li>
              <li>Knowledge of UI/UX is plus.</li>
            </ul>
          </div>
          <div className="jobSalary">
            <p>Salary:</p>
            <p>Negotiable ( Depends on your skills and experience ).</p>
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
                <CustomFileDrag
                  handleChange={(e) => setPdf(e.target.value)}
                  getData={getPdf}
                  data={pdf}
                />
              </div>
            </div>
            {/* <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Full Name:</p>
                      <input type="text" />
                    </td>
                    <td>
                      <p>E-Mail</p>
                      <input type="email" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Phone Number</p>
                      <input type="number" />
                    </td>

                    <td>
                      <p>Current Address</p>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <p>Message</p>
                      <textarea type="textarea" id="" rows="10"></textarea>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Please attach your CV here ( In .pdf format )</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <CustomFileDrag
                        handleChange={(e) => setPdf(e.target.value)}
                        getData={getPdf}
                        data={pdf}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="button">Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default ApplyNow;
