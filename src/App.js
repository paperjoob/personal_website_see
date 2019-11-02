import React from 'react';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Travel from './Travel/Travel';
import ContactMe from './ContactMe/ContactMe';

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Portfolio />
        <Travel />
        <ContactMe />
    </div>
  );
}

export default App;
