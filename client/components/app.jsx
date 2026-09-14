import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
import Welcome from './welcome';
import Skills from './skills-page';
import Tools from './tools-page';
import FadeInPage from './fade-in-pages';
import ScrollIndicator from './scroll-indicator';
import Aside from './aside';
import SemiCircle from './semicircleDivider';
import HomePageProjects from './homeProjects';

function App() {
  const pages = [
    <Welcome key="welcome" />,
    <AboutMe key="about" />,
    <HomePageProjects key="projects" />,
    <Skills key="skills" />,
    <Tools key="tools" />
  ];

  return (
    <>
      <NavBar />
      <Aside />
      <ScrollIndicator />
      <div className="pages-container">
        {pages.map((page, index) => (
          <FadeInPage key={index} section={page} />
        ))}
      </div>
      <SemiCircle />
      <ContactFooter />
    </>
  );
}

export default App;
