import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import burgerIcon from "../img/menu.svg";

const Header = () => {
  const headerRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.onscroll = () => handleNavigation();

  const handleNavigation = () => {
    if (headerRef.current !== undefined) {
      if (window.scrollY > 50 || headerRef.current.scrollTop > 50) {
        return (headerRef.current.style = `
              padding: 0.4rem 0;
                `);
      } else {
        return headerRef.current.setAttribute("style", "");
      }
    }
  };

  return (
    <>
      <header ref={headerRef}>
        <div className="header-wrapper">
          <img src={logo} className="logo" alt="logo" />
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
