import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import BottomBar from './hobbies';

function ContactFooter(props) {
  return (
    <div className={`contact-page ${props.mode}`}>
      <Container className="footer-container" id="contact">
        <Col className={`mb-2 footer-title text-center ${props.mode}`}>
          Contact Me
        </Col>
        <Row className={`mt-5 justify-content-center contact-row ${props.mode}`}>
          <p className="text-center mb-md-0 mx-3">
            <a href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
              className="pointer"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt mr-2" />Orange County
            </a>
          </p>
          <p className="text-center mb-md-0 mx-3">
            <a href="mailto:andrewclo42@gmail.com"
              className="pointer">
              <i className="fas fa-envelope solid mr-2" />AndrewCLo42@gmail.com
            </a>
          </p>
          <p className="text-center mb-md-0 mx-3">
            <a href="tel:+19492325930"
              className="pointer">
              <i className="fas fa-phone mr-2" />(949) 232-5930
            </a>
          </p>
        </Row>
        <div className="pt-1 footer_top">
          <div className="container">
            <Row className="justify-content-center row">
              <div className="">
                <div className={`menu-links ${props.mode}`}>
                  <a href="https://www.linkedin.com/in/AndrewCLo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
                    aria-label="LinkedIn">
                    <div className="d-flex">
                      <i className={`fab fa-linkedin footer-icon m-auto ${props.mode}`} />
                    </div>
                  </a>
                  <a href="https://github.com/andrewlo42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 decoration-none default-nav contact-github pointer mr-2"
                    aria-label="Github">
                    <div className="border-div-small d-flex">
                      <i className={`fab fa-github footer-icon m-auto ${props.mode}`} />
                    </div>
                  </a>
                  <a href="./assets/Andrew_Lo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none pointer mr-2"
                    aria-label="Resume Download">
                    <div className="border-div-small d-flex">
                      <i className={`far fa-file-alt footer-icon m-auto ${props.mode}`} />
                    </div>
                  </a>
                </div>
              </div>
            </Row>
          </div>
          <Container className="mt-5 contact-btn-container">
            <Row className="justify-content-center">
              <a
                className="contact-link"
                href="https://contact.andrewclo.com"
                target="_blank"
                rel="noopener noreferrer">
                <button className={`contact-btn btn border ${props.mode}`}>Messsage Me</button>
              </a>

            </Row>
          </Container>
        </div>
      </Container>
      <Col className=" mt-1 justify-content-center ">
        <div className="pb-5 row justify-content-center">
          <img src="./images/die20.png" className="img-fluid header-logo"/>
        </div>
        {/* <div className="mb-2 boxed-btn3 text-center" href="#">
          <div className="smash-quote">
            <div>... and sometimes you just go out like a buster.</div>
            <div> ~ Mang0</div>
            <img className="smash-ball" src="https://img.icons8.com/ios-filled/50/000000/super-smash-bros.png">
            </img>
          </div>
        </div>
        <div className="hover-me"></div> */}
      </Col>
      <BottomBar/>
    </div>
  );

}

export default ContactFooter;
