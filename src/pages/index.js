import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import HomeBlurb from '../components/homeblurb'
import HeroBackground from '../images/hp-hero-bg.jpg'
import ServiceBlurbImg1 from '../images/hp-camps-summer.jpg'
import ServiceBlurbImg2 from '../images/hp-camps-specialty.jpg'
import ServiceBlurbImg3 from '../images/hp-camps-sports.jpg'
import ServiceBlurbImg4 from '../images/hp-camps-academic.jpg'
import FacilitiesImg from '../images/hp-facilities-img.jpg'

const IndexPage = () => (
  <Layout>
    <Helmet title="Eagles Edge | Home Page" />
    <section
      id="hero-section"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `32vw`,
        padding: `0`
      }}
    >
      <div style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        height: `100%`
      }}>
        <h1 style={{ color: `white` }}>Explore Your <strong>Edge</strong></h1>
      </div>
    </section>
    <section id="services-section" style={{ padding: `0` }}>
      <Row style={{ margin: `0` }}>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#f5b742'
            title='Summer Day Camp'
            imgsrc={ServiceBlurbImg1}
            content='A traditional day camp on our beautiful 175 acre campus located in Danvers for girls and boys, ages 4-12 years old. Campers explore a variety of age appropriate activities while making good friends and having fun in the sun.'
            buttonText='Explore'
            buttonLink="/camp-christopher"
            isReactLink />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#df7640'
            title='Specialty Camps'
            imgsrc={ServiceBlurbImg2}
            content='EAGLES/EDGE Performing Arts and Specialty campers work with specialists from acting, and musical programs, crafting clay into their own designs on their very own spindle to diving into the tech world and experiencing 3D game design or the popular Minecraft and even take a lesson in photography.'
            buttonText='Enroll'
            buttonLink="http://eaglesedge.campbrainregistration.com" />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#9e9fa2'
            title='Sports Camps'
            imgsrc={ServiceBlurbImg3}
            content='With our cutting edge and up-to-date facilities, EAGLES/EDGE sports camps empower student athletes to fine tune their skill set in a number of different sports lead by our top coaches and athletic trainers. Learning to compete, have fun, develop leadership and mental skill set to enhance the experience of the whole student.'
            buttonText='Enroll'
            buttonLink="http://eaglesedge.campbrainregistration.com" />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#30bd94'
            title='Academic Enrichment'
            imgsrc={ServiceBlurbImg4}
            content="The quality of EAGLES/EDGE Academic Enrichment camps matches the caliber of St. John's Prep commitment to excellence and providing endless, unique course offerings. Campers stay engaged to sharpen their minds for the upcoming school year."
            buttonText='Enroll'
            buttonLink="http://eaglesedge.campbrainregistration.com" />
        </Col>
      </Row>
    </section>
    <section id="mission-section">
      <Container>
        <h2 className="lined-heading"><span>Mission</span></h2>
        <p style={{ textAlign: `center` }}>EAGLES/EDGE empowers girls and boys to learn, thrive, and master new skills in an atmosphere that fosters friendships and a growth mindset. Our summer day camp program, academic classes, sports camps, and specialty camps offer wide-ranging opportunities for young people ages 5 to 18 to gain self-confidence and develop their personal edge on the path to becoming their best selves.</p>
      </Container>
    </section>
    <section id="facilities-section" style={{ background: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={FacilitiesImg} alt="facilities" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Facilities</h2>
            <p>St. John's Prep is located on a handsome 175-acre campus, offering an attractive blend of contemporary facilities, state-of-the-art technology, traditional architecture and spacious grounds.</p>
            <p>Some of the key buildings and spaces for summer programming include:</p>
            <ol>
              <li>Keefe Academic Center: houses multiple classrooms and labs.</li>
              <li>Ryken Center for the Arts: provides space for printmaking, painting, drama and other performing arts. </li>
              <li>Kaneb Theatre: seats 350-400 with high-quality sound and lighting equipment.</li>
              <li>Leo and Joan Mahoney Wellness Center, Memorial Gymnasium, and various turf and grass playing fields: offer ideal athletic venues along with both indoor and outdoor pools</li>
              <li>Outdoor space: for students and campers to play and enjoy games</li>
            </ol>
            <p>Located near several interstates, St. John's is just 30 minutes north of Boston by car. The campus is convenient to all of the North Shore's museums, restaurants, beaches and attractions.</p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
