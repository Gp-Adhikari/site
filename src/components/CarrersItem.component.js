import React from "react";
import carrerTitle from "../Data/Carrer.data";
import { useParams, useNavigate } from "react-router-dom";
import Title from "./Title.component";
const CarrersItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="CarrersContainer">
        <Title TitleText="Carrers" />
        <div className="CarrersItem-wrapper">
          {carrerTitle.map((carrer) => (
            <div className="CarrersItem-box" key={carrer.id}>
              <p>{carrer.Title}</p>
              <input
                type="button"
                value="Apply Now"
                onClick={() => navigate("/carrers/" + carrer.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CarrersItem;
