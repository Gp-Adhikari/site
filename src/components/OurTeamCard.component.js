import React from "react";

const OurTeamCard = ({ name, position, img }) => {
  return (
    <>
      <div className="ourTeamCard">
        <img src={img} alt={name} />
        <div className="ourTeamCardDesc">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </>
  );
};

export default OurTeamCard;
