import React from 'react';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6">
            <div className="about-details">
              <h3>About Me</h3>
              <p className="about-description">I am a REALMER.</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="about-img">
              <div className="color-pattern d-lg-block">
                <img className="my-pic" src="./images/color_grid.png" alt="profile" />
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center fade-in slide-in-10">
            <a href="https://github.com/andrewlo42"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-none default-nav contact-github pointer mr-2"
              aria-label="Github">
              <div className="border-div-small d-flex">
                <i className="fab fa-github about-icon m-auto" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/AndrewCLo/"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-none default-nav contact-linkedin pointer mr-2"
              aria-label="LinkedIn">
              <div className="border-div-small d-flex">
                <i className="fab fa-linkedin about-icon m-auto" />
              </div>
            </a>
            <a href="/assets/"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-none default-nav contact-general pointer"
              aria-label="Resume Download"
              download>
              <div className="border-div-small d-flex">
                <i className="far fa-file-alt about-icon m-auto" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
// www.linkedin.com/in/AndrewCLo
