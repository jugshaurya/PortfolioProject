import React from "react";
import { Link } from "react-router-dom";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div id="myNav" className="overlay" style={{ height }}>
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content">
        <Link to="#">Projects</Link>
        <Link to="#">Work Stats</Link>
        <Link to="#">Experience</Link>
        <Link to="#">Education</Link>
        <Link to="#">Skills</Link>
        <Link to="#">Blogs</Link>
        <Link to="#">Contact Me</Link>
      </div>
    </div>
  );
};

export default CollapsedNavbar;
