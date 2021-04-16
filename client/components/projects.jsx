import React from 'react';
// import AppCard from './project-card';
// import BigApp from './big-project-card';
import {
  Container,
  Row,
  Button
} from 'reactstrap';

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        {
          appId: 1,
          name: 'SSB Ironman',
          github: 'https://github.com/AndrewLo42/SSBironManChallenge',
          live: 'https://ssb.andrewclo.com/melee-ironman',
          icon: '/images/mmfavicon.png',
          example: '/images/ironManExample.png',
          description: 'A React app that supports the ironman minigame for Super Smash Brothers players! '
        },
        {
          appId: 2,
          name: 'Green Roofs',
          github: 'https://github.com/AndrewLo42/greenRoof',
          live: 'https://greenroof.andrewclo.com/',
          icon: '/images/minpedal.png',
          example: './images/wp.gif',
          description: ' A site for a mock environmental campaign to implement green roofs at UCSB. Built in React and utilizes PostgreSQL as a basic database to keep track of people who signed our on-site petition.'
        },
        {
          appId: 3,
          name: 'Keeb Designer',
          github: 'https://github.com/AndrewLo42/keyboard-designer',
          live: 'https://keebdesigner.herokuapp.com/',
          icon: '/images/keebfavi.png',
          example: '/images/realmer.gif',
          description: 'A fun tool to help decide on color schemes for your next mechanical keyboard! With the ability to mix and match your case color and keycap colors, you can plan your dream build.'
        }
      ],
      openAppBasket: false,
      currentApp: {
        appId: -1
      }
    };
    this.toggleAppBasket = this.toggleAppBasket.bind(this);
    this.basketFade = this.basketFade.bind(this);
  }

  toggleAppBasket(appId) {
    if ((appId + 1) === this.state.currentApp.appId) {
      this.setState({
        openAppBasket: !this.state.openAppBasket,
        currentApp: this.state.apps[appId]
      });
    } else {
      this.setState({
        openAppBasket: false
      });
      setTimeout(this.basketFade, 300, appId);
    }
  }

  basketFade(appId) {
    this.setState({
      openAppBasket: true,
      currentApp: this.state.apps[appId]
    });
  }

  showAppInfo(classes) {
    return (
      <Container className="py-3 mb-3">
        <div className={`m-auto justify-content-center ${classes} ${this.props.mode}`}>
          <div className={`app-title text-center ${this.props.mode}`}>
            {this.state.currentApp.name}
          </div>
          <div className={` px-3 app-info text-center ${this.props.mode}`}>{this.state.currentApp.description}</div>
          <Row className="py-3 mb-2 text-center justify-content-center">
            <Button
              href={this.state.currentApp.live}
              className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github">Live</Button>
            <Button
              href={this.state.currentApp.github}
              className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github">Source</Button>
          </Row>
          {/* <Row>
            <img className="p-2 app-example m-auto img-fluid" src={this.state.currentApp.example}></img>
          </Row> */}
        </div>
      </Container>
    );
  }

  render() {
    const showBasketState = this.state.openAppBasket ? 'app-basket' : 'app-basket hide';
    return (
      <div className={`apps-page content-div ${this.props.mode}`} id="applications">
        <Container className="mt-2">
          <div className="home-slide " onClick={() => this.toggleAppBasket(0)}>
            SSB Ironman
            <img className=" realmer-slide" src="./images/super-smash-bros.png"></img>
          </div>
          <div className="home-slide " onClick={() => this.toggleAppBasket(1)}>
            UCSB Green Roofs
            <img className=" realmer-slide" src="./images/greenroof.png"></img>
          </div>
          <div className="home-slide " onClick={() => this.toggleAppBasket(2)}>
            Keeb Designer
            <img className=" realmer-slide" src="./images/keebfavi.png"></img>
          </div>
          {this.showAppInfo(showBasketState)}
        </Container>
      </div>
    );
  }
}

export default Applications;
