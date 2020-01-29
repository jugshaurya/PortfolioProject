import React from "react";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div id="myNav" className="overlay" style={{ height }}>
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <a href="#about">About Me</a>
        <a href="#workstats">Work Stats</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        {/* <a href="#blogs">Blogs</a> */}
      </div>
    </div>
  );
};

export default CollapsedNavbar;
