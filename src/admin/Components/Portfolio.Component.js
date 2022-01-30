import React, { useState, useEffect } from "react";
import AdminTitle from "./AdminTitle.Component";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";
import p6 from "../img/p6.png";
const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Admin Panel - Zpro";
  }, []);
  const [portfolioImg, setPortfolioImg] = useState(null);

  return (
    <>
      <div className="adminPortfolioContainer">
        <AdminTitle title="Portfolio" desc="Our portfolio" />
        <div className="portfolioForm">
          <h3>Add New Portfolio</h3>
          <form action="#">
            <div className="formInput">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Description</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Website Link</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Type</p>
              <select name="type">
                <option value="1">Web Design</option>
                <option value="2">Mockup</option>
                <option value="3">Logo Design</option>
              </select>
            </div>
            <div className="formInput">
              <p>Image</p>
              <div className="fileDiv">
                <label class="custom-file-upload">
                  <input
                    type="file"
                    onChange={(e) => {
                      setPortfolioImg(e.target.files[0]);
                      console.log(e.target.files[0]);
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
            <input type="button" value="Add" />
          </form>
        </div>
        <AdminTitle
          title="Update / Remove Portfolio"
          desc="Check and remove portfolio"
        />
        <div className="portfolioCardContainer">
          <div className="portfolioCard">
            <img src={p1} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
          <div className="portfolioCard">
            <img src={p2} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
          <div className="portfolioCard">
            <img src={p3} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
          <div className="portfolioCard">
            <img src={p4} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
          <div className="portfolioCard">
            <img src={p5} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
          <div className="portfolioCard">
            <img src={p6} alt="p1" />
            <p>Name: Site Name</p>
            <p>Link: www.something.com</p>
            <input type="button" value="Remove" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
