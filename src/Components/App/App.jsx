/* eslint-disable react/jsx-no-comment-textnodes */

import { Fragment, useEffect, useRef, useState } from 'react';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Hero from '../Sections/Hero/Hero';
import Projects from '../Sections/Projects/Projects';
import Skills from '../Sections/Skills/Skills';
import NET from 'vanta/dist/vanta.net.min'
import Footer from '../Footer/Footer';

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

        <div id="footer">
          <Footer />
        </div>
      </Fragment>
  );
}

export default App;
