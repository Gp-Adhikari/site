import React from "react";
import lightBulb from "../img/light-bulb.svg";
import lightLine from "../img/bulb-line.svg";
import smallLogo from "../img/small-logo.svg";
const Introduction = () => {
  return (
    <>
      <div className="introductionContainer">
        <div className="introductionPart">
          <div className="introductionContent">
            <h1>Introduction</h1>
            <p>
              Zpro is a company specializing in the IT sector. We are hard
              working, creative and passionate in the field of website design,
              development and software development. We also include services
              like logo design and website redesign. We will help you grow your
              business digitally.
            </p>
            <p>
              Zpro is well-established and trusted IT company for high quality
              services with modern and custom design for reasonable cost and
              with high efficiency. We try our best to make our clients happy
              and satisfy with our creations.
            </p>
            <input type="button" value="View more" />
          </div>
          <div className="light-Bulb">
            <img src={lightLine} alt="" />
            <img src={lightBulb} alt="" />
          </div>
        </div>
        <div className="poweredByDiv">
          <div className="poweredByPart">
            <p>Powered by</p>
            <img src={smallLogo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
