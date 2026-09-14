import React from 'react';
import { Link } from 'react-scroll';

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="hero-glow" aria-hidden="true"></div>
      <section className="home-home">
        <div className="hero-text">
          <h1 className="home-name">Andrew Lo</h1>
          <p className="home-tagline">Software Engineer</p>
          <p className="home-intro">I build full-stack web experiences with React and Node.js, with an eye for clean code and clean design.</p>
          <Link
            to="applications"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="pointer hero-cta"
          >
            View My Work
          </Link>
          <div className="row justify-content-center contact-row side-contacts">
            <p className="text-center mb-md-0 mx-2 py-3">
              <a href="https://www.linkedin.com/in/AndrewCLo/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 decoration-none contact-linkedin pointer"
                aria-label="LinkedIn">
                <i className="fab fa-linkedin footer-icon m-auto" />
              </a>
            </p>
            <p className="text-center mb-md-0 py-3 mx-2">
              <a href="./assets/Andrew_Lo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 decoration-none pointer"
                aria-label="Resume Download">
                <i className="far fa-file-alt footer-icon m-auto" />
              </a>
            </p>
            <p className="text-center mb-md-0 mx-2 py-3">
              <a href="https://github.com/andrewlo42"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 decoration-none contact-github pointer"
                aria-label="Github">
                <i className="fab fa-github footer-icon m-auto" />
              </a>
            </p>
          </div>
        </div>
        <div className="hero-terminal" aria-hidden="true">
          <div className="hero-terminal-bar">
            <span className="hero-terminal-dot dot-red"></span>
            <span className="hero-terminal-dot dot-yellow"></span>
            <span className="hero-terminal-dot dot-green"></span>
            <span className="hero-terminal-title">andrew@portfolio</span>
          </div>
          <div className="hero-terminal-body">
            <div className="term-line"><span className="term-prompt">$</span>whoami</div>
            <div className="term-line term-output">Andrew Lo &mdash; Software Engineer</div>
            <div className="term-line"><span className="term-prompt">$</span>./stack --list</div>
            <div className="term-line term-output term-accent">React &middot; Node.js &middot; TypeScript &middot; PostgreSQL</div>
            <div className="term-line"><span className="term-prompt">$</span><span className="term-cursor"></span></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
