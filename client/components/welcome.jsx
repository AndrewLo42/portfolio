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
      <div className={` welcome-page ${this.props.mode}`}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L120,240C240,256,480,288,720,266.7C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        <h1 className={`ml-4 welcome-message ${this.props.mode}`}>Life is this crazy, mystical thing...</h1>
        <div className="welcome-container">
        </div>
        <Container className=''>
          <Col>
            <h1 className={`ml-4 mt-2 p-1 welcome-title ${this.props.mode}`}>My name is Andrew Lo, and I&#39;m a ...</h1>
          </Col>
          <Row className="row justify-content-center">
            <CarouselComponent slides={this.state.carouselSlides} mode={this.props.mode}/>
          </Row>
        </Container>

      </div>
    );
  }

}

export default Welcome;
