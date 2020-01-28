import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="#">Projects</Link>
          <Link to="#">Work Stats</Link>
          <Link to="#">Experience</Link>
          <Link to="#">Education</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Blogs</Link>
          <Link to="#">Contact Me</Link>
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
