import React, { useContext } from "react";
import userIcon from "../img/user.svg";
import userIconWhite from "../img/user-white.svg";
import downArrow from "../img/downarrow.svg";
import triangle from "../img/triangle.svg";
import burgerOpenIcon from "../img/menu-open.svg";
import burgerCloseIcon from "../img/menu-close.svg";

import { AdminSideBarContext } from "../contexts/AdminSideBar.context";

const AdminHeader = () => {
  const { isSideBarOpen, changeSideBarState } = useContext(AdminSideBarContext);

  const tooltip = () => {
    const x = document.querySelector(".logout-tooltip");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
  };
  return (
    <>
      <div className="adminHeader">
        <div className="lineContainer">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <img
          className="burger"
          onClick={() => changeSideBarState()}
          src={isSideBarOpen ? burgerCloseIcon : burgerOpenIcon}
          alt="menu"
        />
        <div className="userId" onClick={() => tooltip()}>
          <img className="user-black" src={userIcon} alt="user" />
          <img className="user-white" src={userIconWhite} alt="user" />
          <p className="user">admin@website.com</p>
          <img className="down-arrow" src={downArrow} alt="arrow" />
          <div className="logout-tooltip">
            <img src={triangle} alt="triangle" />
            <div className="logout-wrapper">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
