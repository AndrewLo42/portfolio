import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
import Applications from './projects';
import Welcome from './welcome';
import Skills from './skills-page';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar/>
        <Welcome />
        <AboutMe />
        <Skills />
        <Applications />
        <ContactFooter />
      </>
    );
  }
}

export default App;
