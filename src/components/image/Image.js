import React, { Component } from "react";
import "./Image.css";
import { Fade, Flip } from "react-reveal";

class Image extends Component {
  render() {
    const src = this.props.src;
    const alt = this.props.alt;
    const width = this.props.width;
    const height = this.props.height;
    return (
      <div>
        <Fade>
          <div className="image-div">
            <img
              style={{ width: width, height: height }}
              className="image-img"
              src={src}
              alt={alt}
            />
          </div>
        </Fade>
      </div>
    );
  }
}

export default Image;
