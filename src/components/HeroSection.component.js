import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import WeekBox from "../img/weekBox.svg";

import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const monday = useRef();
  const tuesday = useRef();
  const wednesday = useRef();
  const thursday = useRef();
  const friday = useRef();
  const saturday = useRef();
  const sunday = useRef();

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const today = new Date().getDay();
  const todaysDay = days[today];

  useEffect(() => {
    //days bar animation
    gsap.fromTo(
      ".days",
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: Power1.inOut,
        stagger: { amount: 0.5 },
      }
    );
  }, []);

  //useeffect for days
  useEffect(() => {
    const daysElement = [
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    ];

    const selectTodayElement = daysElement[today];

    if (selectTodayElement) {
      selectTodayElement.current.classList.add("hero-active");
    }
  }, [today, sunday, monday, tuesday, wednesday, thursday, friday, saturday]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="heroContainer">
        <div className="heroText">
          <div className="Text">
            <pre>
              We Can Help <br />
              Your{" "}
              <code className="HighlightedText">
                Business
                <br />
                Grow{" "}
              </code>
              Efficiently.
            </pre>
          </div>
          <p className="motto">Go Worldwide and Online</p>
          <Link to="/contact" onClick={() => scrollToTop()}>
            <input type="button" value="Get In Touch" />
          </Link>
        </div>
        <div className="heroDiv">
          <img src={WeekBox} alt="" />
          <div className="content-wrapper">
            <div className="circle">
              <h3>{todaysDay}</h3>
            </div>
            <div className="weekDay">
              <div className="days">
                <div className="day" ref={monday}></div>
                <h3>M</h3>
              </div>
              <div className="days">
                <div className="day" ref={tuesday}></div>
                <h3>T</h3>
              </div>
              <div className="days">
                <div className="day" ref={wednesday}></div>
                <h3>W</h3>
              </div>
              <div className="days">
                <div className="day" ref={thursday}></div>
                <h3>T</h3>
              </div>
              <div className="days">
                <div className="day" ref={friday}></div>
                <h3>F</h3>
              </div>
              <div className="days">
                <div className="day" ref={saturday}></div>
                <h3>S</h3>
              </div>
              <div className="days">
                <div className="day" ref={sunday}></div>
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
