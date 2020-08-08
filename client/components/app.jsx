import React from 'react';
import AboutMe from './about';
import ContactFooter from './contact';
import NavBar from './navbar';
// import Applications from './projects';
import Welcome from './welcome';
import Skills from './skills-page';
import Tools from './tools-page';
import FadeInPage from './fade-in-pages';
import ScrollIndicator from './scroll-indicator';
import Aside from './aside';
import Context from './context';
// import ModeSlider from './mode-slider';
import HomePageProjects from './homeProjects';
// import useColorModes from './useMode';
// const { theme, toggleTheme } = useColorModes();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'light'
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  renderPages() {
    const welcome = <Welcome mode={this.state.view}/>;
    const about = <AboutMe mode={this.state.view}/>;
    const skills = <Skills mode={this.state.view}/>;
    const tools = <Tools mode={this.state.view}/>;
    // const apps = <Applications mode={this.state.view} />;

    const projects = <HomePageProjects mode={this.state.view} />;

    // const contact = <ContactFooter mode={this.state.view}/>;

    const pages = [
      welcome,
      about,
      projects,
      skills,
      tools
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
        {/* <ModeSlider mode={this.state.view} toggleColor={this.toggleColor}/> */}
        <Aside mode={this.state.view}/>
        <ScrollIndicator mode={this.state.view}/>
        {this.renderPages()}
        <ContactFooter mode={this.state.view} />
      </>
    );
  }
}

export default App;
