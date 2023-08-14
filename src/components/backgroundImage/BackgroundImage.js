import React, { Component } from "react";
import "./BackgroundImage.css";
import { Fade } from "react-reveal";

class BackgroundImage extends Component {
  render() {
    const src = this.props.src;
    const alt = this.props.alt;
    return (
      <div>
        <Fade>
            <div className="bg-image">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="bg-image-text">Experience <br/>art </span>
                <span className="bg-image-text-subtitle">18th of August 7PM EST <br/>East West Gallery Street</span>
                <div className="bg-image-btn-container">
                  <input className="bg-image-btn" type="button" value={"RSVP"}></input>
                </div>
                
              </div>
            </div>
        </Fade>
      </div>
    );
  }
}

export default BackgroundImage;
