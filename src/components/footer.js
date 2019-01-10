import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <footer id="main-footer">
    <section style={{ display: `flex` }}>
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#f5b742` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#db672b` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#939598` }} />
      <Col xs='3' style={{ height: `8px`, backgroundColor: `#19b688` }} />
    </section>
    <section style={{ display: `flex`, color: `white`, backgroundColor: `#054c6c`, padding: `3rem 0` }}>
      <Container>
        <Row>
          <Col>
            [image placeholder]
          </Col>
          <Col>
            [address, phone, email]
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container style={{ marginTop: `1.5rem` }}>
        © {new Date().getFullYear()} Eagles Edge. All Rights Reserved.
      </Container>
    </section>
  </footer>
)

export default Footer