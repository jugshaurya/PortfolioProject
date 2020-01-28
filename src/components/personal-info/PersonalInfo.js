import React, { Component } from "react";

import { ReactComponent as GithubSvg } from "../../assets/github.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/linkedin.svg";
import "./PersonalInfo.scss";

class PersonalInfo extends Component {
  state = {
    githubLink: "https://github.com/jugshaurya",
    facebookLink: "https://www.facebook.com/jugshaurya",
    twitterLink: "https://twitter.com/jugshaurya",
    linkedinLink: "https://www.linkedin.com/in/shaurya-singhal-5b6a8a133",
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
      <div className="personal-info">
        <div className="photo-and-info">
          <div className="container">
            <div className="photo"></div>
            <div className="info">
              <div className="info-details">
                {this.state.about.map(details => (
                  <p className="details">
                    <div className="name">{details.name}</div>
                    <div className="value">{details.value}</div>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div className="container">
            <div className="links">
              <a href={this.state.githubLink} target="_blank">
                <GithubSvg className="githubsvg" />
              </a>
              <a href={this.state.facebookLink} target="_blank">
                <FacebookSvg />
              </a>
              <a href={this.state.twitterLink} target="_blank">
                <TwitterSvg />
              </a>
              <a href={this.state.linkedinLink} target="_blank">
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
