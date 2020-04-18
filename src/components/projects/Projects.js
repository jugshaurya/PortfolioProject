import React, { Component } from "react";

import "./Projects.scss";
import underConstructionImage from "../../assets/under-construction.png";
import trelloProjectImage from "../../assets/projectspic/trello.png";
import weekdayProjectImage from "../../assets/projectspic/weekday.png";
import closetGoodiesProjectImage from "../../assets/projectspic/closetGoodies.png";
import marioProjectImage from "../../assets/projectspic/mario.png";
import littleProjectImage from "../../assets/projectspic/little.png";
import covid19ProjectImage from "../../assets/projectspic/covid19.png";
import otherImage from "../../assets/projectspic/a.jpg";

class Projects extends Component {
  state = {
    projects: [
      // {
      //   photo: otherImage,
      //   name: "ChitChat(Discord Clone)",
      //   code: "https://github.com/jugshaurya/chit-chat",
      //   website: "https://github.com/later.sh",
      //   techused: [
      //     "React.js + Redux",
      //     "Firebase Auth",
      //     "Firebase RealtimeDatabase",
      //     "Firebase Storage",
      //     "Sass"
      //   ],
      //   started: "Jan 7, 2020",
      //   notCompleted: true
      // },
      {
        photo: weekdayProjectImage,
        name: "Productive Weekday",
        code: "https://github.com/jugshaurya/productive-weekday",
        website: "https://productive-weekday.netlify.com",
        techused: [
          "React.js + Redux",
          "MongoDB + moongose",
          "Node + Express",
          "d3.js(for racecar barchart)",
          "Cheerio(webScraping)",
          "now.sh + netlify",
        ],
        started: "Jan 15, 2020",
      },
      {
        photo: covid19ProjectImage,
        name: "Microsoft Covid19 Visualizer",
        code: "https://github.com/jugshaurya/covid19app",
        website: "https://covid19shau.now.sh",
        techused: [
          "React.js",
          "Node + Express",
          "geojson",
          "mapbox-gl",
          "node-sass",
        ],
        started: "Apr 10, 2020",
      },
      {
        photo: closetGoodiesProjectImage,
        name: "ClosetGoodies",
        code: "https://github.com/jugshaurya/closetgoodies",
        website: "https://closet-goodies.firebaseapp.com",
        techused: [
          "React.js + Redux",
          "Redux Thunk",
          "Firebase Auth",
          "Firebase Firestore",
          "Firebase Hosting",
        ],
        started: "Oct 23, 2019",
      },
      {
        photo: littleProjectImage,
        name: "Url Shortener",
        code: "https://github.com/jugshaurya/shortener",
        website: "https://little.now.sh",
        techused: [
          "Vanilla JS",
          "MongoDB",
          "Node + Express",
          "handlebars",
          "now.sh",
        ],
        started: "Aug 30, 2019",
      },
      {
        photo: trelloProjectImage,
        name: "Trello Clone",
        code: "https://github.com/jugshaurya/trello-clone",
        website: "https://clone-trello.now.sh",
        techused: [
          "React.js + Redux",
          "MongoDB + moongose",
          "Node + Express",
          "Passport + bcrypt + jwt",
          "MDN Drag & Drop",
          "multer",
        ],
        started: "Dec 26, 2019",
      },
      {
        photo: marioProjectImage,
        name: "Mario Bros Lvl 1",
        code: "https://github.com/jugshaurya/mario",
        website: "https://shamario.netlify.com",
        techused: ["Javascript", "Phaser V3", "Babel + Webpack"],
        started: "Aug 10, 2019",
        notCompleted: true,
      },
    ],
  };

  render() {
    return (
      <div className="projects-section" id="projects">
        <section>
          <h4>Projects</h4>
        </section>
        <div className="container">
          {this.state.projects.map((project, i) => (
            <div className="project-card" key={100 + i}>
              <div className="pic">
                {project.notCompleted && (
                  <div className="under-construction">
                    <img
                      src={underConstructionImage}
                      alt="underconstructionpic"
                    />
                  </div>
                )}
                <img src={project.photo} alt="projectpic" />
                <div className="name">{project.name}</div>
              </div>
              <div className="code">
                <span>code: </span>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.code}
                </a>
              </div>
              <div className="website">
                <span>Website: </span>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
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
