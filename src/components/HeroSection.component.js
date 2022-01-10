import React from "react";
import WeekBox from "../img/weekBox.svg";
const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroText">
          <div className="Text">
            <p>We Can Help</p>
            <div>
              <p>Your</p>
              <p className="HighlightedText">Business</p>
            </div>
            <div>
              <p className="HighlightedText">Grow</p>
              <p>Efficiently.</p>
            </div>
          </div>
          <p className="motto">Go Worldwide and Online</p>
          <input type="button" value="Get In Touch" />
        </div>
        <div className="heroDiv">
          <img src={WeekBox} alt="" />
          <div className="content-wrapper">
            <div className="circle">
              <h3>THU</h3>
            </div>
            <div className="weekDay">
              <div className="days">
                <div className="day"></div>
                <h3>M</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>T</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>W</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>T</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>F</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>S</h3>
              </div>
              <div className="days">
                <div className="day"></div>
                <h3>S</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statsContainer">
        <div className="stats">
          <p>Web Design</p>
          <p>12</p>
        </div>
        <div className="stats">
          <p>Logo Design</p>
          <p>5</p>
        </div>
        <div className="stats">
          <p>Satisfied Clients</p>
          <p>5</p>
        </div>
        <div className="stats">
          <p>Mockup Design</p>
          <p>20</p>
        </div>
        <div className="stats">
          <p>Projects</p>
          <p>5</p>
        </div>
      </div>
      <div className="sectionBreaker">
        <div className="line"></div>
        <div className="circle">
          <div className="innerCircle"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
