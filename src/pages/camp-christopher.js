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
import FeaturedProgramImg from '../images/pool-img.jpg'
import OurStaffImg from '../images/day-staff-img.png'
import FacilitiesBackground from '../images/day-facilities-section-bg2.jpg'

const CampChristopherPage = () => (
  <Layout>
    <Helmet title="Camp Christopher" />
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
        <h1 style={{ textAlign: `left` }}>Camp Christopher
          <p style={{ fontSize: `2.27vw`, marginTop: `-.75em`, textTransform: `uppercase` }}>
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
              Here’s just some of what campers, ages 4 to 12, will find at Camp Christopher this summer!</p>

<p><strong>New Activities:</strong> Science, art, music, theater, fitness and martial arts are all being added to favorite activities like swimming, sports and gaga!</p>

<p><strong>New Special Events:</strong> We’re planning fun new events like theme days, a camp show, “sleepunder” pajama parties, and Ultimate Games. Get ready to have a blast!</p>

<p><strong>Honored Traditions:</strong> We’re introducing new traditions that will become as popular as longtime camp favorites!</p>

<p><strong>Talented Staff:</strong> New team members with extensive camp experience are joining our talented staff this summer!</p>

<p>In addition to Camp Christopher, we’re introducing new coed specialty camps and sports camps as part of Eagles/Edge programs at St. John’s Prep. We’re all excited to make this the best summer ever for our campers!</p>
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
          Leading all of the programs and activities is our team of experienced, caring and talented camp staff. On day one, our staff will be ready to encourage camper growth and development, act as role models, foster friendships, and make camp a positive and fun experience.
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
                <li><FontAwesomeIcon fixedWidth icon='star' style={{ marginRight: `1em` }} />Theme Days</li>
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
            <h2>Family Flexible Scheduling</h2>
            <p> <strong>Camp Dates—</strong> June 24 to August 16, 2019 </p>
            <p> <strong>Sessions—</strong> 1, 2, 4, 6 and 8-week options available </p>
            <p> <strong>Schedule—</strong> Monday through Friday from 9 am to 4 pm </p>
            <p> <strong>Extended Day—</strong> Arrive as early as 8 am and stay until 6 pm </p>
            <p> <strong>Transportation—</strong> Buses serve convenient locations in Andover, Georgetown, Lynnfield, Malden, Marblehead, Melrose, Middleton, Newburyport, North Andover, Reading, Salem, Swampscott, and Wakefield </p>
            <p> <strong>What to Bring—</strong> Bathing suit, towel, hat, sneakers, sunscreen, water bottle </p>
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
            <p>Our swim program takes advantage of our outdoor and indoor pools! With the guidance of trained instructors and certified Red Cross lifeguards, our swim program is the right fit for everyone, from beginning to advanced swimmers.</p>
            <p><strong>Getting Started:</strong> Swimmers are tested on the first day of camp to determine their level. Levels change as swimmers progress.</p>
            <p><strong>Daily Lessons:</strong> Campers at every level receive a daily swim lesson.</p>
            <p><strong>Free Swim:</strong> In addition to lessons, every day includes free swim time. Swimmers can also head to the pool for "camper's choice" time!</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="staff-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Camp Staff</h2>
            <p>
              Our staff includes teachers, graduate students, and college students, many of whom are pursuing degrees in education,  physical education, and related fields. All staff are carefully screened through a process of interviews, reference verifications, and background checks. All staff attend pre-camp training and meetings. A registered nurse is on duty during regular camp hours. The nurse oversees medication required by campers and contacts parents if a child becomes ill during the camp day.
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

export default CampChristopherPage
