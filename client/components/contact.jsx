import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import BottomBar from './hobbies';

function ContactFooter() {
  return (
    <div className="contact-page">
      <Container className="footer-container" id="contact">
        <Col className="mb-2 footer-title text-center">
          Contact Me
        </Col>
        <Row className="mt-5 justify-content-center contact-row">
          <p className="bracket-hover text-center mb-md-0 mx-3">
            <a href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
              className="pointer"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt mr-2" />Orange County
            </a>
          </p>
          <p className="bracket-hover text-center mb-md-0 mx-3">
            <a href="mailto:andrewclo42@gmail.com"
              className="pointer">
              <i className="fas fa-envelope mr-2" />AndrewCLo42@gmail.com
            </a>
          </p>
          <p className="bracket-hover text-center mb-md-0 mx-3">
            <a href="tel:+19492325930"
              className="pointer">
              <i className="fas fa-phone mr-2" />(949) 232-5930
            </a>
          </p>
        </Row>
        <div className="pt-1 footer-top">
          <div className="container">
            <Row className="justify-content-center row">
              <div className="menu-links">
                <a href="https://www.linkedin.com/in/AndrewCLo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 decoration-none contact-linkedin pointer mr-2"
                  aria-label="LinkedIn">
                  <div className="d-flex">
                    <i className="fab fa-linkedin footer-icon m-auto" />
                  </div>
                </a>
                <a href="https://github.com/andrewlo42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 decoration-none contact-github pointer mr-2"
                  aria-label="Github">
                  <div className="d-flex">
                    <i className="fab fa-github footer-icon m-auto" />
                  </div>
                </a>
                <a href="./assets/Andrew_Lo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-none pointer mr-2"
                  aria-label="Resume Download">
                  <div className="d-flex">
                    <i className="far fa-file-alt footer-icon m-auto" />
                  </div>
                </a>
              </div>
            </Row>
          </div>
          <Container className="mt-5 contact-btn-container">
            <Row className="justify-content-center">
              <a
                className="contact-link"
                href="mailto:andrewclo42@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <button className="contact-btn btn">Message Me</button>
              </a>
            </Row>
          </Container>
        </div>
      </Container>
      <Col className="mt-4 justify-content-center">
        <div className="pb-5 row justify-content-center">
          <img src="./images/die20.png" className="img-fluid header-logo" alt="An Andrew Lo branded twenty sided dice"/>
        </div>
      </Col>
      <BottomBar/>
    </div>
  );

}

export default ContactFooter;
