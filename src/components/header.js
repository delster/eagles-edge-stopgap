import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Row,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
        <Navbar color="light" light expand="md">
          <Container>
            <div className="img-wrap">
              <Link to='/'><img src={Logo} alt="Eagles Edge logo" style={{ maxWidth: `200px` }} /></Link>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav id="primary-nav" className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/camp-christopher">Day Camp</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/camp-sports">Sports Camps</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/academic-enrichment">Academic Enrichment</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/specialty-camps">Specialty Camps</NavLink>
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