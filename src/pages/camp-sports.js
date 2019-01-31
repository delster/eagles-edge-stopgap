import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/sports-hero-bg.jpg'
import HeroLogoImg from '../images/sports-hero-logo.png'
import ProgramOverviewBackground from '../images/sports-overview-bg.jpg'
import SchedulingImg from '../images/sports-soccer.jpg'
import BaseballImg from '../images/sports-baseball.jpg'
import SoftballImg from '../images/sports-softball.jpg'
import FacilitiesBackground from '../images/day-facilities-section-bg2.jpg'

const CampSportsPage = () => (
  <Layout>
    <Helmet title="Sports Camp" />
    <section id="hero-section" style={{
      display: `flex`,
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
      <div id="hero-content">
        <div style={{ display:`flex`, alignItems:`center`, justifyContent:`center` }}>
          <img src={HeroLogoImg} alt='sun logo' style={{ marginRight: `1vw`, width: `9vw` }} />
          <h1 style={{ display: `inline-block`, lineHeight: `1.5`, marginTop: `.2em`, textAlign: `left` }}>Sports Camps</h1>
        </div>
        <Container>
          <p style={{ fontFamily: `DIN`, fontSize: `1.5vw`, fontWeight: `700`, lineHeight: `1.2`, marginTop: `-.75em`, textTransform: `uppercase` }}>
            We offer several sport-specific camps and a multi-sport camp empowering boys and girls ages 6 to 18 to fine tune skills with the leadership of top coaches and an emphasis on leadership and mental skills.
          </p>
        </Container>
      </div>
    </section>
    <section id="openregistration-section">
      <Container>
        <h2>Registration for Summer 2019 Open!</h2>


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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-28</td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 1-5</td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed)</td>
              <td>6th-12th grades</td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-11</td>
            </tr>
            <tr>
              <td>Wrestling Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 15-18</td>
            </tr>
            <tr>
              <td>Soccer Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Baseball Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 22-25</td>
            </tr>
            <tr>
              <td>Soccer Camp (Girls) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Softball Camp (Girls) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 29- August 1</td>
            </tr>
            <tr>
              <td>Basketball Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Basketball Camp (Girls) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>

            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 5 - 8</td>
            </tr>
            <tr>
              <td>Lacrosse Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Volleyball Camp (Coed) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 12-15</td>
            </tr>
            <tr>
              <td>Football Camp (Boys) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Waterpolo Camp (Coed) </td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Multi-Sports Camp (Coed) </td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td>Strength & Conditioning (Coed) </td>
              <td>6th-12th grades </td>
              <td></td>
              <td>
                <a
                  href=''
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700`}}>ENROLL NOW
                </a>
              </td>
            </tr>
          </tbody>
        </table>






      </Container>
    </section>
    <section id="programoverview-section" style={{
      backgroundImage: `url(${ProgramOverviewBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <Container style={{ textAlign: `center` }}>
        <h2 style={{ color: `white` }}>Program Overview</h2>
        <div style={{
            color: `black`,
            backgroundColor: `white`,
            height: `100%`,
            marginLeft: `auto`,
            padding: `1.5em`,
            textAlign: `center`,
        }}>
          <p style={{marginBottom: `0`}}><strong>Multi-Sports Camp</strong></p>
          <p>Our Multi-Sports Camp (for boys and girls ages 6-12) offers 8 sports per week. Play and learn 2 sports per day with instruction, games, special events and swimming featured weekly! Lineup includes: Baseball, Basketball, European Team Handball, Flag Football, Golf, Lacrosse, Soccer and Street Hockey. Want to focus on a specific sport? Add one of our sports specific camps and customize your summer. This program camps is open to boys and girls attending any school and runs Monday through Friday from 9 am to 4pm.</p>
          <p style={{marginBottom: `0`}}><strong>Sports Specific Camps</strong></p>
          <p>Our Sports Specific Camps are led by St. John's Prep coaching staff and top coaches from the area. Focus on a sport and master established skills, learn new techniques and take it to the next level! These camps are open to boys and girls attending any school and run Monday through Thursday from 9 am to 4pm.</p>
        </div>
      </Container>
    </section>
    <section id="scheduling-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Sample Scheduling</h2>
            <p>
              <span> 8:45 am - 9:00 am </span>
              <span> Arrival (Wellness Center) </span>
            </p>
            <p>
              <span> 9:00 am - 9:30 am </span>
              <span> Mental performance skill work <br /> (Wellness Center) </span>
            </p>
            <p>
              <span> 9:35 am - 10:00 am</span>
              <span> Physical performance skill work <br /> (Wellness Center) </span>
            </p>
            <p>
              <span>10:05 am - 10:30 am</span>
              <span> Dynamic warm-up, stretching </span>
            </p>
            <p>
              <span>10:35 am - 11:50 pm</span>
              <span> Morning practice <br /> (individual drills, skills, and technique work) </span>
            </p>
            <p>
              <span>12:00 pm - 1:00pm  </span>
              <span> Lunch (Dining Hall) </span>
            </p>
            <p>
              <span> 1:15 pm - 2:00 pm </span>
              <span> Chalk-talk work, film study <br /> (Wellness Center) </span>
            </p>
            <p>
              <span> 2:00 pm - 3:15 pm </span>
              <span> Afternoon practice <br /> (group work, stations, and competition) </span>
            </p>
            <p>
              <span> 3:30 pm - 4:00 pm </span>
              <span> Pool (Wellness Center) </span>
            </p>
            <p>
              <span>4:00 pm</span>
              <span> Departure (Wellness Center) </span>
            </p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SchedulingImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="baseball-section" style={{
      backgroundColor: `#f0f0f0`,
    }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={BaseballImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Baseball Camp (Boys)</h2>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              4th Grade - Rising 9th Grade
            </p>
            <p style={{
              fontFamily: `DIN`,
              fontSize: `23px`,
              fontWeight: `700`
            }}>
              7/15 - 7/18
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Skills and Drills</li>
              <li>Hitting technique</li>
              <li>Position specific instruction</li>
              <li>Scrimmages</li>
              <li>Feedback from our coaching staff</li>
            </ul>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Coach Dan Letarte, Baseball</p>
            <ul>
              <li>25 years of coaching baseball at St. John’s Prep</li>
              <li>Division 1A Boston Globe Coach of the year 2017</li>
              <li>Played baseball at St. John’s Prep for 4 years</li>
              <li>Played College baseball at both Babson and Salem State University</li>
              <li>Currently an Associate Northeast Area LA Angels Scout</li>
              <li>Has 28 former players playing college baseball</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="softball-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Girls Softball Camp</h2>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              4th Grade - Rising 9th Grade
            </p>
            <p style={{
              fontFamily: `DIN`,
              fontSize: `23px`,
              fontWeight: `700`
            }}>
              7/22 - 7/25
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700` }}>Another Brand new program that will bring some of the areas top coaches to provide instruction in Softball fundamentals and live game action to improve your skill set.</p>
            <p style={{ color: `#137cac`, fontWeight: `700` }}>The coach is to be announced</p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SoftballImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="facilities-section"
      style={{
        display: `flex`,
        flexFlow: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundImage: `url(${FacilitiesBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Row>
          <Col xs='12' sm='10' md='8' lg='5'>
            <div style={{ backgroundColor: `white`, padding: `1em` }}>
              <h2>Our Facilities</h2>
              <p>
                From athletics to the arts, the 175-acre St. John’s Prep campus in Danvers offers exceptional facilities including field house, two pools, a theater, art studios, labs, turf playing fields and much more.
              </p>
            </div>
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

export default CampSportsPage
