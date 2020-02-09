import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.toggleInfoModal = this.toggleInfoModal.bind(this);
  }

  toggleInfoModal() {

  }

  render() {
    return (
      <div className="apps-page content-div" id="applications">
        <Container>
          <h2 className="text-center mb-2 apps-title">Applications Produced</h2>
          <Row className="justify-content-center">
            <Card className="app-card mr-3">
              <CardImg top className="mt-2 project-icon img-fluid" src="/images/mmfavicon.png" />
              <CardBody>
                <CardTitle className="text-center">
                 Yu-Gi-Oh Memory Match
                </CardTitle>
              </CardBody>
            </Card>
            <Card className="app-card mr-3">
              <CardImg top className="mt-2 project-icon img-fluid" src="/images/minpedal.png"/>
              <CardBody>
                <CardTitle className="text-center">
                Wicked Pedals
                </CardTitle>
              </CardBody>
            </Card>
            <Card className="app-card">
              <CardImg top className="mt-2 project-icon img-fluid" src="/images/shadowrealmer.png" />
              <CardBody>
                <CardTitle className="text-center">
                Shadow Realmer
                </CardTitle>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Applications;
