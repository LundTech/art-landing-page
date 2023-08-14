import React, { Component } from "react";
import "./FullWidthImage.css";
import { Fade } from "react-reveal";

class FullWidthImage extends Component {
  render() {
    const src = this.props.src;
    const alt = this.props.alt;
    const background = this.props.background ? { position: 'absolute' } : {}
    const defaultHeight = '30rem';
    const height = this.props.height ? this.props.height : defaultHeight;
    const style = { ...background }
    console.log('background', background)
    return (
      <div>
        <Fade>
          <div className="full-width-image-div">
            <img className="full-width-image-img" src={src} alt={alt} style={{ ...style }}/>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FullWidthImage;
