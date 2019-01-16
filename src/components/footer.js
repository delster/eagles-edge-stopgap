import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FooterLogo from '../images/footer-stjohns-logo.png'

const Footer = () => (
  <footer id="main-footer">
    <section style={{ display: `flex`, padding: `0` }}>
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#f5b742` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#db672b` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#939598` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#19b688` }} />
    </section>
    <section style={{ display: `flex`, color: `white`, backgroundColor: `#054c6c`, padding: `3rem 0` }}>
      <Container>
        <Row>
          <Col xs='12' md='4' lg='6' xl='7'>
            <div className="img-wrap" style={{ maxWidth: `180px` }}>
              <a href="https://www.stjohnsprep.org/">
                <img src={FooterLogo} alt="St. John's Logo" />
              </a>
            </div>
          </Col>
          <Col xs='12' md='8' lg='6' xl='5'
            style={{ display: `flex`, alignItems: `flex-end`, justifyContent: `space-between` }}
          >
            <address style={{ marginBottom: `0` }}>
              72 Spring St <br />
              Danvers, MA 01923
              </address>
            <span>978-774-1427</span>
            <a href="mailto:eaglesedge@stjohnsprep.org" style={{ color: `white` }}>EMAIL US</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section style={{ padding: `1rem 0` }}>
      <Container>
        <p style={{ fontSize: `13px`, fontWeight: `600`, marginBottom: `0` }}>
          © {new Date().getFullYear()} Eagles Edge. All Rights Reserved.
        </p>
      </Container>
    </section>
  </footer>
)

export default Footer