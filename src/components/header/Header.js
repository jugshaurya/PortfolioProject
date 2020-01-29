import React from "react";
import CollapsedNavbar from "./CollapseNavbar";
import "./Header.scss";

class Header extends React.Component {
  state = {
    isCollapsedNavOpen: false,
    height: 0
  };

  showNavbar = val => {
    const obj = {
      isCollapsedNavOpen: val,
      height: val ? 100 : 0
    };
    this.setState(obj);
  };

  render() {
    return (
      <header>
        <div className="name">Shaurya Singhal</div>
        <div className="navbar">
          <a href="#about">About Me</a>
          <a href="#workstats">Work Stats</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          {/* <a to="#blogs">Blogs</a> */}
        </div>
        <div className="navbar-collapse" onClick={() => this.showNavbar(true)}>
          &#9776;
        </div>
        <CollapsedNavbar
          showNavbar={this.showNavbar}
          height={`${this.state.height}%`}
        />
      </header>
    );
  }
}

export default Header;
