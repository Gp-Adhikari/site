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

  //gsap timeline
  const tl = gsap.timeline({});

  useEffect(() => {
    tl.from(".Text p", 1.5, { opacity: 0, y: 10, stagger: { amount: 1 } });
    tl.from(
      ".heroText .motto",
      0.5,
      {
        opacity: 0,
        y: 10,
        ease: Power1.inOut,
        stagger: { amount: 1 },
      },
      "-=0.8"
    );
    tl.from(".heroText input", 0.5, {
      opacity: 0,
      y: 10,
      ease: Power1.inOut,
    });

    //days bar animation
    gsap.from(".days", 1.5, {
      opacity: 0,
      ease: Power1.inOut,
      scale: 0,
      stagger: { amount: 0.5 },
    });

    //statsContainer animation
    new gsap.timeline({
      scrollTrigger: {
        trigger: ".statsContainer",
        scrub: false,
        start: "top 80%",
      },
    }).from(".statsContainer", 0.5, {
      opacity: 0,
    });
  }, [tl]);

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
          <Link to="/contact">
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
