import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import burgerOpenIcon from "../img/menu-open.svg";
import burgerCloseIcon from "../img/menu-close.svg";

import homeIcon from "../img/home.svg";
import aboutIcon from "../img/about.svg";
import servicesIcon from "../img/services.svg";
import carrersIcon from "../img/carrers.svg";
import contactIcon from "../img/contact.svg";
import portfolioIcon from "../img/portfolio.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const header = document.querySelector("header");
    const checkLocation = location.pathname.split("/");

    if (header !== undefined) {
      if (checkLocation.includes("admin")) {
        header.classList.add("admin-hidden");
      }
    }
  }, [location]);

  const mobNavContainerRef = useRef(null);
  const mobNavLeftRef = useRef(null);
  const mobNavRightRef = useRef(null);

  const [mob, setMob] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (mobNavContainerRef && mobNavLeftRef && mobNavRightRef) {
      if (isNavOpen) {
        mobNavContainerRef.current.style = "z-index: 80;";
        mobNavLeftRef.current.style = "left:0%; transition: 0.5s ease-in-out;";
        mobNavRightRef.current.style =
          "right: 0%; transition: 0.5s ease-in-out;";
      } else {
        mobNavLeftRef.current.style =
          "left: -50%; transition: 0.5s ease-in-out;";
        mobNavRightRef.current.style =
          "right: -50%; transition: 0.5s ease-in-out;";
        setTimeout(() => {
          mobNavContainerRef.current.removeAttribute("style");
        }, 500);
      }
    }
  }, [isNavOpen, mobNavContainerRef, mobNavLeftRef, mobNavRightRef]);

  //on nav open
  useEffect(() => {
    if (isNavOpen) {
      return (document.body.style = `overflow: hidden; width:100%;`);
    } else {
      return document.body.removeAttribute("style");
    }
  }, [isNavOpen]);

  //mob nav open/close
  useEffect(() => {
    if (Math.floor(window.innerWidth) < 750) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  //header scroll animation
  useEffect(() => {
    const header = document.querySelector("header");
    const logo = document.querySelector("img.logo");
    const navBar = document.querySelector("nav");

    if (header === undefined && logo === undefined && navBar === undefined)
      return;
    const shrinkHeader = 300;
    document.addEventListener("scroll", () => {
      var scroll = getCurrentScroll();
      if (scroll > shrinkHeader) {
        header.classList.add("shrink");
        logo.classList.add("img-shrink");
        navBar.classList.add("nav-shrink");
      } else {
        header.classList.remove("shrink");
        logo.classList.remove("img-shrink");
        navBar.classList.remove("nav-shrink");
      }
    });
    const getCurrentScroll = () => {
      return window.pageYOffset;
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-wrapper">
          <img
            src={logo}
            className="logo"
            onClick={() => {
              scrollToTop();
              navigate("/");
            }}
            alt="logo"
          />
          <nav>
            <NavLink to="/" onClick={() => scrollToTop()}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => scrollToTop()}>
              About
            </NavLink>
            <NavLink to="/services" onClick={() => scrollToTop()}>
              Services
            </NavLink>
            <NavLink to="/portfolio" onClick={() => scrollToTop()}>
              Portfolio
            </NavLink>
            <NavLink to="/careers" onClick={() => scrollToTop()}>
              Careers
            </NavLink>
            <NavLink to="/contact" onClick={() => scrollToTop()}>
              Contact Us
            </NavLink>
          </nav>
          <img
            className="burger"
            onClick={() => setIsNavOpen(!isNavOpen)}
            src={isNavOpen ? burgerCloseIcon : burgerOpenIcon}
            alt="menu"
          />

          <div className="mob-nav-container" ref={mobNavContainerRef}>
            <div
              className="left"
              onClick={() => setIsNavOpen(!isNavOpen)}
              ref={mobNavLeftRef}
            ></div>
            <div className="mob-nav" ref={mobNavRightRef}>
              <div className="wrapper">
                <NavLink
                  to="/"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={homeIcon} alt="home" />
                  <p>Home</p>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={aboutIcon} alt="about" />
                  <p> About</p>
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={servicesIcon} alt="services" />
                  <p>Services</p>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={portfolioIcon} alt="portfolio" />
                  <p>Portfolio</p>
                </NavLink>
                <NavLink
                  to="/careers"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={carrersIcon} alt="carrers" />
                  <p>Careers</p>
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <img src={contactIcon} alt="contact" />
                  <p>Contact Us</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
