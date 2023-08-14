import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const backgroundColor = this.props.backgroundColor;
    const link = settings.isSplash ? "/splash" : "/";
    return (
      <Fade top duration={0} distance="20px">
        <SeoHeader />
        <div style={{ backgroundColor: backgroundColor }}>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span
                className="logo-name"
                style={{ color: theme.headerTextColor }}
              >
                {greeting.logo_name}
              </span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul
              className="menu"
              style={{ backgroundColor: theme.primaryBackgroundColor }}
            >
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
