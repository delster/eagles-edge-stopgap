import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import HeroBackground from '../images/daycamp-bg.jpg'
import HeroLogoImg from '../images/daycamp-logo-sun.png'
import WelcomeImg from '../images/day-welcome-img.png'
import OurProgramBackground from '../images/day-program-section-bg.jpg'
import SchedulingImg from '../images/day-schedule-img.jpg'
import FeaturedProgramImg from '../images/day-aquatics-img.jpg'
import OurStaffImg from '../images/pool-img.jpg'
import FacilitiesBackground from '../images/day-facilities-section-bg.jpg'

const CampChristopherPage = () => (
  <Layout>
    <Helmet title="Eagles Edge | Camp Christopher" />
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
      <div>
        <img src={HeroLogoImg} alt='sun logo' style={{ marginRight: `1vw`, width: `9vw` }} />
      </div>
      <div>
        <h1>Camp Christopher
          <p style={{ fontSize: `2.27vw`, textTransform: `uppercase` }}>
            Since 1946 • Boys & Girls Ages 4-12 • June 24 - August 16, 2019
          </p>
        </h1>
      </div>
    </section>
    <section id="welcome-section">
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={WelcomeImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Welcome</h2>
            <p>
              Dear Camp Families, <br />
              Since 1946, Camp Christopher has been operating on the campus of St. John’s Prep. We are very excited to announce that camp will be even better than ever in 2019! We are making several enhancements and additions to the program including the following:
            </p>
            <ul>
              <li><strong>New Activities</strong> - science, art, music, theater; fun fitness and martial arts are being added along with our favorites like swimming, sports and gaga!</li>
              <li><strong>New Special Events</strong> - fun theme days, a new camp show, “sleepunder” pajama party, and Ultimate Games are all being planned!</li>
              <li><strong>Honored Traditions</strong> - we are continuing our existing traditions and bringing in new traditions!</li>
              <li><strong>Our Staff</strong> - we are enhancing our staff by adding new team members with extensive camp experience!</li>
            </ul>
            <p>
              In addition to these changes, we are also adding several SPECIALTY CAMPS and SPORTS CAMPS within Eagles/Edge at St. John’s Prep. We’re all very excited to make this the best summer ever for our campers!
              </p>
            <p>
              Ryan Bird <br />
              Director of Auxiliary Programs
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="ourprogram-section" style={{
      backgroundImage: `url(${OurProgramBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <Container style={{ textAlign: `center` }}>
        <h2 style={{ color: `white` }}>Our Program</h2>
        <p style={{ marginBottom: `2em` }}>
          Leading all of the programs and activities is our team of experienced, caring and talented camp staff. On day one, our staff will be ready to encourage camper growth and development, act as role models, foster friendships, and make camp a positive and fun experience for everyone.
        </p>
        <Row>
          <Col xs='12' md='6'>
            <div
              style={{
                color: `black`,
                backgroundColor: `white`,
                height: `100%`,
                maxWidth: `400px`,
                marginLeft: `auto`,
                padding: `1.5em`,
                textAlign: `left`,
              }}
            >
              <p>Day Camp features a wide variety of exciting, hands-on activities including:</p>
              <ul style={{ listStyleType: `none`, paddingLeft: `0` }}>
                <li><FontAwesomeIcon fixedWidth icon='swimmer' style={{ marginRight: `1em` }} />Swimming</li>
                <li><FontAwesomeIcon fixedWidth icon='palette' style={{ marginRight: `1em` }} />Art</li>
                <li><FontAwesomeIcon fixedWidth icon='music' style={{ marginRight: `1em` }} />Music</li>
                <li><FontAwesomeIcon fixedWidth icon='football-ball' style={{ marginRight: `1em` }} />Sports</li>
                <li><FontAwesomeIcon fixedWidth icon='theater-masks' style={{ marginRight: `1em` }} />Performing Arts</li>
                <li><FontAwesomeIcon fixedWidth icon='flask-potion' style={{ marginRight: `1em` }} />Science & Nature</li>
                <li><FontAwesomeIcon fixedWidth icon='bow-arrow' style={{ marginRight: `1em` }} />Archery</li>
                <li><FontAwesomeIcon fixedWidth icon='trees' style={{ marginRight: `1em` }} />Outdoor Adventure</li>
                <li><FontAwesomeIcon fixedWidth icon='mountain' style={{ marginRight: `1em` }} />Rock Climbing</li>
                <li><FontAwesomeIcon fixedWidth icon='watch-fitness' style={{ marginRight: `1em` }} />Fun Fitness</li>
                <li><FontAwesomeIcon fixedWidth icon='octagon' style={{ marginRight: `1em` }} />Gaga</li>
                <li><FontAwesomeIcon fixedWidth icon='fist-raised' style={{ marginRight: `1em` }} />Martial Arts</li>
              </ul>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div
              style={{
                color: `black`,
                backgroundColor: `white`,
                height: `100%`,
                maxWidth: `400px`,
                padding: `1.5em`,
                textAlign: `left`,
              }}
            >
              <p>Highlights also include:</p>
              <ul style={{ listStyleType: `none`, paddingLeft: `0` }}>
                <li><FontAwesomeIcon fixedWidth icon='star' style={{ marginRight: `1em` }} />Theme days</li>
                <li><FontAwesomeIcon fixedWidth icon='stars' style={{ marginRight: `1em` }} />Special Events</li>
                <li><FontAwesomeIcon fixedWidth icon='campground' style={{ marginRight: `1em` }} />Camp Show</li>
                <li><FontAwesomeIcon fixedWidth icon='tshirt' style={{ marginRight: `1em` }} />Sleepunder Pajama Party</li>
                <li><FontAwesomeIcon fixedWidth icon='trophy-alt' style={{ marginRight: `1em` }} />Ultimate Games</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="scheduling-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Flexible Scheduling Available</h2>
            <h3 style={{ color: `#f5b742` }}>Camp Details</h3>
            <p> <strong>Camp Dates—</strong> June 24 to August 16, 2019 </p>
            <p> <strong>Sessions—</strong> 2, 4, 6 and 8-week options available </p>
            <p> <strong>Schedule—</strong> Monday through Friday from 9:00am to 3:45pm </p>
            <p> <strong>Extended Day—</strong> Options include arriving as early as 8:00am and staying until 6:00pm </p>
            <p> <strong>Transportation—</strong> Buses serve convenient locations in Andover, Georgetown, Lynnfield, Malden, Marblehead, Melrose, Middleton, Newburyport, North Andover, Reading, Salem, Swampscott, and Wakefield </p>
            <p> <strong>What to Bring—</strong> Bathing suit, towel, hat, sneakers, sunscreen, water bottle. </p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={SchedulingImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="featuredprogram-section" style={{
      backgroundColor: `#f0f0f0`,
      borderBottom: `1.5rem solid #f5b742`
    }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={FeaturedProgramImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Featured Program: Aquatics</h2>
            <p>Our Swim Program features both outdoor and indoor pools! Rain or shine we are swimming every day!! From our outdoor pool to our brand new 8-lane indoor pool, we have the facilities for beginning swimmers to the most advanced swimmers.</p>
            <p>Our program builds confidence and enhances skills. Led by trained instructors and our certified Red Cross lifeguards, our program has a tradition of success with swimmers at all levels—from beginners with no experience to advanced swimmers.</p>
            <p>Getting Started: Swimmers are tested on the first day of camp to determine their level. Levels change as swimmers progress.</p>
            <p>Daily Lessons: Campers at every level receive a daily swim lesson.</p>
            <p>Free Swim: In addition to a lesson, every day includes time for water play in the pool.</p>
            <p>More pool time? Swimmers can head to the pool for their "camper's choice" time!</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="staff-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Our Staff</h2>
            <p>
              We employ exceptional staff members consisting of teachers, college students and graduate students, many of whom are pursuing degrees in Early Childhood, Elementary, Secondary and Physical Education and other related fields. All of our staff are carefully screened through a process of interviews, reference verifications and background checks. In addition to pre-camp training, staff members are required to attend training workshops and meetings while working on staff. A registered nurse is also available during the regular camp hours. The nurse oversees any medication required by campers and contacts parents if a child becomes ill during the camp day.
            </p>
          </Col>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={OurStaffImg} alt="placeholder" />
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
                From athletics to the arts, our 175-acre campus in Danvers offers exceptional facilities including state-of-the-art gymnasiums, theater, studios, labs, athletic fields, two swimming pools and much more.
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
        If you have questions or would like to setup a tour of our campus, please call us at 978-774-1427.<br />
        We are here to help in any way.
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

export default CampChristopherPage
