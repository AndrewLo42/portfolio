import React from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.goToIndicator = this.goToIndicator.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  // componentDidMount() {
  //   this.startTimer();
  // }

  componentDidUpdate() {
    this.stopTimer();
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(this.goToNextSlide, 3000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  goToPreviousSlide() {
    this.setState(previousState => {
      if (previousState.slideIndex === 0) {
        return { slideIndex: this.props.slides.length - 1 };
      }
      return { slideIndex: previousState.slideIndex - 1 };
    });
  }

  goToNextSlide() {
    this.setState(previousState => {
      if (previousState.slideIndex === this.props.slides.length - 1) {
        return { slideIndex: 0 };
      }
      return { slideIndex: previousState.slideIndex + 1 };
    });
  }

  goToIndicator(event) {
    this.setState({ slideIndex: parseInt(event.target.id) });
  }

  renderIndicators() {
    const currentIndicator = [];
    for (let index = 0; index < this.props.slides.length; index++) {
      if (index === this.state.slideIndex) {
        currentIndicator.push(<i key={index} id={index} onClick={this.goToIndicator} className={'fa fa-circle mx-1'} />);
      } else {
        currentIndicator.push(<i key={index} id={index} onClick={this.goToIndicator} className={'fa fa-circle-o mx-1'} />);
      }
    }
    return currentIndicator;
  }

  render() {
    return (
      <div className="carousel w-100 carousel-container">
        <i className="carousel-direction fas fa-chevron-left carousel-control-prev" onClick={this.goToPreviousSlide}/>
        <i className="carousel-direction fas fa-chevron-right carousel-control-next" onClick={this.goToNextSlide}/>

        <div key={this.state.slideIndex} className="carousel-slides m-auto">
          <img
            className=" img-fluid carousel-img"
            src={`${this.props.slides[this.state.slideIndex].src}`}/>
        </div>
        <div className="indicator-container carousel-indicators justify-content-center row my-2">
          {this.renderIndicators()}
        </div>
      </div>

    );
  }
}

export default CarouselComponent;
