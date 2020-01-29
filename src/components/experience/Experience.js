import React, { Component } from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-section">
      <section>
        <h4>Experience</h4>
      </section>
      <div className="container">
        <div className="left">
          <div className="date">
            <span>Jan-May 2019</span> &<span>May-Sept 2019</span>
          </div>
          <div className="occupation">
            <span> Teaching Assistant </span>
            <span> DataStructure and Algorithm in Python </span>
          </div>
        </div>
        <div className="right">
          <div className="place">
            <span>@</span>Coding Ninjas
          </div>
          <div className="task-list">
            <div className="heading">
              Key responsibilities during the internship (8 months) were -
            </div>
            <ul className="list">
              <li>Taking doubt sessions</li>
              <li>Debugging codes</li>
              <li>Helping students in their assignments.</li>
              <li>Solved 1300+ Doubts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
