import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';

function BottomBar() {
  const year = new Date().getFullYear();
  return (
    <div className="bottom-page">
      <Container>
        <Row className="credits-bar justify-content-center text-center">
          <div>© Andrew Lo {year}</div>
        </Row>
      </Container>
    </div>
  );
}

export default BottomBar;
