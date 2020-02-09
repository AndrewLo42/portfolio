import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
import Applications from './projects';
import Welcome from './welcome';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar/>
        <Welcome />
        <AboutMe />
        <Applications />
        <ContactFooter />
      </>
    );
  }
}

export default App;
