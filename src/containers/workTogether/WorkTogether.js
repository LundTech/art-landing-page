import React from "react";
import "./WorkTogether.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactMeButton from "../../components/contactMeButton/ContactMeButton";
import { Fade } from "react-reveal";

export default function WorkTogether(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={500} distance="40px">
      <div className="greet-main" id="greeting">
        <h3 className="worktogether-header" style={{ color: theme.text }}>
          Got a project in mind? Let's work together!
        </h3>
        <div className="worktogether-description" style={{ color: theme.text }}>
          <p>
            I'm available for fully remote projects and happy to meet over your
            favourite video meeting app.
          </p>
          <ContactMeButton
            className={"contact-me-button-div"}
            text={"Get in touch"}
            theme={theme}
          />
          <SocialMedia theme={theme} />
        </div>
      </div>
    </Fade>
  );
}
