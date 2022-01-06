import React from "react";
import Portfolio from "./portfolioComponent/Portfolio.component";
import p1 from "../../img/p1.svg";
import p2 from "../../img/p2.svg";
import p3 from "../../img/p3.svg";
import p4 from "../../img/p4.svg";
import p5 from "../../img/p5.svg";
import p6 from "../../img/p6.svg";
import p7 from "../../img/p7.svg";
import p8 from "../../img/p8.svg";
import p9 from "../../img/p9.svg";
import p10 from "../../img/p10.svg";
import p11 from "../../img/p11.svg";
import p12 from "../../img/p12.svg";
const portfolioImage = () => {
  return (
    <>
      <div className="imgCard">
        <Portfolio img={p1} />
        <Portfolio img={p2} />
        <Portfolio img={p3} />
        <Portfolio img={p4} />
        <Portfolio img={p5} />
        <Portfolio img={p6} />
        <Portfolio img={p7} />
        <Portfolio img={p8} />
        <Portfolio img={p9} />
        <Portfolio img={p10} />
        <Portfolio img={p11} />
        <Portfolio img={p12} />
      </div>
    </>
  );
};
export default portfolioImage;
