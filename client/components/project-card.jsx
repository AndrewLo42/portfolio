import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from 'reactstrap';

class AppCard extends React.Component {
  constructor(props) {
    super(props);
    this.sendBasket = this.sendBasket.bind(this);
  }

  sendBasket() {
    this.props.toggleBasket(this.props.appInfo.appId - 1);
  }

  render() {
    return (
      <>
        <Card className={`app-card mr-3 fade-in ${this.props.mode}`} onClick={this.sendBasket}>
          <CardImg top className="mt-2 project-icon img-fluid" src={this.props.appInfo.icon} />
          <CardBody>
            <CardTitle className="text-center">
              {this.props.appInfo.name}
            </CardTitle>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default AppCard;
