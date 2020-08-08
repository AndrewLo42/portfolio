import React from 'react';

function SemiCircle() {
  return (
    <div className="semicircle svg">
      <svg width="520" height="160" viewBox="0 0 500 150" preserveAspectRatio="none">
        <defs>
          <clipPath id="shape">
            <path d="M0,0 L0,0 Q250,300 500,0 L500,0 Z"></path>
          </clipPath>
        </defs>
        <rect x="0" y="0" width="500" height="150" fill="#DDFFE7" clipPath="url(#shape)"></rect>
      </svg>
    </div>
  );
}
export default SemiCircle;
