import React from "react";
import "./Contact.css";
import Button from "../../components/button/Button";

export default function Contact(props) {
  const theme = props.theme;
  return (
    <div style={{ backgroundColor: theme.primaryBackgroundColor }}>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="greet-contact-button"
            buttonClass={"greet-button-style"}
            theme={theme}
            icon={"fa-phone"}
            text="Ring oss och boka tid"
            href="#contact"
          />

          <Button
            className="greet-contact-button"
            buttonClass={"greet-button-style"}
            theme={theme}
            icon={"fa-envelope"}
            text="Skicka ett mejl"
            href="#contact"
          />
        </div>
      </div>
    </div>
  );
}
