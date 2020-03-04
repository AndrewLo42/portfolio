import React from 'react';

class ModeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (event.target.checked) {
      this.props.toggleColor('dark');
    } else {
      this.props.toggleColor('light');
    }
  }

  render() {
    return (
      <div className="slider-container">
        <label onChange={() => this.handleToggle()} className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox"/>
          <div className={`text-center slider round ${this.props.mode}`}></div>
        </label>
      </div>
    );
  }
}

export default ModeSlider;
