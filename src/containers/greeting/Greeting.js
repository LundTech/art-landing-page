import React from "react";
import "./Greeting.css";
import GreetingSection from "./GreetingSection";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;

  return (
    <Fade bottom duration={0} distance="40px">
      <div style={{ backgroundColor: theme.greetingBackgroundColor }}>
        <div className="greet-main" id="greeting">
          <GreetingSection
            theme={theme}
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        </div>
      </div>
    </Fade>
  );
}
