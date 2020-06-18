import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
// import CarouselComponent from './carousel';

class Welcome extends React.Component {

  render() {
    return (
      <div className={` welcome-page ${this.props.mode}`}>
        <h1 className={`ml-4 welcome-message ${this.props.mode}`}>Life is this crazy, mystical thing...</h1>
        <Container className='p-2'>
          <Col>
            <div className={`ml-4 mt-2 p-1 welcome-title ${this.props.mode}`}>
              <h1>My name is Andrew Lo</h1>
              <div className={'welcome-footer'}>I&#39;m a programmer with a mission to learn everything and create elegant solutions in a digital world.</div>
            </div>
          </Col>
          <Row className="row justify-content-center">
          </Row>
        </Container>
        <div className="welcome-container">
        </div>
        <div className={`row justify-content-center menu-links ${this.props.mode}`}>
          <a href="https://www.linkedin.com/in/AndrewCLo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
            aria-label="LinkedIn">
            <div className="d-flex">
              <i className={`fab fa-linkedin footer-icon m-auto ${this.props.mode}`} />
            </div>
          </a>
          <a href="https://github.com/andrewlo42"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 decoration-none default-nav contact-github pointer mr-2"
            aria-label="Github">
            <div className="border-div-small d-flex">
              <i className={`fab fa-github footer-icon m-auto ${this.props.mode}`} />
            </div>
          </a>
          <a href="./assets/Andrew_Lo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-none pointer mr-2"
            aria-label="Resume Download">
            <div className="border-div-small d-flex">
              <i className={`far fa-file-alt footer-icon m-auto ${this.props.mode}`} />
            </div>
          </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L120,240C240,256,480,288,720,266.7C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

      </div>
    );
  }

}

export default Welcome;
