import React, { useState, useEffect } from "react";
import { url } from "../../URL";
import Banner from "../Banner.component";
import Title from "../Title.component";
import PortfolioImage from "./portfolioimage.component";
const Portfolio = () => {
  const [route, setRoute] = useState("");
  useEffect(() => {}, [route]);
  useEffect(() => {
    document.title = "Portfolio - Zpro";
  }, []);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  //get portfolio items on load
  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();

    fetch(url + "/portfolio", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) return 0;
        setPortfolios(data.portfolios);
        setLoading(false);
      });

    return () => abortController.abort();
  }, []);

  //all route handlers
  const allRoute = portfolios.map((portfolio) => (
    <PortfolioImage
      key={portfolio._id}
      img={`${url}/photo/${portfolio.img.split(".jpeg")[0]}`}
    />
  ));
  //web design route handlers
  const webDesignRoute = portfolios.map((portfolio) =>
    parseInt(portfolio.type) === 1 ? (
      <PortfolioImage
        key={portfolio._id}
        img={`${url}/photo/${portfolio.img.split(".jpeg")[0]}`}
      />
    ) : null
  );
  //logo design route handlers
  const logoDesignRoute = portfolios.map((portfolio) =>
    parseInt(portfolio.type) === 3 ? (
      <PortfolioImage
        key={portfolio._id}
        img={`${url}/photo/${portfolio.img.split(".jpeg")[0]}`}
      />
    ) : null
  );
  //mockup route handlers
  const mockupRoute = portfolios.map((portfolio) =>
    parseInt(portfolio.type) === 2 ? (
      <PortfolioImage
        key={portfolio._id}
        img={`${url}/photo/${portfolio.img.split(".jpeg")[0]}`}
      />
    ) : null
  );

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
        {loading ? (
          <div className="loader-container-specify">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="portfolioContainer">
            {route === "" && portfolios[0] !== undefined ? (
              allRoute[0] !== null ? (
                allRoute
              ) : (
                <p className="not-available">No Data Found.</p>
              )
            ) : route === "web" && portfolios[0] !== undefined ? (
              webDesignRoute[0] !== null ? (
                webDesignRoute
              ) : (
                <p className="not-available">No Data Found.</p>
              )
            ) : route === "logo" && portfolios[0] !== undefined ? (
              logoDesignRoute[0] !== null ? (
                logoDesignRoute
              ) : (
                <p className="not-available">No Data Found.</p>
              )
            ) : route === "mockup" && portfolios[0] !== undefined ? (
              mockupRoute[0] !== null ? (
                mockupRoute
              ) : (
                <p className="not-available">No Data Found.</p>
              )
            ) : (
              <p className="not-available">No Data Found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Portfolio;
