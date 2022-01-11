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
          <div className="applyNow-ReactJsDev">
            <h3>Apply Now!</h3>
            <h1>ReactJS Developer</h1>
            <h3>Corporate Title: Front-End Developer</h3>
            <p>No. of Vacancies: 1</p>
            <p>Posted Date: April 12, 2021</p>
          </div>
          <div className="applyNow-Requirement">
            <h1>Requirements:</h1>
            <ul type="disc">
              <li>Must have 1 year experience with React.</li>
              <li>Have experience with third-party libraries and REST APIs.</li>
              <li>Solid understanding of the web development.</li>
              <li>Knowledge of UI/UX is plus.</li>
            </ul>
          </div>
          <div className="applyNow-Salary">
            <p>Salary:</p>
            <p>Negotiable ( Depends on your skills and experience ).</p>
          </div>
          <h1>Apply for this Job</h1>
          <div className="applyForJob-Table">
            <form action="#">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Full Name:</p>
                    </td>
                    <td>
                      <p>E-Mail</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input type="email" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Phone Number</p>
                    </td>
                    <td>
                      <p>Current Address</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="number" />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Message</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
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
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApplyNow;
