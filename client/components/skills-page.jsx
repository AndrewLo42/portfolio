import React from 'react';
import Divider from './pageDivider';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

function Skills(props) {
  return (
    <div className={`skills-page content-div position-relative ${props.mode}`} id="skills">
      <Divider/>
      <Container className="mt-5">
        <Row className="justify-content-md-center mobile-skills-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className={`skills-header text-center heading mb-4 spread slide-in ${props.mode}`}>Technical Skills</h3>
            </div>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className={`h-100 skills-card slide-in ${props.mode}`}>
              <CardBody>
                <i className="devicon-javascript-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">JavaScript</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-react-original"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">React.js</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-html5-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">HTML5</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-jquery-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">jQuery</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-postgresql-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">PostgreSQL</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-nodejs-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">Node.JS</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="devicon-css3-plain"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">CSS3</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="5" sm="6" className="p-sm-3 mobile-skills-card">
            <Card className="h-100 skills-card slide-in">
              <CardBody>
                <i className="fas fa-infinity"></i>
                <div className="my-3">
                  <h4 className="text-center skills-text">Arduino</h4>
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
