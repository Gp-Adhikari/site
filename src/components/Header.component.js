import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/carrers">Carrers</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </header>
  );
};

export default Header;
