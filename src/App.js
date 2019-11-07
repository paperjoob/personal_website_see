import React from 'react';

import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Travel from './Travel/Travel';
import ContactMe from './ContactMe/ContactMe';
import { Parallax } from 'react-parallax';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <NavBar />
        <Main />
        <AboutMe />
        <Portfolio />
        <Parallax
            blur={5}
            bgImage={require('./Images/germany.JPG')}
            bgImageAlt="munich"
            strength={100}
        >
        <Travel />
        </Parallax>
        <ContactMe />

    </React.Fragment>
  );
}

export default App;
