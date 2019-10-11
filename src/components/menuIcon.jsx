import React, { useState } from "react";
import "./menuIcon.css";

const MenuIcon = () => {
  //Toggler for icon, If false show menu Icon, if true show X
  const [toggler, setToggler] = useState(true);
  //Set Initial SVG attributes for three lines
  const [line1, setLine1] = useState({
    x2: "43.001",
    rotate: "rotate(0)",
    fill: "none",
    stroke: "#ffba92",
    strokeLinecap: "round",
    strokeWidth: "6"
  });
  const [line2, setLine2] = useState({
    x2: "55.89",
    transform: "translate(0 18.115)",
    rotate: "rotate(0)",
    fill: "none",
    stroke: "#ffba92",
    strokeLinecap: "round",
    strokeWidth: "6"
  });
  const [line3, setLine3] = useState({
    x2: "21.501",
    transform: "translate(0 34.541)",
    rotate: "rotate(0)",
    fill: "none",
    stroke: "#ffba92",
    strokeLinecap: "round",
    strokeWidth: "6"
  });

  const animate = () => {
    console.log("ANIMATE!!");
    console.log("TOGGLER: " + toggler);

    if (toggler) {
      // toggler true show X
      setLine1({
        x2: "49",
        rotate: "rotate(45)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "6"
      });
      setLine2({
        x2: "0",
        transform: "translate(0 18.115)",
        rotate: "rotate(0)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "0"
      });
      setLine3({
        x2: "49",
        transform: "translate(0 34.541)",
        rotate: "rotate(-45)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "6"
      });
    } else {
      //toggler false show menu icon
      setLine1({
        x2: "43.001",
        rotate: "rotate(0)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "6"
      });
      setLine2({
        x2: "55.89",
        transform: "translate(0 18.115)",
        rotate: "rotate(0)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "6"
      });
      setLine3({
        x2: "21.501",
        transform: "translate(0 34.541)",
        rotate: "rotate(0)",
        fill: "none",
        stroke: "#ffba92",
        strokeLinecap: "round",
        strokeWidth: "6"
      });
    }
    setToggler(!toggler);
  };

  return (
    <div onClick={animate}>
      <svg width="61.89" height="40.541" viewBox="0 0 61.89 40.541">
        <g id="Menu-Icon" transform="translate(3 3)">
          <line
            className="svgLine"
            id="Line_1"
            data-name="Line 1"
            x2={line1.x2}
            transform={line1.rotate}
            fill={line1.fill}
            stroke={line1.stroke}
            strokeLinecap={line1.strokeLinecap}
            strokeWidth={line1.strokeWidth}
          />
          <line
            className="svgLine"
            id="Line_2"
            data-name="Line 1"
            x2={line2.x2}
            transform={line2.transform + " " + line2.rotate}
            fill={line2.fill}
            stroke={line2.stroke}
            strokeLinecap={line2.strokeLinecap}
            strokeWidth={line2.strokeWidth}
          />
          <line
            className="svgLine"
            id="Line_3"
            data-name="Line 1"
            x2={line3.x2}
            transform={line3.transform + " " + line3.rotate}
            fill={line3.fill}
            stroke={line3.stroke}
            strokeLinecap={line3.strokeLinecap}
            strokeWidth={line3.strokeWidth}
          />
        </g>
      </svg>
    </div>
  );
};

export default MenuIcon;
