import React from "react";

const Title = ({ TitleText }) => {
  return (
    <>
      <div className="Title">
        <p>{TitleText}</p>
        <div className="line"></div>
      </div>
    </>
  );
};
export default Title;
