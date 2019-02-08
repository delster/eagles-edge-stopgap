import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/academicenrichment-hero-bg.jpg'
import BannerImg from '../images/academicenrichment-mid-banner.jpg'

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
            Academic Courses
          </p>
          <ul>
            <li>The College Interview</li>
            <li>Study Skills</li>
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
            <li>SAT Prep Courses</li>
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
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7431.</p>
            <h2>Step up to Accelerated Trigonometry/Precalculus</h2>
            <p>This course is designed for St. John’s students who are moving from CP Geometry to Accelerated Trig/PreCalc. This course is also recommended for Prep students wishing to strengthen their algebra skills in preparation for Algebra II. Students must be recommended for the course by their current math teacher. Topics will include equations and inequalities, linear equations and functions, absolute value functions, and systems of linear equations and inequalities. Students are required to have a calculator.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising and 11th graders attending St. John's<br />
              Dates and Times: June 10 - June 20, Monday, Tuesday, Thursday  9:30 am - 11:30 am.Please email Ms. Sandra Martin, smartin@stjohnsprep.org, if you have any scheduling conflicts.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K316</strong> <br />
              <strong>Tuition: $275</strong>
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
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7432.</p>
            <h2>Step up to Honors Trigonometry/Precalculus</h2>
            <p>This course is designed for the student who is moving from Accelerated Geometry up to Honors Trigonometry/Precalculus. This course is also recommended for all students wishing to strengthen their algebra skills in preparation for Algebra II or Precalculus. Students must be recommended for the course by their current math teacher. Topics will include matrices and determinants, quadratic functions, solving quadratic equations, complex numbers, polynomials and polynomial functions. Students are required to have a calculator.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 11th graders attending St. John's<br />
              Dates and Time: June 10 - 20. Monday, Tuesday, Thursday 10:30 am to 12:30 pm. Please email Ms. Sandra Martin, smartin@stjohnsprep.org, if you have any scheduling conflicts.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K333</strong> <br />
              <strong>Tuition: $275</strong>
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
    <section class="classes-info">
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7433.</p>
            <h2>Algebra 2/Trigonometry      </h2>
            <p>This course is designed to complete a full year Algebra II/Trigonometry class. Students must be recommended for the course by their current math teacher. This will enable students who have completed Geometry and Algebra I to continue their study, preparing them to advance to Precalculus or Calculus or AP Calculus in the fall (based on teacher recommendation and successful completion of the course). This course is condensed into 42 hours of instruction and demands the full dedication and commitment of the student. Substantial work must be completed outside of class time in order to master the necessary topics. Topics that will be taught in this course include equations and inequalities, linear equations and functions, absolute value functions, systems of linear equations and inequalities, matrices and determinants, quadratic functions, solving quadratic equations, complex numbers, polynomials and polynomial functions exponential growth and decay, properties of logarithms, modeling power functions, inverse and joint variation, rational functions and complex fractions, conic sections, series and sequences, probability and statistics, right triangle trigonometry, trigonometric functions of general angles, law of sines and law of cosines, and graphing trigonometric functions. Curriculum will follow the chapters in Algebra II by Larson, Boswell, Kanold, Stiff; McDougal Littell, Boston, 2004. Students are required to have a graphing calculator or Casio Prizm. Teacher will provide the textbook on CD.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 10th to 12th graders attending St. John's and other schools<br />
              Dates and Times: TBD—Class will meet a total of 15 times. Schedule is subject to change and will be confirmed in early June. Prior to registering please email Ms. Sandra Martin, smartin@stjohnsprep.org, to discuss course requirements.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K223</strong> <br />
              <strong>Tuition: $700 for St. John’s Prep students, $900 for students attending other schools</strong>
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
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7440.</p>
            <h2>Step Up to Accelerated Calculus</h2>
            <p>This course is recommended for students who will be taking Accelerated Calculus in the fall and is mandatory for St. John's students moving up from college prep Trigonometry/Precalculus. Topics covered will include conic sections, functions, logarithms, series and sequencing, and trigonometry. This course will strengthen students' algebra 2 and precalculus skills, preparing them for success in calculus.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 11th and 12th graders attending St. John's <br />
              Dates and Time: June 10 - 20, Monday, Tuesday, Thursday. 9:00 am - 11:00 am. Please email Ms. Sandra Martin, smartin@stjohnsprep.org, if you have any scheduling conflicts.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, K314</strong> <br />
              <strong>Tuition: $275</strong>
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
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7441.</p>
            <h2> Step up to Honors Calculus</h2>
            <p>This course is mandatory for the rising St. John's senior who has finished the Accelerated Trigonometry/Precalculus class and is going to take Honors Calculus as a senior. This class is also recommended for any student wishing to strengthen their precalculus skills prior to taking calculus. Students must be recommended for the course by their current math teacher.  
Topics covered include conic sections, functions, logarithms, series and sequencing, and trigonometry. Emphasis is placed on providing the student with a rigorous review of functions and an in depth preparation for a higher level study and application of calculus. This course will strengthen the students precalculus skills, preparing them for success in Honors Calculus.
</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 11th and 12th graders attending St. John's<br />
              Dates and Times: June 10 - 20, Monday, Tuesday, Thursday. 9:00 am - 11:00 am.Please email Ms. Sandra Martin, smartin@stjohnsprep.org, if you have any scheduling conflicts.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K31</strong> <br />
              <strong>Tuition: $275</strong>
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
            <p style={{ color: `#30bd94`, fontSize: `1.4rem`, fontWeight: `700`, marginBottom: `0` }}>7442.</p>
            <h2>Step up to AP Calculus AB</h2>
            <p>This course is designed for students who exhibit strong algebra and precalculus skills. St. John's students moving up from Honors Algebra 2 must be recommended for the course by their current math teacher. This course will enable students who have completed an honors level Algebra II course to continue their study, preparing them to succeed in AP Calculus AB in the fall. This class is also recommended for students wishing to strengthen their algebra skills in preparation for AP Calculus AB. Emphasis in this class is placed on building strong algebra 2 and trigonometic skills and expanding that knowledge to include an in-depth understanding of the functions and applications to establish a solid foundation for AP Calculus AB. Students will learn how to apply precalculus topics will include and introduction to limits and derivatives of polynomial functions.</p>
            <p style={{ color: `#30bd94`, fontWeight: `700` }}>
              Open to: Rising 11th and 12th graders attending St. John's<br />
              Dates and Time:  June 17 - 20, Monday, Tuesday, Thursday. 9:00 am - 11:00 am. Please email Ms. Sandra Martin, smartin@stjohnsprep.org, if you have any scheduling conflicts.
            </p>
            <p>
              <strong>Location: Brother Keefe, C.F.X. Academic Center, Room K315</strong> <br />
              <strong>Tuition: $175</strong>
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
        If you have questions or would like to set up a tour, please call us at 978-774-1427. <br />Test Prep Center/Math Courses - Sandra Martin - smartin@stjohnsprep.org<br />
Director of Auxiliary Programs - Ryan Bird - rbird@stjohnsprep.org<br />
We are here to help in any way.
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