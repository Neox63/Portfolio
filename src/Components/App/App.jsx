/* eslint-disable react/jsx-no-comment-textnodes */

import { Fragment, useEffect, useRef, useState } from 'react';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Hero from '../Sections/Hero/Hero';
import Projects from '../Sections/Projects/Projects';
import Skills from '../Sections/Skills/Skills';
import NET from 'vanta/dist/vanta.net.min'
import Footer from '../Footer/Footer';

const App = () => {

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        backgroundColor: "#1E1E1E",
        scale: 1.00,
        scaleMobile: 1.00,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        color: 0x7787,
        maxDistance: 15.00,
        spacing: 15.00,
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
      <Fragment>
        <div className="m" ref={myRef}>
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
        </div>
      </Fragment>
  );
}

export default App;
