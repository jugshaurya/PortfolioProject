import React from "react";

import Header from "./components/header/Header";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import ExtraInfo from "./components/extrainfo/ExtraInfo";
import WorkStats from "./components/workstats/WorkStats";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <ExtraInfo />
      <WorkStats />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      {/*
      <Blogs />
      */}
      <Footer />
      <a href="#about" className="bottom-right-float">
        &uarr;
      </a>
    </div>
  );
}

export default App;
