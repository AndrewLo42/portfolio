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

function AppCard(props) {
  return (
    <>
      <Card className="app-card mr-3">
        <CardImg top className="mt-2 project-icon img-fluid" src="/images/mmfavicon.png" />
        <CardBody>
          <CardTitle className="text-center">
            Yu-Gi-Oh Memory Match
          </CardTitle>
        </CardBody>
      </Card>
    </>

  );
}
