import React from "react";
import "./nav.css";
import MenuIcon from "./menuIcon";

const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <h1 className="brand">RG</h1>
        <div className="menuIcon">
          <MenuIcon />
        </div>
      </div>
      <div className="bgBoxUp">
        <div className="links">
          <a href="/" className="navLinkHidden">
            Profile
          </a>
          <a href="/" className="navLinkHidden">
            Experience
          </a>
          <a href="/" className="navLinkHidden">
            Projects
          </a>
          <a href="/" className="navLinkHidden">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
