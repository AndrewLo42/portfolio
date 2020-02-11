import React from 'react';
import {
  Col,
  Card
} from 'reactstrap';

function BigApp(props) {
  return (
    <Col lg="4"
      md="6"
      sm="12"
      key={props.appId}
      className="mb-3">
      <Card
        className="big-app-card text-center mb-3 h-90 slide-in-10">
        <div className="card-body">
          <a href={props.appInfo.live}
            target="_blank"
            rel="noopener noreferrer"
            className="margin-auto pointer decoration-none position-relative">
            <img src={props.appInfo.icon}
              className="big-app-icon img-fluid border rounded mb-3"
              alt={props.alt} />
          </a>
          <h5 className="text-center mb-3">{props.name}</h5>
          <div className="mb-3">
            <p className="">{props.appInfo.description}</p>
          </div>
          <div className="d-flex align-content-start flex-wrap w-100">
          </div>
        </div>
        <div className="mt-3 card-footer">
          <a className="btn btn-share default-nav decoration-none fade-in slide-in mr-3"
            target="_blank"
            rel="noopener noreferrer"
            href={props.github}>
            <i className="fab fa-github mr-2" />Github</a>
          <a className="btn btn-share default-nav decoration-none fade-in slide-in"
            target="_blank"
            rel="noopener noreferrer"
            href={props.live}>
            <i className="far fa-window-restore mr-2" />Live</a>
        </div>
      </Card>
    </Col>
  );
}

export default BigApp;
