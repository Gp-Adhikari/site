import React, { useState, useEffect } from "react";
import p1 from "../../img/p2.svg";
import p2 from "../../img/p3.svg";
import p3 from "../../img/p4.svg";
import p4 from "../../img/p5.svg";
import p5 from "../../img/p6.svg";
import Banner from "../Banner.component";
import Title from "../Title.component";
import PortfolioImage from "./portfolioimage.component";
const Portfolio = () => {
  const [route, setRoute] = useState("");
  useEffect(() => {}, [route]);
  useEffect(() => {
    document.title = "Portfolio - Zpro";
  }, []);
  return (
    <>
      <Banner text1="Our Recent" text2="Project" />
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
          <PortfolioImage img={p2} />
          <PortfolioImage img={p3} />
          <PortfolioImage img={p4} />
          <PortfolioImage img={p5} />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
