// Header.js
import React, { useState } from 'react';
import Me from './Me';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Background from '../components/Background';

const Header = () => {
  let githubLinkURL = "https://github.com/BerkantGC";
  const [selectedPage, setSelectedPage] = useState("me");

  const handleSelection = (pageName) => {
    setSelectedPage(pageName);
  }

  const renderPage = () => {
    switch (selectedPage) {
      case 'me':
        return <Me />;
      case 'about-me':
        return <About />;
      case 'contact-me':
        return <Contact />;
      case 'projects':
        return <Projects />;
    }
  };

  return (
    <Background selectedPage={selectedPage} handler={handleSelection}>
        {renderPage()}
    </Background>
  );
}

export default Header;

