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
        <Col className="footer-title text-center">
          Contact Me
        </Col>
        <Row className="justify-content-center contact-row">
          <p className="text-center mb-md-0 mx-4">
            <i className="fas fa-map-marker-alt mr-2" />Orange County
          </p>
          <p className="text-center mb-md-0 mx-4">
            <i className="fas fa-envelope solid mr-2" />AndrewCLo42@gmail.com
          </p>
          <p className="text-center mb-md-0 mx-4">
            <i className="fas fa-phone mr-2" />(949)-232-5930
          </p>
        </Row>
        <div className="pt-3 footer_top">
          <div className="container">
            <Row className="justify-content-center row">
              <div className="">
                <div className=" menu-links">
                  <a href="https://www.linkedin.com/in/AndrewCLo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-linkedin pointer mr-2"
                    aria-label="LinkedIn">
                    <div className="d-flex">
                      <i className="fab fa-linkedin footer-icon m-auto" />
                    </div>
                  </a>
                  <a href="https://github.com/andrewlo42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-github pointer mr-2"
                    aria-label="Github">
                    <div className="border-div-small d-flex">
                      <i className="fab fa-github footer-icon m-auto" />
                    </div>
                  </a>
                  <a href="./assets/Andrew_Lo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none pointer mr-2"
                    aria-label="Resume Download">
                    <div className="border-div-small d-flex">
                      <i className="far fa-file-alt footer-icon m-auto" />
                    </div>
                  </a>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </Container>
      <Col className=" justify-content-center ">
        <div className="mb-2 boxed-btn3 text-center" href="#">
          <div className="smash-quote">
            <div>... and sometimes you just go out like a buster.</div>
            <div> ~ Mang0</div>
            <img className="smash-ball" src="https://img.icons8.com/ios-filled/50/000000/super-smash-bros.png">
            </img>
          </div>

        </div>
        <div className="hover-me"></div>
      </Col>
      <BottomBar />
    </div>
  );

}

export default ContactFooter;
