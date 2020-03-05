import React from 'react';

function ScrollIndicator(props) {
  return (
    <div className={`scroll ${props.mode}`}>
      <p>
        Scroll
      </p>
    </div>
  );
}

export default ScrollIndicator;
