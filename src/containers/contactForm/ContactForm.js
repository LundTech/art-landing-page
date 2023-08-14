import React from "react";
import { Fade } from "react-reveal";
import "./ContactForm.css";

export default function ContactForm(props) {
  const theme = props.theme;
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  const buttonColor = props.buttonColor;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    window.location.href = "/#/tack";
  };
  return (
    <div className="basic-contact" style={{ backgroundColor: backgroundColor }}>
      <Fade distance="40px">
        <form onSubmit={onSubmitHandler}>
          <h1 style={{ color: textColor }}>Kontakta oss</h1>
          <div className="contact-form-container">
            <div className="contact-form-row">
              <input
                className="contact-form-input"
                type="text"
                placeholder="Namn *"
                name="name"
              />
            </div>
            <div className="contact-form-row">
              <input
                className="contact-form-input"
                type="email"
                placeholder="Epost *"
                name="email"
              />
            </div>
            <div className="contact-form-row">
              <input
                className="contact-form-input"
                type="tel"
                placeholder="Telefonnummer *"
                name="phone"
              />
            </div>
            <div className="contact-form-row">
              <input
                className="contact-form-input"
                type="text"
                placeholder="Address *"
                name="address"
              />
            </div>
            <div className="contact-form-row">
              <textarea
                className="contact-form-input-message"
                type="text"
                placeholder="Meddelande *"
                name="email"
              />
            </div>
          </div>
          <input
            className="contact-form-submit"
            style={{ backgroundColor: buttonColor, color: textColor }}
            value="Skicka meddelande"
            type="submit"
          />
        </form>
      </Fade>
    </div>
  );
}
