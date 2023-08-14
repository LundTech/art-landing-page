import React from "react";
import "./ContactMeButton.css";
import { contactInfo } from "../../portfolio";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function ContactMeButton({
  text,
  className,
  href,
  newTab,
  theme,
}) {
  return (
    <div className={className}>
      <a
        class="contact-me-button"
        href={"mailto:" + contactInfo.email_address}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
}
