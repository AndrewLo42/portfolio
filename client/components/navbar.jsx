import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';

class NavBar extends React.Component {
  render() {
    return(
      <>
        <Container fluid={true} className="py-3 shadow-lg bg-white sticky-top">
            <NavbarToggler onClick={this.handleToggle} navbar="true" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    About Me
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
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
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Tools
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="applications"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Applications
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
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
