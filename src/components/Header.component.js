import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import burgerIcon from "../img/menu.svg";

const Header = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <NavLink to="/carrers" onClick={() => scrollToTop()}>
              Carrers
            </NavLink>
            <NavLink to="/contact" onClick={() => scrollToTop()}>
              Contact Us
            </NavLink>
          </nav>
          <img className="burger" src={burgerIcon} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
