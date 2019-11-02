import React from 'react';

import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Travel from './Travel/Travel';
import ContactMe from './ContactMe/ContactMe';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Parallax} from 'react-parallax';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <NavBar />
        <Parallax
          blur={10}
          bgImage={require('./Images/pinkgold.jpg')}
          bgImageAlt="the cat"
          strength={200}>
          <Main />
        </Parallax>

        <AboutMe />
        <Portfolio />
        <Travel />
        <ContactMe />

    </React.Fragment>
  );
}

export default App;
