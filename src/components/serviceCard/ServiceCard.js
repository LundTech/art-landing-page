import React from "react";
import "./ServiceCard.css";

export default function ServiceCard({
  title,
  icon,
  description,
  iconColor,
  textColor,
  backgroundColor,
}) {
  return (
    <div
      className="service-container"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="service-icon">
        <span
          className="iconify"
          data-icon={icon}
          style={{ color: iconColor, fontSize: "3rem" }}
          data-inline="false"
        ></span>
      </div>
      <div class="service-card-title">{title}</div>
      <div class="service-card-description">{description}</div>
    </div>
  );
}
