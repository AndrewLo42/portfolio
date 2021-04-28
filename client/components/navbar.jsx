import React from 'react';
import {
  Row,
  Navbar,
  NavbarToggler,
  Container,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand
} from 'reactstrap';
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isOpen: false
    });
    this.handleToggle = this.handleToggle.bind(this);
    this.handleColorToggle = this.handleColorToggle.bind(this);
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        const currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById('navbar').style.top = '0';
        } else {
          document.getElementById('navbar').style.top = '-8rem'; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  handleToggle() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  handleColorToggle() {
    this.props.toggleColor(event.target.name);
  }

  render() {
    let offset = -90;

    if (window.innerWidth < 768) {
      offset = -286;
    }
    return (
      <>
        <Container id="navbar" fluid={true} className="py-2 shadow-lg header-item sticky-top">
          <Navbar expand="md">
            <NavbarBrand onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
            }}
            className="pointer decoration-none">
              <Row className="pl-2">
                <img src="./images/die20.png"
                  className="img-fluid header-logo"
                  alt="An Andrew Lo branded twenty sided dice"/>
                {/* <div className="text-center m-auto">ALo</div> */}
              </Row>
            </NavbarBrand>
            <div className="mobile-header-icons">
              <a href="https://github.com/andrewlo42"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-github pointer mr-2"
                aria-label="Github">
                <div className="border-div-small d-flex">
                  <i className="fab fa-github aside-icon m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/AndrewCLo/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-linkedin pointer mr-2"
                aria-label="LinkedIn">
                <div className="d-flex">
                  <i className="fab fa-linkedin aside-icon m-auto" />
                </div>
              </a>
              <a href="./assets/Andrew_Lo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none pointer mr-2"
                aria-label="Resume Download"
              >
                <div className="border-div-small d-flex">
                  <i className="far fa-file-alt aside-icon m-auto" />
                </div>
              </a>
            </div>
            <NavbarToggler onClick={this.handleToggle} navbar="true" >
              <i className="navbar-icon fas fa-bars"></i>
            </NavbarToggler>

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer-spin px-0 nav-link"
                    onClick={this.handleToggle}>
                    About
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="applications"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer-spin px-0 nav-link"
                    onClick={this.handleToggle}>
                    Projects
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer-spin px-0 nav-link"
                    onClick={this.handleToggle}>
                    Skills
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="tools"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer-spin px-0 nav-link"
                    onClick={this.handleToggle}>
                    Tools
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer-spin px-0 nav-link"
                    onClick={this.handleToggle}>
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          {/* <div className="color-container text-center">
            <div className="text-center">
              <Button name="dark" type="checkbox" className="dark-color-button text-center mr-1" onClick={() => this.handleColorToggle()}> D </Button>
              <Button name="light" type="checkbox" className="light-color-button text-center" onClick={() => this.handleColorToggle()}> L </Button>
            </div>
          </div> */}
        </Container>
      </>
    );
  }
}

export default NavBar;
