import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/stock-specialty-hero-bg.png'
import BannerImg from '../images/stock-ae-banner.png'
import Robotics101Img from '../images/stock-robotics.png'
import IntroToProgrammingImg from '../images/stock-introprogramming.png'

const SpecialtyCampsPage = () => (
  <Layout>
    <Helmet title="Eagles Edge | Specialty Camps" />
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
      <h1>Specialty Camps</h1>
    </section>
    <section id="schedule-section">
      <Container>
        <h2>Specialty Camps 2019 Summer Schedule</h2>
        <table className="table">
          <thead>
            <tr style={{
              color: `#137cac`,
              fontFamily: 'DIN',
              fontSize: `26px`,
              fontWeight: 700,
              textTransform: `uppercase`
            }}>
              <th>Date/Program</th>
              <th>Grade Entering</th>
              <th>Tuition</th>
              <th>Enroll Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-August 16</td>
            </tr>
            <tr>
              <td>Outdoor Skills camp</td>
              <td>Ages 5 - 12</td>
              <td>$375</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-August 16</td>
            </tr>
            <tr>
              <td>Robotics 101 - EV3</td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Intro to Scratch - Programming 4 Kids </td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-12</td>
            </tr>
            <tr>
              <td>3D Game Design Featuring Portal 2</td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Game Design & Roller Coaster Science (iPads)</td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 15-19</td>
            </tr>
            <tr>
              <td>Extreme Minecraft</td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Minecraft 4 Kids (iPads)</td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 22-26</td>
            </tr>
            <tr>
              <td>Programming for Gamers</td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Web Design 4 Kids</td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 5-9</td>
            </tr>
            <tr>
              <td>Digital Photography Intro to Engineering</td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
    <section class="banner">
      <img src={BannerImg} alt="banner" />
    </section>
    <section id="robotics101-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Robotics 101</h2>
            <ul>
              <li>Explore the exciting world of Robotics! Working in small teams, learn how to design and build a robot using LEGO® MINDSTORMS®.</li>
              <li>Program your robot to perform project-oriented tasks and challenges. For novices, start with the basics of construction and programming.</li>
              <li>No prior experience with LEGO® Mindstorms necessary. All skill levels welcome.</li>
            </ul>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#db672b`,
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
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={Robotics101Img} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="introprogramming-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={IntroToProgrammingImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Intro to Programming with Scratch</h2>
            <ul>
              <li>Our Scratch coding camp provides campers with the ultimate introduction to programming.</li>
              <li>Using Scratch, an educational application created by the MIT Media Lab, campers will learn the basics of software development in a sophisticated, yet easy to learn environment.</li>
              <li>Campers will learn basic software development techniques and use drag and drop tools to design and program projects.</li>
            </ul>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#db672b`,
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
          backgroundColor: `#db672b`,
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

export default SpecialtyCampsPage