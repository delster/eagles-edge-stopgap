import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/stock-academicenrichment-hero-bg.png'
import BannerImg from '../images/stock-ae-banner.png'

const AcademicEnrichmentPage = () => (
  <Layout>
    <Helmet title="Eagles Edge | Academic Enrichment" />
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
      <h1>Academic Enrichment</h1>
    </section>
    <section id="courses-section">
      <Container>
        <h2>Courses</h2>
        <p>
          <strong>Study Skills: starts June 25</strong> <br />
          <strong>Study Skills: starts July 9</strong>
        </p>
      </Container>
      <Container>
        <div>
          <p style={{
            color: `#30bd94`,
            fontFamily: `DIN`,
            fontSize: `26px`,
            fontWeight: `700`,
            marginBottom: `0`,
            textTransform: `uppercase`
          }}>
            The College Interview
          </p>
          <ul>
            <li>College Essay Writing Workshop</li>
            <li>College Essay Writing: 1 on 1 Tutoring</li>
            <li>Get Ready for Algebra 1</li>
            <li>Geometry</li>
            <li>Step up to Accelerated Trig/PreCalculus</li>
            <li>Step up to Honors Trig/PreCalculus</li>
            <li>Algebra 2/Trigonometry</li>
            <li>Step Up to Accelerated Calculus</li>
            <li>Step up to Honors Calculus</li>
            <li>Step up to AP Calculus</li>
          </ul>
        </div>
        <div>
          <p style={{
            color: `#30bd94`,
            fontFamily: `DIN`,
            fontSize: `26px`,
            fontWeight: `700`,
            marginBottom: `0`,
            textTransform: `uppercase`
          }}>
            Test Prep
          </p>
          <ul>
            <li>SAT Prep Course</li>
            <li>SAT Prep Course</li>
            <li>SAT Prep Course</li>
            <li>SAT Prep Course</li>
            <li>SAT/ACT English: 1 on 1 tutoring</li>
            <li>SAT/ACT Math: 1 on 1 tutoring</li>
            <li>HSPT Test Preparation</li>
            <li>SSAT (Secondary School Admission Test) Preparation</li>
          </ul>
        </div>
        <div>
          <p style={{
            color: `#30bd94`,
            fontFamily: `DIN`,
            fontSize: `26px`,
            fontWeight: `700`,
            marginBottom: `0`,
            textTransform: `uppercase`
          }}>
            Middle School Entrance Exams
          </p>
          <ul>
            <li>SSAT Entrance Exam</li>
            <li>ISEE Entrance Exam</li>
            <li>ISEE Lower Level</li>
            <li>High School Entrance Exams</li>
            <li>Prep for the High School Placement Test (HSPT) # 1</li>
            <li>Prep for the High School Placement Test (HSPT) # 2</li>
            <li>HSPT TEST Preparation Bellesini (off campus)</li>
            <li>Prep for the Secondary School Admissions Test (SSAT)</li>
            <li>Combined HSPT and SSAT Course</li>
          </ul>
        </div>
        <div>
          <p style={{
            color: `#30bd94`,
            fontFamily: `DIN`,
            fontSize: `26px`,
            fontWeight: `700`,
            marginBottom: `0`,
            textTransform: `uppercase`
          }}>
            College Entrance Exams
          </p>
          <ul>
            <li>SAT Fall 2018 Refresher Course previously taken SAT</li>
            <li>SAT Fall 2018 Refresher Course not taken SAT</li>
            <li>SAT Prep Courses 2018-2019</li>
            <li>SAT/ACT English: 1 on 1 tutoring</li>
            <li>SAT/ACT Mathematics: 1 on 1 tutoring</li>
            <li>ACT Prep Courses</li>
            <li>ACT Prep Courses</li>
          </ul>
        </div>
      </Container>
    </section>
    <section class="banner">
      <img src={BannerImg} alt="banner" />
    </section>
    <section class="classes-info">
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7410.</p>
            <h2>Get Ready for Algebra 1</h2>
            <p>This class will help all students to succeed in pre-algebra and Algebra 1.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 7th to 9th graders at St. John's Prep <br />
              Dates and Times: Six two-hour sessions in either June or August. Schedule will be customized to meet students' needs. Please email Ms. Sandra Martin, smartin@stjohnsprep.org for scheduling information.
            </p>
            <p>
              <strong>Location: TBD</strong> <br />
              <strong>Tuition: $300</strong>
            </p>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#30bd94`,
                fontWeight: `500`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                padding: `.25em .5em`,
                border: `none`,
                borderRadius: `0`
              }}
            >
              Enroll Now
            </Button>
          </Col>
          <Col xs='12' md='6'>
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7420.</p>
            <h2>Geometry</h2>
            <p>This course offers a full year of geometry for the student who wishes to complete geometry in the summer in order to advance to Algebra II the following school year. This course is condensed into 30 hours of instruction and demands the full dedication and commitment of the student. Substantial work must be completed outside of class time in order to master the necessary topics. Students are required to have completed a full year of Algebra I with a high final average, and must also have the recommendation of their Algebra I teacher in order to take this class. An exam will be administered at the end of the class; students will receive a grade, however, no credits will be assigned. For students who do not attend St. John's, a certificate will be mailed to their school showing the attendance record and final exam grade. Students are required to have a graphing calculator. The teacher will provide geometry textbook by Larson, Boswell, Kanold, Stiff: McDougal Littell, Boston, 2004 on CD.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 10th and 11th graders attending St. John's and other schools <br />
              Dates and Time: June 17 - July 11. Monday, Tuesday, Thursday 9:00 am - 11:30 am. The last week, class meets Monday - Thursday. Class will not meet on July 4th.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K317</strong> <br />
              <strong>Tuition: $475 for St. John’s Prep students; $675 for all others</strong>
            </p>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#30bd94`,
                fontWeight: `500`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
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
    <section class="classes-info" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7410.</p>
            <h2>Get Ready for Algebra 1</h2>
            <p>This class will help all students to succeed in pre-algebra and Algebra 1.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 7th to 9th graders at St. John's Prep<br />
              Dates and Times: Six two-hour sessions in either June or August. Schedule will be customized to meet students' needs. Please email Ms. Sandra Martin, smartin@stjohnsprep.org for scheduling information.
            </p>
            <p>
              <strong>Location: TBD</strong> <br />
              <strong>Tuition: $300</strong>
            </p>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#30bd94`,
                fontWeight: `500`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
                padding: `.25em .5em`,
                border: `none`,
                borderRadius: `0`
              }}
            >
              Enroll Now
            </Button>
          </Col>
          <Col xs='12' md='6'>
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7420.</p>
            <h2>Geometry</h2>
            <p>This course offers a full year of geometry for the student who wishes to complete geometry in the summer in order to advance to Algebra II the following school year. This course is condensed into 30 hours of instruction and demands the full dedication and commitment of the student. Substantial work must be completed outside of class time in order to master the necessary topics. Students are required to have completed a full year of Algebra I with a high final average, and must also have the recommendation of their Algebra I teacher in order to take this class. An exam will be administered at the end of the class; students will receive a grade, however, no credits will be assigned. For students who do not attend St. John's, a certificate will be mailed to their school showing the attendance record and final exam grade. Students are required to have a graphing calculator. The teacher will provide geometry textbook by Larson, Boswell, Kanold, Stiff: McDougal Littell, Boston, 2004 on CD.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 10th and 11th graders attending St. John's and other schools <br />
              Dates and Time: June 17 - July 11. Monday, Tuesday, Thursday 9:00 am - 11:30 am. The last week, class meets Monday - Thursday. Class will not meet on July 4th.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K317</strong> <br />
              <strong>Tuition: $475 for St. John’s Prep students; $675 for all others</strong>
            </p>
            <Button
              href="http://eaglesedge.campbrainregistration.com"
              style={{
                color: `white`,
                backgroundColor: `#30bd94`,
                fontWeight: `500`,
                letterSpacing: `1px`,
                textTransform: `uppercase`,
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
          backgroundColor: `#30bd94`,
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

export default AcademicEnrichmentPage