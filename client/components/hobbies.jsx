import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function BottomBar(props) {

  const getYear = () => {
    const today = new Date();
    return today.getFullYear();
  };
  return (
    <div className="bottom-page">
      <Container className="bottom-container" id="contact">
        <Col className="bottom-title text-center">
        </Col>
        <Row className="credits-bar mt-4 justify-content-center contact-row text-center pb-3">
          <div>© Andrew Lo {getYear()}</div>
        </Row>
        {/* <div className="pt-3 footer_top">
          <div className="container">
          </div>
        </div> */}
      </Container>
    </div>
  );

}

export default BottomBar;
