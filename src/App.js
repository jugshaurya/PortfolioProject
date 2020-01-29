import React from "react";
import Header from "./components/header/Header";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import ExtraInfo from "./components/extrainfo/ExtraInfo";
import Projects from "./components/projects/Projects";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <ExtraInfo />
      <Projects />
      {/*<WorkStats />
      <Experience />
      <Education />
      <Skills />
      <Blogs />
      <ContactMe /> */}
    </div>
  );
}

export default App;
