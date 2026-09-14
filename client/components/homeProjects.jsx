import React from 'react';
import ProjectInner from './homeProjectInner';
import Divider from './pageDivider';

class HomePageProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 'none'
    };
    this.handleView = this.handleView.bind(this);
  }

  handleView(target) {
    this.setState({ showing: target });
  }

  render() {
    if (this.state.showing !== 'none') {
      return (
        <div className="container home-projects-sub">
          <ProjectInner handleView={this.handleView} project={this.state.showing}/>
        </div>
      );
    }
    return (
      <section className="home-projects-sub text-center mb-5" id="applications">
        <Divider />
        <h1 className="mb-4 section-heading">Projects</h1>
        <div className="home-project-slides container">
          <div className="home-slide" onClick={() => this.handleView('Realmer')}>
            <img className="home-slide-icon" src="./images/shadowrealmer.png" alt="Brown triangle with 5 circles in colors to represent the Magic Trading Card Game colors"></img>
            Shadow Realmer
          </div>
          <div className="home-slide" onClick={() => this.handleView('Pedals')}>
            <img className="home-slide-icon" src="./images/minpedal.png" alt="A white MXR guitar pedal"></img>
            Wicked Pedals
          </div>
          <div className="home-slide" onClick={() => this.handleView('Exodia')}>
            <img className="home-slide-icon" src="./images/mmfavicon.png" alt="A millennium puzzle from Yu-Gi-Oh"></img>
            Exodia Exodus
          </div>
          <div className="home-slide" onClick={() => this.handleView('Fireflies')}>
            <img className="home-slide-icon" src="./images/matchraiser-logo.png" alt="Colorful arches that represent an M with a heart"></img>
            Matchraiser
          </div>
          <div className="home-slide" onClick={() => this.handleView('Todo')}>
            <img className="home-slide-icon" src="./images/noteicon.png" alt="A piece of notepad paper with a computer in the middle"></img>
            Todo App
          </div>
          <div className="home-slide" onClick={() => { document.querySelector('.home-projects-sub').scrollIntoView({ behavior: 'smooth', block: 'end' }); this.handleView('Etc'); }}>
            Other Projects
          </div>
        </div>
      </section>
    );
  }
}
export default HomePageProjects;
