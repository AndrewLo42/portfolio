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
      <section className = "home-projects-sub text-center" id="applications">
        <div className="justify-content-center d-flex mb-4">
          <div className="line"></div>
        </div>
        <h1 className="mb-4">Projects</h1>
        <div className="home-project-slides container">
          <div className="home-slide " onClick={() => this.handleView('Realmer')}>
            Shadow Realmer
            <img className=" realmer-slide" src="./images/shadowrealmer.png"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Pedals')}>
            Wicked Pedals
            <img className="realmer-slide" src="./images/minpedal.png"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Exodia')}>
            Exodia Exodus
            <img className="realmer-slide" src="./images/mmfavicon.png"></img>
          </div>
          <div className="home-slide" onClick={() => this.handleView('Fireflies')}>
            Fireflies
            <img className="realmer-slide " src="./images/logo-black.png"></img>
          </div>
          {/* <div className="home-slide" onClick={() => this.handleView('Etc')}>
            Other Projects
            <img className="realmer-slide " src="./images/logo-black.png"></img>
          </div> */}
        </div>
      </section>
    );
  }
}
export default HomePageProjects;
