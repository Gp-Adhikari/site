import React from "react";

const PortfolioImage = ({ img }) => {
  return (
    <>
      <div className="imgCard">
        <img src={img} alt="" />
      </div>
    </>
  );
};
export default PortfolioImage;
