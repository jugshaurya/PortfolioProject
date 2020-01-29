import React, { Component } from "react";

import "./Skills.scss";

class Skills extends Component {
  state = {
    skills: [
      {
        name: "Python",
        level: "Intermediate"
      },
      {
        name: "Numpy",
        level: "Intermediate"
      },
      {
        name: "Pandas",
        level: "Intermediate"
      },
      {
        name: "Matplotlib",
        level: "Intermediate"
      },
      {
        name: "Supervised Learning",
        level: "Intermediate"
      },
      {
        name: "Javascript",
        level: "Intermediate"
      },
      {
        name: "React.js",
        level: "Intermediate"
      },
      {
        name: "Node.js",
        level: "Intermediate"
      },
      {
        name: "Express",
        level: "Intermediate"
      },
      {
        name: "MongoDb",
        level: "Intermediate"
      },
      {
        name: "Redux",
        level: "Intermediate"
      },
      {
        name: "d3",
        level: "Beginner"
      },
      {
        name: "Phaser",
        level: "Intermediate"
      },
      {
        name: "UnSupervised Learning",
        level: "Beginner"
      }
      // {
      //   name: "GraphQL",
      //   level: "Beginner"
      // },
      // {
      //   name: "Apollo",
      //   level: "Beginner"
      // },
      // {
      //   name: "Gatsby",
      //   level: "Beginner"
      // }
    ]
  };

  render() {
    return (
      <div className="skills-section" id="skills">
        <section>
          <h4>Skills</h4>
        </section>
        <div className="container">
          {this.state.skills.map((skill, i) => (
            <div className="skill" key={300 + i}>
              <div className="name">{skill.name}</div>
              <div className="level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
