import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
import Applications from './projects';
import Welcome from './welcome';
import Skills from './skills-page';
import Tools from './tools-page';
import FadeInPage from './fade-in-pages';

class App extends React.Component {

  renderPages() {
    const welcome = <Welcome />;
    const about = <AboutMe />;
    const skills = <Skills />;
    const tools = <Tools />;
    const apps = <Applications />;
    const contact = <ContactFooter />;
    const pages = [
      welcome,
      about,
      skills,
      tools,
      apps,
      contact
    ];

    const pageList = pages.map(page =>
      <FadeInPage key={pages.indexOf(page)} section={page}/>
    );
    return pageList;
  }

  render() {
    return (
      <>
        <NavBar />
        {this.renderPages()}
      </>
    );
  }
}

export default App;
