import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  const headerRef = useRef();
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
          <img src={logo} alt="logo" />
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/carrers">Carrers</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
