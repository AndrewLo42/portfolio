import React from 'react';

function Aside(props) {
  return (
    <div className='aside'>
      <a href="https://www.linkedin.com/in/AndrewCLo/"
        target="_blank"
        rel="noopener noreferrer"
        className="decoration-none default-nav contact-linkedin pointer mr-2"
        aria-label="LinkedIn">
        <div className="d-flex">
          <i className="fab fa-linkedin aside-icon m-auto" />
        </div>
      </a>
      <a href="https://github.com/andrewlo42"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 decoration-none default-nav contact-github pointer mr-2"
        aria-label="Github">
        <div className="border-div-small d-flex">
          <i className="fab fa-github aside-icon m-auto" />
        </div>
      </a>
      <a href="./assets/Andrew_Lo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 decoration-none default-nav pointer pl-1"
        aria-label="Resume Download"
      >
        <div className="border-div-small d-flex">
          <i className="far fa-file-alt aside-icon m-auto" />
        </div>
      </a>
    </div>

  );
}

export default Aside;
