import React from 'react';
import {
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
  }

  handleToggle() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    let offset = -90;

    if (window.innerWidth < 768) {
      offset = -286;
    }
    return (
      <>
        <Container fluid={true} className="py-3 shadow-lg header-item sticky-top">
          <Navbar expand="md">
            <NavbarBrand onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
            }}
            className="pointer decoration-none">
              <img src="./images/blip.png"
                className="img-fluid header-logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.handleToggle} navbar="true" > <i className="navbar-icon fas fa-bars"></i></NavbarToggler>
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
                    Applications
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
        </Container>
      </>
    );
  }
}

export default NavBar;
