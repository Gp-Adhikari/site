import React, { useState, useEffect, useContext } from "react";
import AdminTitle from "./AdminTitle.Component";

import { TokenContext } from "../../Contexts/TokenContext";

import { url } from "../../URL";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Admin Panel - Zpro";
  }, []);

  const { csrfToken, setLoading } = useContext(TokenContext);

  const [portfolios, setPortfolios] = useState([]);

  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioDesc, setPortfolioDesc] = useState("");
  const [portfolioImg, setPortfolioImg] = useState(null);
  const [portfolioLink, setPortfolioLink] = useState("");
  const [portfolioType, setPortfolioType] = useState(1);

  //select options
  const SelectBox = ({ children, onChange, value }) => (
    <select onChange={onChange} value={value}>
      {children}
    </select>
  );

  //handle select option change

  const handleChange = (e) => {
    setPortfolioType(e.target.value);
  };

  //select options
  const Option = ({ value, description }) => (
    <option value={value}>{description}</option>
  );

  //on portfolio submit / add
  const addPortfolio = (
    portfolioName,
    portfolioDesc,
    portfolioLink,
    portfolioType,
    portfolioImg
  ) => {
    if (
      portfolioName === "" ||
      !portfolioName ||
      portfolioDesc === "" ||
      !portfolioDesc ||
      portfolioLink === "" ||
      !portfolioLink ||
      portfolioImg === null ||
      portfolioImg.name === undefined
    ) {
      return 0;
    }

    let formData = new FormData();

    formData.append("name", String(portfolioName));
    formData.append("desc", String(portfolioDesc));
    formData.append("link", String(portfolioLink));
    formData.append("type", parseInt(portfolioType));
    formData.append("img", portfolioImg);

    //empty the fields
    setPortfolioName("");
    setPortfolioDesc("");
    setPortfolioLink("");
    setPortfolioImg(null);

    setLoading(true);

    fetch(url + "/token", {
      method: "GET",
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const accessToken = data.accessToken;

          fetch(url + "/api/portfolio", {
            method: "POST",
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.status) return 0;

              fetch(url + "/admin/portfolio", {
                method: "GET",
                credentials: "include",
                headers: {
                  "xsrf-token": csrfToken,
                  Authorization: `Bearer ${accessToken}`,
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  setLoading(false);
                  setPortfolios(data.portfolios);
                });
            });
        }
      });
  };

  //get portfolio items on load
  useEffect(() => {
    const abortController = new AbortController();
    const abortController2 = new AbortController();

    fetch(url + "/token", {
      method: "GET",
      signal: abortController.signal,
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLoading(false);
          fetch(url + "/admin/portfolio", {
            method: "GET",
            signal: abortController2.signal,
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setPortfolios(data.portfolios));
        }
      });

    return () => {
      abortController.abort();
      abortController2.abort();
    };
  }, [csrfToken, setLoading]);

  // remove portfolio item
  const removePortfolio = (portfolio) => {
    const imgName = portfolio.img.split(".jpeg")[0];

    if (portfolios.includes(portfolio)) {
      setPortfolios(portfolios.filter((item) => item !== portfolio));
    } else {
      return;
    }

    setLoading(true);

    fetch(url + "/token", {
      method: "GET",
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const accessToken = data.accessToken;
          fetch(`${url}/portfolio/${String(imgName)}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
              "xsrf-token": csrfToken,
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
            });
        }
      });
  };
  return (
    <>
      <div className="adminPortfolioContainer">
        <AdminTitle title="Portfolio" desc="Our portfolio" />
        <div className="portfolioForm">
          <h3>Add New Portfolio</h3>
          <form action="#">
            <div className="formInput">
              <p>Name</p>
              <input
                type="text"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Description</p>
              <input
                type="text"
                value={portfolioDesc}
                onChange={(e) => setPortfolioDesc(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Website Link</p>
              <input
                type="text"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
              />
            </div>
            <div className="formInput">
              <p>Type</p>
              <SelectBox
                onChange={(e) => handleChange(e)}
                value={portfolioType}
              >
                <Option value="1" description="Web Design" />
                <Option value="2" description="Mockup" />
                <Option value="3" description="Logo Design" />
              </SelectBox>
            </div>
            <div className="formInput">
              <p>Image</p>
              <div className="fileDiv">
                <label className="custom-file-upload">
                  <input
                    type="file"
                    onChange={(e) => {
                      setPortfolioImg(e.target.files[0]);
                    }}
                    accept="image/png, image/jpeg , image/jpg "
                  />
                  Upload an Image
                </label>
                <h4>
                  {portfolioImg !== null
                    ? `${portfolioImg.name}`
                    : "No Image Selected."}
                </h4>
              </div>
            </div>
            <input
              type="button"
              value="Add"
              onClick={() =>
                addPortfolio(
                  portfolioName,
                  portfolioDesc,
                  portfolioLink,
                  portfolioType,
                  portfolioImg
                )
              }
            />
          </form>
        </div>
        <AdminTitle
          title="Update / Remove Portfolio"
          desc="Check and remove portfolio"
        />
        <div className="portfolioCardContainer">
          {portfolios[0] === undefined ? (
            <p className="not-available">No Portfolios Available.</p>
          ) : (
            portfolios.map((portfolio) => (
              <div className="portfolioCard" key={portfolio._id}>
                <img
                  src={`${url}/photo/${portfolio.img.split(".jpeg")[0]}`}
                  alt={portfolio.img}
                />
                <p>Name: {portfolio.name}</p>
                <p>Link: {portfolio.link}</p>
                <input
                  type="button"
                  value="Remove"
                  onClick={() => removePortfolio(portfolio)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
