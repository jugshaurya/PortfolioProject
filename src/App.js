import React from "react";
import Header from "./components/header/Header";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      {/* <Projects />
      <WorkStats />
      <Experience />
      <Education />
      <Skills />
      <Blogs />
      <ContactMe /> */}
    </div>
  );
}

export default App;
