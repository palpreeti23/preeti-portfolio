import React from "react";
import Contact from "../component/Contact";
import Main from "../component/Main";
import Projects from "../component/Projects";
import Skills from "../component/Skills";

function Home() {
  return (
    <div className="  ">
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
