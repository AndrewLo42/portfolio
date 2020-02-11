import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

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
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="menu_links">
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="account-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Col className=" justify-content-center ">
        <div className="boxed-btn3 text-center" href="#">
          Hobbies
          {/* <img src="https://img.icons8.com/ios-filled/50/000000/super-smash-bros.png"></img> */}
        </div>
      </Col>
    </div>
  );

}

export default ContactFooter;
