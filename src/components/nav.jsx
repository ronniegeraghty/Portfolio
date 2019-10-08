import React from "react";
import "./nav.css";
import { ReactComponent as MenuIcon } from "../assets/Menu-Icon.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <h1 className="brand">RG</h1>
        <div className="menuIcon">
          <MenuIcon />
        </div>
      </div>
      <div className="bgBox">
        <div className="links">
          <a href="/" className="navLink">
            Profile
          </a>
          <a href="/" className="navLink">
            Experience
          </a>
          <a href="/" className="navLink">
            Projects
          </a>
          <a href="/" className="navLink">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
