import React from 'react';

import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Travel from './Travel/Travel';
import ContactMe from './ContactMe/ContactMe';

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
        <Travel />
        <ContactMe />

    </React.Fragment>
  );
}

export default App;
