import { Fragment } from 'react';
import Hero from '../Sections/Hero/Hero.jsx';
import Projects from '../Sections/Projects/Projects.jsx';
import Skills from '../Sections/Skills/Skills.jsx';
import './App.css';

function App() {
  return (
      <Fragment>
        <Hero />
        <Skills />
        <Projects />
      </Fragment>
  );
}

export default App;
