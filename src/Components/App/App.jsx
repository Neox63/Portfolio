import { Fragment } from 'react';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Hero from '../Sections/Hero/Hero.jsx';
import Projects from '../Sections/Projects/Projects.jsx';
import Skills from '../Sections/Skills/Skills.jsx';
import './App.css';

const App = () => {
  return (
      <Fragment>
        <div id="landing">
          <Hero />
        </div>
        <div id="about">
          <AboutMe />
        </div>

        <div id="skills">
        <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </Fragment>
  );
}

export default App;
