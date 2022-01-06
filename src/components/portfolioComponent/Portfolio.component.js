import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = ({ img }) => {
  return (
    <>
      <div className="portfolio">
        <div className="navBar">
          <ul type="none">
            <NavLink to="/all">
              <li>All</li>
            </NavLink>
            <NavLink to="/webdesign">
              <li>Web Design</li>
            </NavLink>
            <NavLink to="/logodesign">
              <li>Logo Design</li>
            </NavLink>
            <NavLink to="/mockup">
              <li>MockUp</li>
            </NavLink>
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
    </>
  );
};
export default Portfolio;
