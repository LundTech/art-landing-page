import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const theme = props.theme;
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  return (
    <Fade>
      <div className="footer-div" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div className="footer-section">Hej</div>
        <div className="footer-section">Hej</div>
        <div className="footer-section">Hej</div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </div>
    </Fade>
  );
}
