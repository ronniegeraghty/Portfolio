import React from "react";
import "./nav.css";
import { ReactComponent as MenuIcon } from "../assets/Menu-Icon.svg";

const Nav = () => {
  return (
    <div>
      <div className="bg-box"></div>
      <div className="navbar">
        <h1 className="brand">RG</h1>
        <MenuIcon />
      </div>
    </div>
  );
};

export default Nav;
