import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import CarouselComponent from './carousel';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselSlides: [
        {
          src: './images/nair.jpg',
          altText: 'Compete',
          caption: 'Competitor'
        },
        {
          src: './images/foxhmm.jpg',
          altText: 'hmm',
          caption: 'Fox HMMM'
        },
        {
          src: './images/knee.gif',
          altText: 'knee',
          caption: 'YAAAARRRGLE'
        }
      ]
    };
  }

  render() {
    return (
      <div className=" welcome-page">
        <Container>
          <Row className="row justify-content-center">
            <CarouselComponent slides={this.state.carouselSlides}/>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Welcome;
