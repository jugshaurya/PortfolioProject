import React, { Component } from "react";

import { ReactComponent as GithubSvg } from "../../assets/github.svg";
// import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/linkedin.svg";
import "./PersonalInfo.scss";

class PersonalInfo extends Component {
  state = {
    githubLink: "https://github.com/jugshaurya",
    facebookLink: "https://www.facebook.com/jugshaurya",
    twitterLink: "https://twitter.com/jugshaurya",
    linkedinLink: "https://www.linkedin.com/in/jugshaurya",
    about: [
      {
        name: "Shaurya Singhal",
        value: "Software Developer"
      },
      {
        name: "Main Stack:",
        value: " MERN"
      },
      {
        name: "Email:",
        value: "shauryasinghal84@gmail.com"
      },
      {
        name: "Address:",
        value: "Mansarovar Park, Delhi-110032​"
      }
    ]
  };

  render() {
    return (
      <div className="personal-info" id="about">
        <div className="photo-and-info">
          <div className="container">
            <div className="photo"></div>
            <div className="info">
              <div className="info-details">
                {this.state.about.map((details, i) => (
                  <div className="details" key={i}>
                    <div className="name">{details.name}</div>
                    {details.name === "Email:" ? (
                      <a
                        href={`mailto:${details.value}`}
                        className="email value effect"
                      >
                        {details.value}
                      </a>
                    ) : (
                      <div className="value">{details.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div className="container">
            <div className="links">
              <a
                href={this.state.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSvg className="githubsvg" />
              </a>
              {/* <a
                href={this.state.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookSvg />
              </a> */}
              <a
                href={this.state.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterSvg />
              </a>
              <a
                href={this.state.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
