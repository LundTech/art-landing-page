import React from "react";
import { Fade } from "react-reveal";
import "./Thanks.css";

export default function Thanks(props) {
  const theme = props.theme;
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  const buttonColor = props.buttonColor;

  return (
    <div className="basic-contact" style={{ backgroundColor: backgroundColor }}>
      <Fade distance="40px">
        <h1 style={{ color: textColor }}>Tack!</h1>
        <h2 style={{ color: textColor }}>
          Vi återkommer till dig så snart vi kan
        </h2>
      </Fade>
    </div>
  );
}
