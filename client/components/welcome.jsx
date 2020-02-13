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
          caption: 'Software Engineer'
        },
        {
          src: './images/foxhmm.jpg',
          altText: 'hmm',
          caption: 'Creator'
        },
        {
          src: './images/knee.gif',
          altText: 'knee',
          caption: 'Innovator'
        }
      ]
    };
  }

  render() {
    return (
      <div className=" welcome-page">
        <h1 className="ml-4 welcome-message">Life is this crazy, mystical thing...</h1>
        <div className="welcome-container">
        </div>
        <Container className=''>
          <Col>
            <h1 className="welcome-title">My name is Andrew Lo, and I&#39;m a ...</h1>
          </Col>
          <Row className="row justify-content-center">
            <CarouselComponent slides={this.state.carouselSlides}/>
          </Row>
        </Container>

      </div>
    );
  }

}

export default Welcome;
