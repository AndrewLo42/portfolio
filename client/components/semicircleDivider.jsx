import React from 'react';

function SemiCircle() {
  return (
    <div className="semicircle">
      <svg width="100%" height="100%" viewBox="0 0 500 100" preserveAspectRatio="none">
        <path d="M0,100 C125,0 375,0 500,100 Z" fill="var(--surface)"></path>
      </svg>
    </div>
  );
}
export default SemiCircle;
