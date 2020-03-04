import React from 'react';
import AppCard from './project-card';
import BigApp from './big-project-card';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        {
          appId: 1,
          name: 'Yu-Gi-Oh Memory Match',
          github: 'https://github.com/AndrewLo42/yu-gi-oh-memory-match',
          live: 'http://exodia-exodus.andrewclo.com/',
          icon: '/images/mmfavicon.png',
          example: '/images/mm.gif',
          description: 'A JavaScript memory matching application based on the popular card game, Yu-Gi-Oh. Users have to match 5 pairs before the Computer player!'
        },
        {
          appId: 2,
          name: 'Wicked Pedals',
          github: 'https://github.com/AndrewLo42/wicked-pedals',
          live: 'http://wicked-pedals.andrewclo.com/',
          icon: '/images/minpedal.png',
          example: './images/wp.gif',
          description: 'Full-stack e-commerce experience for guitar pedals and pedal supplies. Built with React and PostgreSQL'
        },
        {
          appId: 3,
          name: 'Shadow Realmer',
          github: 'https://github.com/AndrewLo42/shadow-realmer',
          live: 'http://shadowrealmer.com/',
          icon: '/images/shadowrealmer.png',
          example: '/images/realmer.gif',
          description: 'A meet up app for trading card players of all kinds; enthusiasts, casuals, and the curious who want to find games to play, find events, trade cards, or just to make new friends. Built with React and PostgreSQL, utilizing various npm packages. '
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
      <Container className="py-3">
        <div className={`m-auto justify-content-center ${classes} ${this.props.mode}`}>
          <div className={`app-title text-center ${this.props.mode}`}>
            {this.state.currentApp.name}
          </div>
          <div className={` px-3 app-info text-center ${this.props.mode}`}>{this.state.currentApp.description}</div>
          <Row className="py-2 text-center justify-content-center">
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
          <Row>
            <img className="p-2 app-example m-auto img-fluid" src={this.state.currentApp.example}></img>
          </Row>
        </div>
      </Container>
    );
  }

  render() {
    const showBasketState = this.state.openAppBasket ? 'app-basket' : 'app-basket hide';
    return (
      <div className={`apps-page content-div ${this.props.mode}`} id="applications">
        <Container className="">
          <h2 className={`text-center mb-2 apps-title ${this.props.mode}`}>Applications Produced</h2>
          <Col className={`apps-container d-sm-flex d-none justify-content-around ${this.props.mode}`}>
            <AppCard appInfo={this.state.apps[0]} toggleBasket={this.toggleAppBasket} mode={this.props.mode}/>
            <AppCard appInfo={this.state.apps[1]} toggleBasket={this.toggleAppBasket} mode={this.props.mode}/>
            <AppCard appInfo={this.state.apps[2]} toggleBasket={this.toggleAppBasket} mode={this.props.mode}/>
          </Col>
          <Col className={`apps-container d-sm-none d-block ${this.props.mode}`}>
            <BigApp appInfo={this.state.apps[0]}/>
            <BigApp appInfo={this.state.apps[1]} />
            <BigApp appInfo={this.state.apps[2]} />
          </Col>
          {this.showAppInfo(showBasketState)}

        </Container>
      </div>
    );
  }
}

export default Applications;
