import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education-section" id="education">
      <section>
        <h4>Education</h4>
      </section>
      <div className="container">
        <div className="left">
          <div className="date">
            <span>2016-2019</span>
          </div>
          <div className="occupation">
            <span> Bachelor's Degree </span>
            <span> (H) Computer Science </span>
          </div>
        </div>
        <div className="right">
          <div className="place">
            Shaheed Sukhdev College of Business Studies
          </div>
          <div className="task-list">
            <div className="heading">CGPA -</div>
            <ul className="list">
              <li>8.554</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
