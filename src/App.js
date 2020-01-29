import React from "react";
import Header from "./components/header/Header";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import ExtraInfo from "./components/extrainfo/ExtraInfo";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <ExtraInfo />
      <Projects />
      <Experience />
      <Education />
      {/*<Skills />
      <WorkStats />
      <Blogs />
      <ContactMe /> */}
    </div>
  );
}

export default App;
