import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo'

import { Container, Row, Col } from 'reactstrap';

const Header = siteTitle => (
  <header id="main-header" style={{ borderTop: `2rem solid #054c6c` }}>
    <Container>
      <Row>
        <Col xs='3'>
          <Logo />
        </Col>
        <Col xs='9' style={{ textAlign: `right` }}>
          978-774-1050 | Email Us
          <button>Enroll Now</button>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header