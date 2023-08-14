import React, { Component } from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";
import FullWidthImage from "../../components/fullWidthImage/FullWidthImage.js";
import Button from "../../components/button/Button.js";

class GreetingSection extends Component {
  render() {
    const theme = this.props.theme;
    const backgroundColor = this.props.backgroundColor;
    const textColor = this.props.textColor;

    return (
      <div style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div>
          <FullWidthImage
            src={require(`../../assests/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.jpg`)}
          />
        </div>
        {greeting.data.map((aboutItem) => {
          return (
            <div className="greeting-main-div">
              {aboutItem.imageAlign === "left" && (
                <Fade>
                  <Image
                    src={require(`../../assests/images/electrician.webp`)}
                    alt={"electrician"}
                  />
                </Fade>
              )}
              <div className="greeting-text-div">
                <Fade>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutItem.descriptionHtml,
                    }}
                  />
                </Fade>
              </div>
              {aboutItem.imageAlign === "right" && (
                <div className="greeting-img-div">
                  {/* <Fade>
                    <FullWidthImage
                      src={require(`../../assests/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.jpg`)}
                    /> */}
                    {/* <Image
                      width="100%"
                      height="100%"
                      src={require(`../../assests/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.jpg`)}
                      alt={"copper-pipes"}
                    /> */}
                  {/* </Fade> */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default GreetingSection;
