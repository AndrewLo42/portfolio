import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';
import SemiCircle from './semicircleDivider';

function Tools(props) {
  return (
    <div className={`tools-page content-div ${props.mode}`} id="tools">
      <div className="justify-content-center d-flex mb-4">
        <div className="line"></div>
      </div>
      <Container className="tools-cards-list">
        <Row className="mobile-skills-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className={`tools-header text-center heading mb-4 text-white spread slide-in ${props.mode}`}>Tools</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="fab fa-github"></i>
                <div className="my-3">
                  <h5 className="text-center">GitHub</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-amazonwebservices-original"></i>
                <div className="my-3">
                  <h5 className="text-center">AWS</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-nginx-original"></i>
                <div className="my-3">
                  <h5 className="text-center">nginx</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-webpack-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Webpack</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-babel-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Babel</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-ubuntu-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Ubuntu</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-chrome-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Chrome Dev Tools</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="fab fa-npm"></i>
                <div className="my-3">
                  <h5 className="text-center">npm</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-visualstudio-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">VS Code</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="fab fa-figma"></i>
                <div className="my-3">
                  <h5 className="text-center">Figma</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-docker-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Docker</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 tools-card slide-in ">
              <CardBody>
                <i className="devicon-slack-plain"></i>
                <div className="my-3">
                  <h5 className="text-center">Slack</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <SemiCircle/>
    </div>
  );
}

export default Tools;
