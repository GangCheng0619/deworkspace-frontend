import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "../assets/css/font-style.css";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [drowdownFlag, setDrowdownFlag] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 830
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  });

  function mobileMenuButton() {
    drowdownFlag ? setDrowdownFlag(false) : setDrowdownFlag(true);
  }

  return (
    <div className="x-header">
      <img src="/images/logo.webp" width={150} height={80} />
      {!mobileView ? (
        <div className="x-header-link">
          <Link to="/" className="x-header-link-item">
            <span className="x-font1-header">Home</span>
          </Link>
          <Link to="/services" className="x-header-link-item">
            <span className="x-font1-header">Services</span>
          </Link>
          <Link to="/aboutus" className="x-header-link-item">
            <span className="x-font1-header">About us</span>
          </Link>
        </div>
      ) : (
        <div>
          <div
            className="icon x-header-link-hamburger"
            data-toggle="dropdown"
            onClick={mobileMenuButton}
          >
            <GiHamburgerMenu style={{ width: "30px", height: "30px" }} />
          </div>
          {drowdownFlag ? (
            <ul className="dropdown-menu">
              <li>
                <Link to="/" className="x-header-link-item">
                  <span className="x-font1-header">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="x-header-link-item">
                  <span className="x-font1-header">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="x-header-link-item">
                  <span className="x-font1-header">About us</span>
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
