import React from "react";
const Banner = ({ text1, text2 }) => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-text">
          <p>{text1}</p>
          <p>{text2 !== undefined ? text2 : null}</p>
        </div>
      </div>
    </>
  );
};
export default Banner;
