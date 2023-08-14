import React from "react";
import "./Services.css";
import ServiceCard from "../../components/serviceCard/ServiceCard.js";
import { serviceSection } from "../../portfolio";

export default function Services(props) {
  const theme = props.theme;
  const backgroundColor = props.backgroundColor;
  const serviceBackgroundColor = theme.secondaryBackgroundColor;
  const thirdTextColor = theme.thirdTextColor;
  const secondaryTextColor = theme.secondaryTextColor;
  return (
    <div
      className="services"
      id="services"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {serviceSection.services.map((service) => {
        return (
          <ServiceCard
            title={service.title}
            icon={service.icon}
            description={service.description}
            iconColor={thirdTextColor}
            textColor={secondaryTextColor}
            backgroundColor={serviceBackgroundColor}
          />
        );
      })}
    </div>
  );
}
