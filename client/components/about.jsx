import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function AboutMe() {
  return (
    <div className="about-page about-description content-div" id="about">
      <Container>
        <Row className="mt-1 justify-content-center">
          <Col lg="6" md="10" sm="11">
            <h3 className="mb-4 d-block d-sm-none text-center about-me-title">About Me</h3>
            <img className="my-img my-2 img-fluid d-flex" src="./images/stairprof.jpg" alt="Andrew Lo posing arms crossed in front of a set of stairs" />
            <div className="about-icons my-3 d-flex justify-content-center">
              <a href="https://github.com/andrewlo42"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none contact-github pointer mr-2"
                aria-label="Github">
                <div className="d-flex">
                  <i className="fab fa-github about-icon m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/AndrewCLo/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none contact-linkedin pointer mr-2"
                aria-label="LinkedIn">
                <div className="d-flex">
                  <i className="fab fa-linkedin about-icon m-auto" />
                </div>
              </a>
              <a href="./assets/Andrew_Lo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none pointer mr-2"
                aria-label="Resume Download"
              >
                <div className="d-flex">
                  <i className="far fa-file-alt about-icon m-auto" />
                </div>
              </a>
              <a href="mailto: andrewclo42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none pointer"
                aria-label="email">
                <div className="d-flex">
                  <i className="fas fa-envelope about-icon m-auto" />
                </div>
              </a>
            </div>
          </Col>
          <Col className="description-container" lg="6" md="12" sm="12">
            <div className="d-flex h-100">
              <div className="m-2">
                <h3 className="about-me-title mb-4 d-none d-sm-block">About Me</h3>
                <div className="about-paragraphs">
                  <p>Hi! I&#39;m  Andrew Lo, and I&#39;m a Software Engineer with a passion for coding and an unyielding pursuit for knowledge.</p>
                  <p>I&#39;m well versed in JavaScript (ES5 & ES6), React.js, TypeScript, Node.js, Express, SQL, HTML, and CSS. I&#39;m skilled with tools like Git/GitHub, Docker, npm, and Webpack. I&#39;ve had the privilege of working on team-based and solo projects to build full-stack web applications, and I am well equipped to tackle any challenge.</p>
                  <p>I&#39;m excited to be an asset to your team!</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
