import React from "react";
import "./About.css";
import AboutSection from "./AboutSection";
import { Fade } from "react-reveal";

export default function About(props) {
  const theme = props.theme;
  return (
    <div className="about-main" id="about">
      <AboutSection theme={theme} />
    </div>
  );
}
