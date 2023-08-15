import React, { Component } from "react";
import "./BackgroundImage.css";
import { Fade } from "react-reveal";

class BackgroundImage extends Component {
  render() {
    const onRSVPButtonPress= this.props.onRSVPButtonPress;
    return (
      <div>
        <Fade>
            <div className="bg-image">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="bg-image-text">Experience <br/>art </span>
                <span className="bg-image-text-subtitle">18th of August 7PM EST <br/>East West Gallery Street</span>
                <div className="bg-image-btn-container">
                  <input className="bg-image-btn" type="button" value={"Sign up"} onClick={onRSVPButtonPress}></input>
                </div>
              </div>
            <div style={{ display: 'flex' }} className="credit">
              Credit
            </div>
            </div>
        </Fade>
      </div>
    );
  }
}

export default BackgroundImage;
