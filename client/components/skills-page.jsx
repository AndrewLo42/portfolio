import React from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

function Skills() {
  return (
    <div className="skills-page content-div position-relative" id="skills">
      <Container>
        <Row className="mobile-skills-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading mb-4 spread slide-in">Technical Skills</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-javascript-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">JavaScript</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-react-original"></i>
                <div className="my-3">
                  <h4 className="text-center h5">React.js</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-html5-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">HTML5</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-jquery-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">jQuery</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-postgresql-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">PostgreSQL</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-nodejs-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">Node.JS</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <i className="devicon-css3-plain"></i>
                <div className="my-3">
                  <h4 className="text-center h5">CSS3</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img src="https://img.icons8.com/color/48/000000/arduino.png"></img>
                <div className="my-3">
                  <h4 className="text-center h5">Arduino</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
