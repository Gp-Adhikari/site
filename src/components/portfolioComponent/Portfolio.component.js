import React, { useState, useEffect } from "react";
import p1 from "../../img/p2.svg";
import Title from "../Title.component";
import PortfolioImage from "./portfolioimage.component";
const Portfolio = () => {
  const [route, setRoute] = useState("");
  useEffect(() => {}, [route]);
  return (
    <>
      <div className="portfolio">
        <Title TitleText="Portfolio" />
        <div className="navBar">
          <ul type="none">
            <li
              onClick={() => {
                setRoute("");
              }}
              className={route === "" ? "active" : null}
            >
              All
            </li>
            <li
              onClick={() => {
                setRoute("web");
              }}
              className={route === "web" ? "active" : null}
            >
              Web Design
            </li>
            <li
              onClick={() => {
                setRoute("logo");
              }}
              className={route === "logo" ? "active" : null}
            >
              Logo Design
            </li>
            <li
              onClick={() => {
                setRoute("mockup");
              }}
              className={route === "mockup" ? "active" : null}
            >
              Mock Up
            </li>
          </ul>
        </div>
        <div className="portfolioContainer">
          {route === "" ? (
            <PortfolioImage img={p1} />
          ) : route === "web" ? (
            <PortfolioImage img={p1} />
          ) : route === "logo" ? (
            <PortfolioImage img={p1} />
          ) : route === "mockup" ? (
            <PortfolioImage img={p1} />
          ) : (
            <p>no data found</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
