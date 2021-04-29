import React from 'react';
import ProjectInner from './homeProjectInner';

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
      <section className = "home-projects-sub text-center mb-5" id="applications">
        <div className="justify-content-center d-flex mb-4">
          <div className="line"></div>
        </div>
        <h1 className="mb-4">Projects</h1>
        <div className="home-project-slides container">
          <div className="home-slide " onClick={() => this.handleView('Realmer')}>
            Shadow Realmer
            <img className=" realmer-slide" src="./images/shadowrealmer.png" alt="Brown triangle with 5 circles in colors to represent the Magic Trading Card Game colors"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Pedals')}>
            Wicked Pedals
            <img className="realmer-slide" src="./images/minpedal.png" alt="A white MXR guitar pedal"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Exodia')}>
            Exodia Exodus
            <img className="realmer-slide" src="./images/mmfavicon.png" alt="A millennium puzzle from Yu-Gi-Oh"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Fireflies')}>
            Fireflies
            <img className="realmer-slide " src="./images/logo-black.png" alt="A cartoon interpretation of a firefly"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Todo')}>
            Todo App
            <img className="realmer-slide" src="./images/noteicon.png" alt="A piece of notepad paper with a computer in the middle"></img>
          </div>
          <div className="home-slide text-center" onClick={() => { document.querySelector('.home-projects-sub').scrollIntoView({ behavior: 'smooth', block: 'end' }); this.handleView('Etc'); }}>
            Other Projects

          </div>
        </div>
      </section>
    );
  }
}
export default HomePageProjects;
