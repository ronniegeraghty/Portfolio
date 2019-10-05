import React from "react";
import "./App.css";

import Nav from "./components/nav";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Projects from "./components/projects";
import ContactMe from "./components/contactMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
