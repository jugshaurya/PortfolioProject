import React, { Component } from "react";

import "./Projects.scss";
import projectImage from "../../assets/a.jpg";
class Projects extends Component {
  state = {
    projects: [
      {
        photo: "../../assets/a.jpg",
        name: "Trello Clone",
        code: "https://github.com/jugshaurya/trello-clone",
        website: "https://github.com/later.sh",
        techused: [
          "React.js + Redux",
          "MongoDb",
          "Node+Express",
          "Passport + bcrypt + jwt",
          "MDN Drag & Drop",
          "multer"
        ],
        started: "Dec 26, 2019"
      },
      {
        photo: "../../assets/a.jpg",
        name: "ChitChat(Discord Clone)",
        code: "https://github.com/jugshaurya/chit-chat",
        website: "https://github.com/later.sh",
        techused: [
          "React.js + Redux",
          "Firebase Auth",
          "Firebase RealtimeDatabase",
          "Firebase Storage",
          "sass"
        ],
        started: "Jan 7, 2020"
      },
      {
        photo: "../../assets/a.jpg",
        name: "Productive Weekday",
        code: "https://github.com/jugshaurya/productive-weekday",
        website: "https://productive-weekday.netlify.com",
        techused: [
          "React.js + Redux",
          "MongoDb",
          "Node+Express",
          "d3.js(for racecar barchart)",
          "Cherrio",
          "now.sh + netlify"
        ],
        started: "Jan 15, 2020"
      },
      {
        photo: "../../assets/a.jpg",
        name: "Cloth Zone",
        code: "https://github.com/jugshaurya/cloth-zone",
        website: "https://github.com/later.sh",
        techused: [
          "React.js + Redux",
          "Redux Thunk",
          "Firebase Auth",
          "Firebase Firestore"
        ],
        started: "Oct 23, 2019"
      },
      {
        photo: "../../assets/a.jpg",
        name: "Url Shortner",
        code: "https://github.com/jugshaurya/urlShortner",
        website: "https://little.now.sh",
        techused: ["Vanilla JS", "MongoDb", "Node+Express", "now.sh"],
        started: "Aug 30, 2019"
      },
      {
        photo: "../../assets/a.jpg",
        name: "Mario Bros Lvl1",
        code: "https://github.com/jugshaurya/mario",
        website: "https://github.com/later.sh",
        techused: ["ES6 Javascript", "Phaser V3", "Babel", "Webpack"],
        started: "Aug 10, 2019"
      }
    ]
  };

  render() {
    return (
      <div className="projects-section">
        <section>
          <h4>Projects</h4>
        </section>
        <div className="container">
          {this.state.projects.map((project, i) => (
            <div className="project-card" key={100 + i}>
              <div className="pic">
                <img src={projectImage} alt="projectpic" />
                <div className="name">{project.name}</div>
              </div>
              <div className="code">
                <span>code:</span>
                <a href={project.code} target="_blank">
                  {project.code}
                </a>
              </div>
              <div className="website">
                <span>Website:</span>
                <a href={project.website} target="_blank">
                  {project.website}
                </a>
              </div>
              <div className="techused">
                <span>Tech used:</span>
                {project.techused.map((tech, j) => (
                  <div className="tech" key={200 + j}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="start-and-visit">
                <div className="started">
                  <span>Started:</span>
                  {project.started}
                </div>
                <div className="visit">
                  <a href={project.website}>Visit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
