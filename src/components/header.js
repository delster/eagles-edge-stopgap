import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import Logo from '../images/logo.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header id="main-header">
        <div id="main-subheader" style={{ backgroundColor: `#054c6c`, padding: `.5em 0` }}>
          <Container style={{ textAlign: `right` }}>
            <div style={{
              display: `inline-block`,
              color: `#ffffff`,
              fontWeight: `600`,
              textTransform: `uppercase`
            }}>
              <span style={{ fontSize: `.8rem` }}> 978-774-1427 </span>
              <span style={{ fontSize: `.8rem`, margin: `0 .5em` }}>|</span>
              <a href="mailto:eaglesedge@stjohnsprep.org" style={{ color: `#fff`, fontSize: `.8rem` }}>EMAIL US</a>
            </div>
          </Container>
        </div>
        <Navbar color="light" light expand="md">
          <Container>
            <div className="img-wrap">
              <Link to='/'><img src={Logo} alt="Eagles Edge logo" style={{ maxWidth: `200px` }} /></Link>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav id="primary-nav" className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/camp-christopher">Day Camp</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/camp-sports">Sports Camps</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/academic-enrichment">Academic Enrichment</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/specialty-camps">Specialty Camps</Link>
                </NavItem>
                <Button
                  href="http://eaglesedge.campbrainregistration.com"
                  style={{
                    color: `white`,
                    backgroundColor: `#f5b742`,
                    fontWeight: `500`,
                    letterSpacing: `1px`,
                    textTransform: `uppercase`,
                    marginLeft: `.5em`,
                    padding: `.5em`,
                    border: `none`,
                    borderRadius: `0`
                  }}>Enroll Now</Button>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header