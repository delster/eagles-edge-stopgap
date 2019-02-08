import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.png'
import { Container, Row, Button } from 'reactstrap';

const Header = props => (
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
    <Container>
      <Row style={{ display: `flex`, flexWrap: `nowrap`, alignItems: `center`, margin: `.5em 0` }}>
        <div className="img-wrap">
          <Link to='/'><img src={Logo} alt="Eagles Edge logo" style={{ maxHeight: `80px` }} /></Link>
        </div>
        <div style={{ marginLeft: `auto`, textAlign: `right` }}>
          <ul id="primary-nav" style={{ marginBottom: `0` }}>
            <Link to="/camp-christopher">Day Camp</Link>
            <Link to="/camp-sports">Sports Camps</Link>
            <Link to="/academic-enrichment">Academic Enrichment</Link>
            <Link to="/specialty-camps">Specialty Camps</Link>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#f5b742`,
                fontWeight: `500`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                marginLeft: `1em`,
                padding: `.25em .5em`,
                border: `none`,
                borderRadius: `0`
              }}>Enroll Now</Button>
          </ul>
        </div>
      </Row>
    </Container>
  </header>
)

export default Header