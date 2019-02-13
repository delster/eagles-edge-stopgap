import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/sports-hero-bg.jpg'
import HeroLogoImg from '../images/sports-hero-logo.png'
import ProgramOverviewBackground from '../images/sports-overview-bg.jpg'
import SchedulingImg from '../images/sports-schedule.jpg'
import BaseballImg from '../images/sports-baseball.jpg'
import SoftballImg from '../images/sports-softball.jpg'
import FacilitiesBackground from '../images/day-facilities-section-bg2.jpg'
import BasketballBoysImg from '../images/camps-basketball-boys.jpg'
import BasketballGirlsImg from '../images/camps-basketball-girls.jpg'
import FootballImg from '../images/camps-football.jpg'
import LacrosseImg from '../images/camps-lacrosse.jpg'
import SoccerBoysImg from '../images/camps-soccer-boys.jpg'
import SoccerGirlsImg from '../images/camps-soccer-girls.jpg'
import StrengthCondImg from '../images/camps-strength-conditioning.jpg'
import VolleyballImg from '../images/camps-volleyball.jpg'
import WaterPoloImg from '../images/camps-waterpolo.jpg'
import WrestlingImg from '../images/camps-wrestling.jpg'
import MultisportsImg from '../images/camp-multi-sports.jpg'

