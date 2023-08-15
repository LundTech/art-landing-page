import React, { Component } from "react";
import "./BackgroundImage.css";
import { Fade } from "react-reveal";
import Credit from "../../components/credit/Credit.js";

class BackgroundImage extends Component {
  render() {
    const onRSVPButtonPress = this.props.onRSVPButtonPress;
    return (
      <Fade>
        <div className="bg-image">
          <div
            className="bg-image-text-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span className="bg-image-text">
              Experience <br />
              art{" "}
            </span>
            <span className="bg-image-text-subtitle">
              18th of August 7PM EST <br />
              East West Gallery Street
            </span>
            <div className="bg-image-btn-container">
              <input
                className="bg-image-btn"
                type="button"
                value={"Sign up"}
                onClick={onRSVPButtonPress}
              ></input>
            </div>
          </div>
          {/* <Credit/> */}
        </div>
      </Fade>
    );
  }
}

export default BackgroundImage;
