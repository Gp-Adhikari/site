import React, { useContext } from "react";
import userIcon from "../img/user.svg";
import userIconWhite from "../img/user-white.svg";
import downArrow from "../img/downarrow.svg";
import triangle from "../img/triangle.svg";
import burgerOpenIcon from "../img/menu-open.svg";
import burgerCloseIcon from "../img/menu-close.svg";

import { AdminSideBarContext } from "../contexts/AdminSideBar.context";

import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../Contexts/TokenContext";
import { url } from "../../URL";

const AdminHeader = () => {
  const { setToken, csrfToken, admin } = useContext(TokenContext);
  const { isSideBarOpen, changeSideBarState } = useContext(AdminSideBarContext);

  const navigate = useNavigate();

  //logout
  const logout = () => {
    fetch(url + "/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "xsrf-token": csrfToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setToken(null);
          navigate("/admin");
        }
      });
  };

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
          <p className="user">{admin}</p>
          <img className="down-arrow" src={downArrow} alt="arrow" />
          <div className="logout-tooltip" onClick={() => logout()}>
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
