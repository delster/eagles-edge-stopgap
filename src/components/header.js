import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.png'

import { Container, Row, Col, Button } from 'reactstrap';

const Header = props => (
  <header id="main-header" style={{ borderTop: `2rem solid #054c6c` }}>
    <Container>
      <Row style={{ display: `flex`, alignItems: `center`, margin: `.5em 0` }}>
        <Col xs='3'>
          <div className="img-wrap">
            <Link to='/'>
              <img src={Logo} alt="Eagles Edge logo" style={{ maxHeight: `80px` }} />
            </Link>
          </div>
        </Col>
        <Col xs='9' style={{ textAlign: `right` }}>
          <div
            style={{
              display: `inline-block`,
              color: `#054c6c`,
              fontWeight: `600`,
              textTransform: `uppercase`
            }}
          >
            <span style={{ fontSize: `.75rem` }}> 978-774-1050 </span>
            <span style={{ color: `#db672b`, fontSize: `.8rem`, margin: `0 .5em` }}>|</span>
            <a href="mailto:eaglesedge@stjohnsprep.org" style={{ color: `#054c6c`, fontSize: `.75rem` }}>EMAIL US</a>

          </div>
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
        </Col>
      </Row>
    </Container>
  </header >
)

export default Header