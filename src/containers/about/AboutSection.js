import React, { Component } from "react";
import "./About.css";
import { about } from "../../portfolio";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";

class AboutSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ backgroundColor: theme.primaryBackgroundColor }}>
        {about.data.map((aboutItem) => {
          return (
            <div className="skills-main-div">
              {aboutItem.imageAlign === "left" && (
                <Fade>
                  <Image
                    src={require(`../../assests/images/electrician.webp`)}
                    alt={"electrician"}
                  />
                </Fade>
              )}
              <div className="skills-text-div">
                <Fade>
                  <h1
                    className="skills-heading"
                    style={{ color: theme.primaryTextColor }}
                  >
                    {aboutItem.title}
                  </h1>
                </Fade>

                <Fade>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutItem.descriptionHtml,
                    }}
                  />
                </Fade>
              </div>
              {aboutItem.imageAlign === "right" && (
                <Fade>
                  <Image
                    width="100%"
                    height="100%"
                    src={require(`../../assests/images/copper-pipe-residential-plumbing-slider.jpg.webp`)}
                    alt={"copper-pipes"}
                  />
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AboutSection;
