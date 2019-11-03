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
          blur={1}
          bgImage={require('./Images/drive.JPG')}
          bgImageAlt="main gold background"
          strength={200}
          bgImageStyle={{opacity: '0.7'}}
          >
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
