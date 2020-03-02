import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
import Applications from './projects';
import Welcome from './welcome';
import Skills from './skills-page';
import Tools from './tools-page';
import FadeInPage from './fade-in-pages';
import ScrollIndicator from './scroll-indicator';
import Aside from './aside';
import Context from './context';
// import useColorModes from './useMode';
// const { theme, toggleTheme } = useColorModes();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'dark'
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  renderPages() {
    const welcome = <Welcome mode={this.state.view}/>;
    const about = <AboutMe />;
    const skills = <Skills />;
    const tools = <Tools />;
    const apps = <Applications />;
    const contact = <ContactFooter />;
    const pages = [
      welcome,
      about,
      apps,
      skills,
      tools,
      contact
    ];

    const pageList = pages.map(page =>
      <FadeInPage key={pages.indexOf(page)} section={page} />
    );
    return pageList;
  }

  toggleColor(color) {
    this.setState({ view: color });
  }

  render() {
    const view = this.state.view;
    return (
      <>
        <Context.Provider value={{
          view
        }} />
        <NavBar mode={this.state.view} toggleColor={this.toggleColor}/>
        <Aside />
        <ScrollIndicator />
        {this.renderPages()}
      </>
    );
  }
}

export default App;
