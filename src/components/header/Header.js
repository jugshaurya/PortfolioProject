import React from "react";
import CollapsedNavbar from "./CollapseNavbar";
import "./Header.scss";

class Header extends React.Component {
  state = {
    isCollapsedNavOpen: false,
    height: 0,
    activeLink: "about"
  };

  componentDidMount() {
    if (2 === 2) {
      throw new Error("sad");
    }
  }

  showNavbar = val => {
    const obj = {
      isCollapsedNavOpen: val,
      height: val ? 100 : 0
    };
    this.setState(obj);
  };

  handleActiveLink = item => {
    this.setState({ activeLink: item });
  };

  render() {
    return (
      <header>
        <div className="name">Shaurya Singhal</div>
        <div className="navbar">
          <a
            href="#about"
            className={this.state.activeLink === "about" ? "active" : ""}
            onClick={() => this.handleActiveLink("about")}
          >
            About Me
          </a>
          <a
            href="#workstats"
            className={this.state.activeLink === "workstats" ? "active" : ""}
            onClick={() => this.handleActiveLink("workstats")}
          >
            Work Stats
          </a>
          <a
            href="#projects"
            className={this.state.activeLink === "projects" ? "active" : ""}
            onClick={() => this.handleActiveLink("projects")}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={this.state.activeLink === "experience" ? "active" : ""}
            onClick={() => this.handleActiveLink("experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            className={this.state.activeLink === "education" ? "active" : ""}
            onClick={() => this.handleActiveLink("education")}
          >
            Education
          </a>
          <a
            href="#skills"
            className={this.state.activeLink === "skills" ? "active" : ""}
            onClick={() => this.handleActiveLink("skills")}
          >
            Skills
          </a>
          {/* <a
            to="#blogs"
            className={this.state.activeLink === "blogs" ? "active" : ""}
            onClick={() => this.handleActiveLink("blogs")}
          >
            Blogs
          </a> */}
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
