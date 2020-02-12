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
          caption: 'Visionary'
        }
      ]
    };
  }

  render() {
    return (
      <div className=" welcome-page">
        <h1 className="ml-4 welcome-message">Welcome to my website!</h1>
        <img src="./images/GCwave.jpg" className="welcome-container"></img>
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
