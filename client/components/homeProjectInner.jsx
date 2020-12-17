import React from 'react';
import Applications from './projects';

class ProjectInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Realmer: {
        title: 'Shadow Realmer',
        git: 'https://github.com/AndrewLo42/shadow-realmer',
        description: ' A meet up app for trading card players who want to find games to play, find events, trade cards, or just to make new friends. Built with React and PostgreSQL, utilizing various npm packages to enhance features.',
        example: './images/realmer.gif',
        link: 'http://shadowrealmer.com',
        icon: './images/shadowrealmer.png'
      },
      Pedals: {
        title: 'Wicked Pedals',
        git: 'https://github.com/AndrewLo42/wicked-pedals',
        description: 'Full-stack e-commerce experience for guitar pedals and pedal supplies. Built with React and PostgreSQL',
        example: './images/wp.gif',
        link: 'http://wicked-pedals.andrewclo.com',
        icon: './images/minpedal.png'
      },
      Exodia: {
        title: 'Exodia Exodus',
        git: 'https://github.com/AndrewLo42/exodia-exodus',
        description: ' A JavaScript memory matching application based on the popular card game, Yu-Gi-Oh. Users have to match 5 pairs before the Computer player!',
        example: './images/mm.gif',
        link: 'http://exodia-exodus.andrewclo.com',
        icon: './images/mmfavicon.png'
      },
      Fireflies: {
        title: 'Fireflies',
        git: '',
        description: ' A one-stop platform for advocacy. Support the causes you care about, track your impact, and share your experiences with the world! I was on boarded as a Software Engineer, our Git page is currently private, but enjoy the website! ',
        example: './images/firefliesExample.png',
        link: 'https://fireflies.app/#/',
        icon: './images/logo-black.png'
      },
      Etc: {
        title: 'Etc'
      }
    };
  }

  render() {
    if (this.props.project === 'Etc') {
      return (
        <div>
          <div className="justify-content-center d-flex mb-4">
            <div className="line"></div>
          </div>
          <div className="project-header row justify-content-between">
            <div className="d-flex projects-back fas fa-arrow-left" onClick={() => this.props.handleView('none')}>
              <div className="d-none pl-2 d-sm-flex">
              Back
              </div>
            </div>
            <div className="fas">Other Projects</div>
          </div>
          <Applications/>
        </div>
      );
    }
    return (
      <div>
        <div className="justify-content-center d-flex mb-4">
          <div className="line"></div>
        </div>
        <div className="project-header row justify-content-between">
          <div className="d-flex projects-back fas fa-arrow-left" onClick={() => this.props.handleView('none')}>
            <div className="d-none pl-2 d-sm-flex">
              Back
            </div>
          </div>
          <div className="fas">{this.state[this.props.project].title}</div>
        </div>
        <div className="d-flex container justify-content-center">
          <img className="project-inner-icon" src={this.state[this.props.project].icon}></img>
        </div>
        <div className="flex justify-content-center">
          <div className="container home-project-description">
            {this.state[this.props.project].description}
          </div>
          <div className="row my-2 justify-content-center">
            <a
              href={this.state[this.props.project].link}
              className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >Live</a>
            <a
              href={this.state[this.props.project].git}
              className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub</a>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <img className="home-example-gif" src={this.state[this.props.project].example} />
        </div>
      </div>
    );
  }
}

export default ProjectInner;
