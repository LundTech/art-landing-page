import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
};

export default function Button({
  text,
  icon,
  className,
  buttonClass,
  href,
  newTab,
  theme,
}) {
  return (
    <div className={className}>
      <a
        class={buttonClass}
        href={href}
        target={newTab && "_blank"}
        style={{
          backgroundColor: theme.secondaryBackgroundColor,
          color: theme.secondaryTextColor,
          display: "flex",
          textDecoration: "none",
        }}
        onMouseEnter={(event) =>
          onMouseEnter(
            event,
            theme.primaryTextColor,
            theme.primaryBackgroundColor
          )
        }
        onMouseLeave={(event) =>
          onMouseOut(
            event,
            theme.secondaryTextColor,
            theme.secondaryBackgroundColor
          )
        }
      >
        <span
          className="iconify"
          data-icon={icon}
          style={{
            verticalAlign: "middle",
            color: "black",
            color: theme.primaryTextColor,
            fontSize: "2rem",
            marginRight: "1rem",
          }}
        ></span>
        <span
          style={{ display: "flex", fontSize: "1.5rem", alignItems: "center" }}
        >
          {text}
        </span>
      </a>
    </div>
  );
}
