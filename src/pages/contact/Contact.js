import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ContactForm from "../../containers/contactForm/ContactForm";
import "./Contact.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Header
          theme={this.props.theme}
          backgroundColor={theme.primaryBackgroundColor}
        />
        <ContactForm
          theme={this.props.theme}
          textColor={theme.secondaryTextColor}
          backgroundColor={this.props.theme.secondaryBackgroundColor}
          buttonColor={this.props.theme.primaryBackgroundColor}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </>
    );
  }
}

export default Contact;
