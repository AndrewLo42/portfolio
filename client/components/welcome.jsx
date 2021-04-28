import React from 'react';

class Welcome extends React.Component {

  render() {
    return (
      <div className={` welcome-page ${this.props.mode}`}>
        <section className="home-home">
          <section className="home-icon pb-2 px-2" id="">
            <div className=" container home-img"role="img" aria-label="Andrew Lo sitting at a piano with a microphone in front of him" >
              <h2 className="home-img-msg"> Andrew Lo</h2>
              {/* <span className="d-none d-sm-block home-title-inner home-title container">  I am a Software Engineer with a passion for coding and learning.</span> */}

            </div>
            <div className="">
              <div className={' row mt-5 justify-content-center contact-row side-contacts'}>
                <p className="text-center mb-md-0 mx-2 py-3">
                  <a href="https://www.linkedin.com/in/AndrewCLo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 decoration-none default-nav contact-linkedin pointer"
                    aria-label="LinkedIn">
                    <i className="fab fa-linkedin footer-icon m-auto" />
                  </a>
                </p>
                <p className=" text-center mb-md-0 py-3 mx-2">
                  <a href="./assets/Andrew_Lo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-5 decoration-none pointer "
                    aria-label="Resume Download">
                    <i className="far fa-file-alt footer-icon m-auto" />
                  </a>
                </p>
                <p className="text-center mb-md-0 mx-2 py-3">
                  <a href="https://github.com/andrewlo42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5 decoration-none default-nav contact-github pointer "
                    aria-label="Github">
                    <i className="fab fa-github footer-icon m-auto" />
                  </a>
                </p>
              </div>
            </div>
            {/* <span className="d-block d-sm-none container mobile-home-title-inner">  I am a Software Engineer with a passion for coding and learning.</span> */}

            <div className="home-sub">
              {/* <span className="">Hello there!</span> */}
            </div>
          </section>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#262429" fillOpacity="1" d="M0,224L120,240C240,256,480,288,720,266.7C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

      </div>
    );
  }

}

export default Welcome;
