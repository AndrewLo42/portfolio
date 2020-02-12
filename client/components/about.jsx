import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function AboutMe() {
  return (
    <div className="about-page about-description content-div" id="about">
      <Container className="">
        <Row>
          <Col className="" md="6">
            <h3 className="mb-4 d-block d-sm-none text-md-left text-center fade-in slide-in-10 about-me-title">About Me</h3>
            <img className="my-img my-2 img-fluid fade-in slide-in d-flex" src="./images/coffeekid.jpg" alt="profile" />
            <div className="about-icons my-3 d-flex justify-content-center fade-in slide-in">
              <a href="https://github.com/andrewlo42"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-github pointer mr-2"
                aria-label="Github">
                <div className="border-div-small d-flex">
                  <i className="fab fa-github about-icon m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/AndrewCLo/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-linkedin pointer mr-2"
                aria-label="LinkedIn">
                <div className="d-flex">
                  <i className="fab fa-linkedin about-icon m-auto" />
                </div>
              </a>
              <a href="./assets/Andrew_Lo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none pointer"
                aria-label="Resume Download"
              >
                <div className="border-div-small d-flex">
                  <i className="far fa-file-alt about-icon m-auto" />
                </div>
              </a>
            </div>
          </Col>
          <Col className="md-8" sm="12">
            <div className="d-flex h-100">
              <div className="m-auto">
                <div className="position-relative d-none d-sm-block slide-in">
                  <h3 className="about-me-title heading mb-4 spread fade-in">About Me</h3>
                </div>
                <div className="about-paragraphs slide-in-10">
                  <p>Hi! My name is Andrew Lo, and I&#39;m a Software Engineer who has a passion for coding and an unyielding thirst for learning.</p>
                  <p>I&#39;m well versed in JavaScript (ES5 & ES6), React.js, jQuery, Node.js, Express, SQL, HTML, and CSS. I&#39;m skilled with tools like Git/GitHub, Postman, npm, and Webpack. I&#39;ve had the privilege of working on team-based and solo projects to build full-stack web applications.</p>
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
