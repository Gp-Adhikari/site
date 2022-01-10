import React from "react";

const PortfolioImage = ({ img }) => {
  return (
    <>
      <div className="portfolio-image-imgCard">
        <img
          src={img}
          alt="images"
          className="portfolio-image-imgCard-skeleton"
        />
      </div>
    </>
  );
};
export default PortfolioImage;