const CampSportsPage = () => (
  <Layout>
    <Helmet title="Eagles Edge | Sports Camp" />
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
        <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}>
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
              <th>Enroll Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-28</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 1-5</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-11</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#wrestling-section">Wrestling Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 15-18</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#soccer-boys-section">Soccer Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#baseball-section">Baseball Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 22-25</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#soccer-girls-section">Soccer Camp (Girls)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#softball-section">Softball Camp (Girls)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 29 - August 1</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#basketball-boys-section">Basketball Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#basketball-girls-section">Basketball Camp (Girls)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>

            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 5-8</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#lacrosse-section">Lacrosse Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#volleyball-section">Volleyball Camp (Coed)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 12-15</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#football-section">Football Camp (Boys)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#water-polo-section">Waterpolo Camp (Coed)</a></td>
              <td>4th-9th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#multisports-section">Multi-Sports Camp (Coed)</a></td>
              <td>1st-6th grades </td>
              <td>$375 </td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>6th-8th grades </td>
              <td>$40</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#f5b742`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#strength-section">Strength & Conditioning</a></td>
              <td>9th-12th grades </td>
              <td>$80</td>
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
          <p style={{ marginBottom: `0` }}><strong>Multi-Sports Camp</strong></p>
          <p>Our Multi-Sports Camp (for boys and girls ages 6-12) offers 8 sports per week. Play and learn 2 sports per day with instruction, games, special events and swimming featured weekly! Lineup includes: Baseball, Basketball, European Team Handball, Flag Football, Golf, Lacrosse, Soccer and Street Hockey. Want to focus on a specific sport? Add one of our sports specific camps and customize your summer. This program camps is open to boys and girls attending any school and runs Monday through Friday from 9 am to 4pm.</p>
          <p style={{ marginBottom: `0` }}><strong>Sports Specific Camps</strong></p>
          <p>Our Sports Specific Camps are led by St. John's Prep coaching staff and top coaches from the area. Focus on a sport and master established skills, learn new techniques and take it to the next level! These camps are open to boys and girls attending any school and run Monday through Thursday from 9 am to 4pm.</p>
        </div>
      </Container>
    </section>
    <section id="scheduling-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Sample Scheduling</h2>
            <p>
              <strong> 8:45 am - 9:00 am </strong>
              <span> Arrival (Wellness Center) </span>
            </p>
            <p>
              <strong> 9:00 am - 9:30 am </strong>
              <span> Mental performance skill work <br /> (Wellness Center) </span>
            </p>
            <p>
              <strong> 9:35 am - 10:00 am</strong>
              <span> Physical performance skill work <br /> (Wellness Center) </span>
            </p>
            <p>
              <strong>10:05 am - 10:30 am</strong>
              <span> Dynamic warm-up, stretching </span>
            </p>
            <p>
              <strong>10:35 am - 11:50 pm</strong>
              <span> Morning practice <br /> (individual drills, skills, and technique work) </span>
            </p>
            <p>
              <strong>12:00 pm - 1:00pm  </strong>
              <span> Lunch (Dining Hall) </span>
            </p>
            <p>
              <strong> 1:15 pm - 2:00 pm </strong>
              <span> Chalk-talk work, film study <br /> (Wellness Center) </span>
            </p>
            <p>
              <strong> 2:00 pm - 3:15 pm </strong>
              <span> Afternoon practice <br /> (group work, stations, and competition) </span>
            </p>
            <p>
              <strong> 3:30 pm - 4:00 pm </strong>
              <span> Pool (Wellness Center) </span>
            </p>
            <p>
              <strong>4:00 pm</strong>
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
    <section id="multisports-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Multi-sports Camp (Coed)</h2>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              Ages 6-12
            </p>
            <p style={{
              fontFamily: `DIN`,
              fontSize: `23px`,
              fontWeight: `700`
            }}>
              1-8 wk sessions (6/24-8/15)<br />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375/week
            </p>
            <p>Our Multi-Sports Camp (for boys and girls ages 6-12) offers 8 sports per week. Play and learn 2 sports per day with instruction, games, special events and swimming featured weekly! Lineup includes: Baseball, Basketball, European Team Handball, Flag Football, Golf, Lacrosse, Soccer and Street Hockey. Want to focus on a specific sport? Add one of our sports specific camps and customize your summer. This program camps is open to boys and girls attending any school and runs Monday through Friday from 9 am to 4pm.</p>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={MultisportsImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="wrestling-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={WrestlingImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Wrestling Camp (Boys)</h2>
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
              7/8 - 7/11
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Techniques</li>
              <li>Skill Development</li>
              <li>Strategy</li>
            </ul>
            <p>Wrestlers of all ability levels will be challenged in a variety of traditional and progressive drills that aim to develop the individual wrestlers skills and understanding of the sport.</p>
            <p>Head Coach, Manny Costa has 29 years of coaching experience as a varsity wrestling coach at St. John’s Prep. He has recently recorded his 700th win of his career. Manny has mentored numerous state champion wrestlers to olympic medalist spanning throughout his 29 year career.</p>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="soccer-boys-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Soccer Camp (Boys)</h2>
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
              <li>Technical: Passing, receiving, dribbling, striking & finishing</li>
              <li>Tactical: Dynamics of play, attacking, defending, ball movement and possession</li>
              <li>Competition: Speed & direction, build-ups, team shape & defending</li>
              <li>Position Specific: Making runs, creating space, connecting with passes & shutting down an opponent</li>
              <li>The staff, lead by Varsity Soccer Head Coach Dave Crowl, is made up of the most well-respected local high school and college coaches. The camp will incorporate drills which they use at their own practices to help prepare players for the next level.</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SoccerBoysImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="soccer-girls-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SoccerGirlsImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Soccer Camp (Girls)</h2>
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
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Technical: Passing, receiving, dribbling, striking & finishing</li>
              <li>Tactical: Dynamics of play, attacking, defending, ball movement and possession</li>
              <li>Competition: Speed & direction, build-ups, team shape & defending</li>
              <li>Position Specific: Making runs, creating space, connecting with passes & shutting down an opponent</li>
            </ul>
            <p>Brand new programming to EAGLES/EDGE, This camp is designed to provide instruction to girls who are looking to fine tune their skills with some of the best coaches around from professional level coaching to club level coaching.</p>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="baseball-section">
      <Container>
        <Row className="reverse-stacked">
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
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={BaseballImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="softball-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SoftballImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Softball Camp (Girls)</h2>
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
            <p>Another Brand new program that will bring some of the areas top coaches to provide instruction in Softball fundamentals and live game action to improve your skill set.</p>
            <p>The coach is to be announced</p>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="basketball-boys-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Basketball Camp (Boys)</h2>
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
              7/29 - 8/1
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Shooting</li>
              <li>Ball Handling</li>
              <li>Rebounding</li>
              <li>Passing</li>
              <li>Principles of Motion Offense/Movement</li>
              <li>Defensive strategies</li>
            </ul>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Coach John Dullea, Basketball</p>
            <ul>
              <li>In 6th season as Varsity Head Coach</li>
              <li>5 season as a Varsity Assistant Coach prior</li>
              <li>2011 State Champion in Basketball</li>
              <li>Division 1 North Coach of the Year 2014 by MBCA</li>
              <li>Division 1 North Finalist 2015</li>
              <li>Played Basketball at Peabody High School and Notre Dame Prep</li>
              <li>Played College hoop at University of New Hampshire</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={BasketballBoysImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="basketball-girls-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={BasketballGirlsImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Basketball Camp (Girls)</h2>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              4th Grade - Rising 12th Grade
            </p>
            <p style={{
              fontFamily: `DIN`,
              fontSize: `23px`,
              fontWeight: `700`
            }}>
              7/29 - 8/1
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Shooting</li>
              <li>Ball Handling</li>
              <li>Rebounding</li>
              <li>Passing</li>
              <li>Principles of Motion Offense/Movement</li>
              <li>Defensive strategies</li>
            </ul>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Coach Karen Grutchfield, Girls Basketball</p>
            <ul>
              <li>Division 1 Basketball player at Holy Cross</li>
              <li>15 years of Head Coaching experience</li>
              <li>Currently the Head Girls Basketball Coach at Newburyport High School</li>
              <li>Wakefield High School Div 2 State Champs 1997</li>
              <li>W.H.S. - Two Division 2 North titles</li>
              <li>Six Middlesex League Championships</li>
              <li>Boston Globe Coach of the Year 1997</li>
              <li>Wakefield High School Hall of Fame</li>
              <li>Burlington High School Hall of Fame</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="lacrosse-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Lacrosse Camp (Boys)</h2>
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
              8/5 - 8/8
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Stickwork</li>
              <li>Dodging</li>
              <li>Shooting</li>
              <li>Defensive Play</li>
              <li>Team O/D Concepts</li>
              <li>Clearing & Riding</li>
            </ul>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Head Coach John Pynchon '01</p>
            <ul>
              <li>Coach Pynchon has been coaching lacrosse at the high school and college levels for the past twelve years.</li>
              <li>Pynchon, a 2001 graduate of St. Johns, enjoyed a succesful four year career as a defenseman for Providence College.</li>
              <li>He began his coaching career in 2006 while serving as an assistant coach with the Friars for two years.</li>
              <li>During his time at Providence, the Friars won three conference championships, two regular season championships and participated in the NCAA Tournament in 2004, 2006 & 2007.</li>
              <li>Upon returning to the North Shore Pynchon coached the Beverly High School lacrosse team for nine years. Under Pynchon's guidance the Panthers won seven straight conference championships (2010-2016) and two sectional championships (2014 & 2015). In 2017 Coach Pynchon returned to his alma mater as the St. John's Prep head lacrosse coach.</li>
              <li>Pynchon currently serves on the Eastern Mass Lacrosse Association board and coaches at numerous lacrosse camps through Massachusetts.</li>
              <li>He is a member of the Social Studies faculty at St. Johns and enjoys spending his free time reading.</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={LacrosseImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="volleyball-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={VolleyballImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Volleyball Camp (Coed)</h2>
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
              8/5 - 8/8
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p>This camp provides an opportunity for both girls and boys to hit the deck and compete together on the volleyball court. Our coaches will provide instruction and a fun environment for all to learn and grow within the sport.</p>
            <p>The coach is to be announced</p>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="football-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Football Camp (Boys)</h2>
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
              8/12 - 8/15
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>What you’ll learn</p>
            <ul>
              <li>Receiving</li>
              <li>Blocking</li>
              <li>Throwing</li>
              <li>Catching</li>
              <li>Route running</li>
              <li>Blocking Schemes</li>
            </ul>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Head Coach Brian St. Pierre ‘98</p>
            <p>High School</p>
            <ul>
              <li>1998 Graduate of St. John's Prep</li>
              <li>Captained and led 1997 football team to Division 1 State Championship</li>
              <li>Was named Massachusetts and New England Gatorade Player of the Year, 1997</li>
              <li>Super Prep All American selection</li>
            </ul>
            <p>Collegiate</p>
            <ul>
              <li>Played QB at Boston College '99-02</li>
              <li>Graduated as 3rd all time leading passer in BC history</li>
              <li>Captain and Scanlan Award Winner</li>
              <li>Motor City Bowl MVP, 2202</li>
              <li>All Big East selection</li>
            </ul>
            <p>Professional</p>
            <ul>
              <li>Drafted by the Pittsburgh Steelers in 2003</li>
              <li>Played 8 years in the NFL</li>
              <li>Member of the 2008 NFC West Champion Arizona Cardinals</li>
              <li>Named a game captain 4 different times with two different teams</li>
            </ul>
            <p>As a coach</p>
            <ul>
              <li>Named Head Football Coach of St. John's Prep in 2014</li>
              <li>Led St. John's to the 2018 Division 1 State Championship as well as two North Finals appearances (2014, 2018)</li>
              <li>Has compiled a 39-17 record in 5 years as Head Coach</li>
              <li>Named Salem News and Lynn Item Coach of the Year, 2018</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={FootballImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="water-polo-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={WaterPoloImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Water Polo Camp (Coed)</h2>
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
              8/12 - 8/15
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              9-4pm
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $375
            </p>
            <p>Brand new sport specific camp that will allow girls and boys the ability to learn this unique sport and have some fun in the Driscoll indoor pool in the Leo and Mahoney Wellness Center.</p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Head Waterpolo Instructor Jeff Fiore (SJP Aquatics Coordinator)</p>
            <ul>
              <li>Jeff played Varsity Water Polo at SJP 2004-2008</li>
              <li>2018 was first season assistant coaching at the Prep and our most varsity wins in recent memory.</li>
              <li>Jeff was also a varsity swimmer at SJP, went on to swim for University of Tampa, DII National Qualifier and All American all four years.</li>
              <li>Prep and UT record holder. Has been coaching competitive swimming since 2012, all age groups.</li>
            </ul>

            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="strength-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Strength & Conditioning</h2>
            <p style={{
              color: `#137cac`,
              fontFamily: `DIN`,
              fontSize: `26px`,
              fontWeight: `700`,
              marginBottom: `0`,
              textTransform: `uppercase`
            }}>
              6th Grade - Rising 12th Grade
            </p>
            <p style={{
              fontFamily: `DIN`,
              fontSize: `23px`,
              fontWeight: `700`
            }}>
              6/24 - 8/16
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              M-Th 9am-10am
              <span style={{ border: `2px solid #137cac`, margin: `1em` }} />
              $320
            </p>
            <p style={{ fontFamily: `DIN`, fontSize: `23px`, fontWeight: `700` }}>
              (SJP Athletics - Boys only) <br />
              6:30 - 8:00 am, $80/week
            </p>
            <p style={{ fontFamily: `DIN`, fontSize: `23px`, fontWeight: `700` }}>
              (SJP Athletics - Boys only) <br />
              7:30 - 9:00 am, $80/week
            </p>
            <p style={{ fontFamily: `DIN`, fontSize: `23px`, fontWeight: `700` }}>
              (SJP Middle School only) <br />
              9:00 - 10:00 am, $40/week
            </p>
            <p style={{ fontFamily: `DIN`, fontSize: `23px`, fontWeight: `700` }}>
              (Open to external groups) <br />
              10:00 - 11:30am, $80/week
            </p>
            <p>Improve endurance, stamina, strength, flexibility, power, speed, coordination, agility, balance, and accuracy. Workouts are held on the Brother Linus, C.F.X. Athletic Commons and in our new, state-of-the-art Wellness Center.</p>
            <p style={{ color: `#137cac`, fontWeight: `700`, marginBottom: `0` }}>Bill McSheffrey Head Strength & Conditioning Coordinator at St. John’s Prep</p>
            <ul>
              <li>He is responsible for creating and implementing strength and conditioning offerings for all members of the SJP community.</li>
              <li>This includes St. John's Prep students, faculty and staff, alumni, and parents.</li>
              <li>Prior to St. John’s Prep, Bill held coaching roles with the Arizona Coyotes, Springfield Falcons, Buffalo Sabres, Mike Boyle’s Strength and Conditioning, Springfield College, the University of Rhode Island, and Attain Therapy + Fitness.</li>
              <li>He attended the University of Rhode Island and Springfield College for undergraduate and graduate school.</li>
            </ul>
            <a class='camp-enroll-btn' href='https://eaglesedge.campbrainregistration.com/'>ENROLL NOW</a>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={StrengthCondImg} alt="placeholder" />
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
