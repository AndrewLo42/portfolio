import React from 'react';

function Aside() {
  return (
    <div className="aside">
      <a href="https://www.linkedin.com/in/AndrewCLo/"
        target="_blank"
        rel="noopener noreferrer"
        className="decoration-none contact-linkedin pointer mr-2"
        aria-label="LinkedIn">
        <div className="d-flex">
          <i className="fab fa-linkedin aside-icon m-auto" />
        </div>
      </a>
      <a href="https://github.com/andrewlo42"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 decoration-none contact-github pointer mr-2"
        aria-label="Github">
        <div className="d-flex">
          <i className="fab fa-github aside-icon m-auto" />
        </div>
      </a>
      <a href="./assets/Andrew_Lo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 decoration-none pointer"
        aria-label="Resume Download"
      >
        <div className="d-flex">
          <i className="far fa-file-alt aside-icon m-auto" />
        </div>
      </a>
    </div>
  );
}

export default Aside;
