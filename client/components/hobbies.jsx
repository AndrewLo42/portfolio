import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function BottomBar(props) {
  return (
    <div className="bottom-page">
      <Container className="bottom-container" id="contact">
        <Col className="bottom-title text-center">
        </Col>
        <Row className="credits-bar mt-2 justify-content-center contact-row">
          <div>© Andrew Lo 2020</div>
        </Row>
        <div className="pt-3 footer_top">
          <div className="container">
          </div>
        </div>
      </Container>
    </div>
  );

}

export default BottomBar;
