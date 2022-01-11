import React from "react";

const WhatWeDoCard = ({ img, title, desc }) => {
  return (
    <div className="whatWeDo-Card">
      <div className="circle">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default WhatWeDoCard;
