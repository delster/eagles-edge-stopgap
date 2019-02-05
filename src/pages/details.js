import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/details-hero-bg.jpg'
import TransportationImg from '../images/day-staff-img.png'
import LunchOptionsImg from '../images/day-staff-img.png'
import CounselorStructureImg from '../images/day-staff-img.png'
import PoolImg from '../images/pool-img.jpg'

const DetailsPage = () => (
  <Layout>
    <Helmet title="Details" />
    <section id="hero-section" style={{
      display: `flex`,
      flexFlow: `row`,
      alignItems: `center`,
      justifyContent: `center`,
      height: `32vw`,
      padding: `0`,
      color: `white`,
      textAlign: `center`,
      backgroundImage: `url(${HeroBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <h1>Details</h1>
    </section>
    <section id="transportation-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Transportation</h2>
            <p>Transportation is offered weekly (only) for an additional fee and will be provided by a school bus at a central pick-up spot, near your home or work.</p>
            <p>You will receive an email by 5 pm on the Wednesday before your child attends camp to notify you of the estimated pick-up and drop off times, as times and stops vary from week to week.</p>
            <p>Bus stops may be subject to change. Please notify the camp office in writing as soon as possible about any change in transportation needs.</p>
            <p>We will continue to provide the best and safest transportation possible within the confines of state regulations. For that reason, campers are not allowed to walk from camp or a bus stop, and can only be released to their parent/legal guardian, unless other arrangements have been made by the Camp Director.</p>
            <p>Extended Day options do not include Transportation</p>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              Sample Bus Schedule:
              Melrose/Lynnfield</p>
            <p>
              <strong>Bus Monitors: TBD Bus:</strong><br />
              ARRIVE LOCATION DROP 8:10 A.M. Grassy Knoll Across From Melrose High School (Bus Monitor - Michael Levine) <br />
              360 Lynn Fells Parkway Melrose, MA 02176 Does not leave
            </p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={TransportationImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="lunchoptions-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={LunchOptionsImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Lunch Options</h2>
            <p>Enrollment for the lunch program is weekly and must be received by the Monday prior to the week your child(ren) attends camp.</p>
            <p>Lunch program daily choices - gluten free options are available, and we are nut free. (All served with 1% milk, fresh fruit and homemade potato chips):</p>
            <ul>
              <li>chicken nuggets</li>
              <li>cheese pizza</li>
              <li>chicken caesar wrap</li>
              <li>macaroni & cheese</li>
              <li>hot dog</li>
              <li>hamburger</li>
              <li>cheeseburger</li>
            </ul>
            <p>A sample menu is posted in the main lobby of the camp entrance. We are looking to add more healthy option to give you and your children more variety!</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="counselorstructure-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Counselor Structure</h2>
            <ul>
              <li>Camp Director</li>
              <li>Assistant Director</li>
              <li>Nurse</li>
              <li>Office Manager</li>
              <li>Specialist</li>
              <li>Head Counselor</li>
              <li>Senior Counselor</li>
              <li>Office Administrator</li>
              <li>Junior Counselor</li>
            </ul>
            <p>Counselor in Training - New programming that will allow campers to gain experience and work their way into becoming a counselor.</p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={CounselorStructureImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="pool-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={PoolImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Pool</h2>
            <ul>
              <li>Pool Director</li>
              <li>Life Guards</li>
              <li>Swim Instructors</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="contact-section" style={{
      display: `flex`,
      flexFlow: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      textAlign: `center`
    }}>
      <h2>Contact Info</h2>
      <p>
        If you have questions or would like to set up a tour, please call us at 978-774-1427. We are here to help in any way.
      </p>
      <Button
        href="http://eaglesedge.campbrainregistration.com"
        style={{
          color: `white`,
          backgroundColor: `#137cac`,
          fontWeight: `500`,
          letterSpacing: `1px`,
          textTransform: `uppercase`,
          marginLeft: `1em`,
          padding: `.25em .5em`,
          border: `none`,
          borderRadius: `0`
        }}
      >
        Enroll Now
      </Button>
    </section>
  </Layout>
)

export default DetailsPage