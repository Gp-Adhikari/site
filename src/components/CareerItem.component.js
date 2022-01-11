import React from "react";
import { careerTitle } from "../Data/Careerdata";
import { useParams, useNavigate } from "react-router-dom";
const CareerItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="CareerItem-wrapper">
        {careerTitle.map((career) => (
          <div className="CareerItem-box" key={career.id}>
            <p>{career.Title}</p>

            <button
              type="button"
              onClick={() => navigate("/careeritem/" + career.id)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default CareerItem;
