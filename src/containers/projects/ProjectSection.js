import React, { Component } from "react";
import "./Projects.css";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {projects.data.map((project) => {
          return (
            <div className="skills-main-div">
              {project.imageAlign === "left" && (
                <Fade left duration={500}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={project.fileName} theme={theme} />
                  </div>
                </Fade>
              )}
              <div className="skills-text-div">
                <Fade right duration={500}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {project.title}
                  </h1>
                </Fade>
                <Fade right duration={500}>
                  <h1 className="projects-text" style={{ color: theme.text }}>
                    {project.description}
                  </h1>
                </Fade>
                {/* <Fade right duration={500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade> */}
                {/* <Fade right duration={500}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade> */}
              </div>
              {project.imageAlign === "right" && (
                <Fade left duration={500}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={project.fileName} theme={theme} />
                  </div>
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectSection;
