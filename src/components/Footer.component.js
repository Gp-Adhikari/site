import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import locationIcon from "../img/location-icon.svg";
import mailIcon from "../img/mail-icon.svg";
import phoneIcon from "../img/phone-icon.svg";
import facebookIcon from "../img/facebook-icon.svg";
import instagramIcon from "../img/instagram-icon.svg";
import twitterIcon from "../img/twitter-icon.svg";
import linkedinIcon from "../img/linkedin-icon.svg";
import tiktokIcon from "../img/tiktok-icon.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="topFooter">
          <div className="footerContainer">
            <div className="firstRow">
              <img className="footerLogo" src={logo} alt="logo" />
              <div className="firstRowItem">
                <img src={locationIcon} alt="location" />
                <p>Bhaktapur, Nepal</p>
              </div>
              <div className="firstRowItem">
                <img src={mailIcon} alt="location" />
                <p>zprofs.company@gmail.com</p>
              </div>
              <div className="firstRowItem">
                <img src={phoneIcon} alt="location" />
                <p>+977-9876543210</p>
              </div>
            </div>
            <div className="secondRow">
              <h2>Quick Links</h2>
              <li>Careers</li>
              <li>Portfolios</li>
            </div>
            <div className="thirdRow">
              <h2>Resources</h2>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </div>
            <div className="fourthRow">
              <h2>Get in Touch</h2>
              <Link to="/contact">
                <input type="button" value="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <p></p>
          <p className="copyRightText">
            Copyright &copy; 2021 Zpro . All Rights Reserved.
          </p>
          <div className="socialMediaIcons">
            <div className="circle">
              <img src={facebookIcon} alt="facebookIcon" />
            </div>
            <div className="circle">
              <img src={instagramIcon} alt="instagramIcon" />
            </div>
            <div className="circle">
              <img src={linkedinIcon} alt="linkedinIcon" />
            </div>
            <div className="circle">
              <img src={twitterIcon} alt="twitterIcon" />
            </div>
            <div className="circle">
              <img src={tiktokIcon} alt="tiktokIcon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
