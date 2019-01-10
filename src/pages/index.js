import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`pixelparlor`, `microsite`, `eaglesedge`]} />
    <Link to="/camp-christopher/">Internal Page Link Here</Link>
    <section id="hero-section">
      <Container>
        <Row>
          <Col>Test</Col>
          <Col>Test</Col>
        </Row>
      </Container>
    </section>
    <section id="services-section">
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
    <section id="mission-section">
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
    <section id="facilities-section">
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
