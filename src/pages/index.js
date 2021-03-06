import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import HomeBlurb from '../components/homeblurb'
import HeroBackground from '../images/hp-hero-bg.jpg'
import ServiceBlurbImg1 from '../images/hp-camps-summer.jpg'
import ServiceBlurbImg2 from '../images/hp-camps-specialty.jpg'
import ServiceBlurbImg3 from '../images/hp-camps-sports.jpg'
import ServiceBlurbImg4 from '../images/hp-camps-academic2.jpg'
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
        <h1 style={{
          color: `white`,
          fontWeight: `400`
        }}>Explore Your <strong style={{ fontWeight: `700` }}>Edge</strong></h1>
      </div>
    </section>
    <section id="services-section" style={{ padding: `0` }}>
      <Row style={{ margin: `0` }}>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#f5b742'
            title='Day Camp'
            imgsrc={ServiceBlurbImg1}
            content='Camp Christopher, our day camp for girls and boys ages 4 to 12, features a wide variety of exciting, hands-on activities including: swimming, art, music, sports, science, archery, special events, theme days and more!'
            buttonText='Explore'
            buttonLink="/camp-christopher"
            isReactLink />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#df7640'
            title='Specialty Camps'
            imgsrc={ServiceBlurbImg2}
            content='Our coed speciality programs offer unique opportunities to focus on everything from acting, music, pottery and photography to the latest tech, 3D-game design, and Minecraft!'
            buttonText='Explore'
            buttonLink="/specialty-camps"
            isReactLink />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#9e9fa2'
            title='Sports Camps'
            imgsrc={ServiceBlurbImg3}
            content='8+ sport-specific camps and a multi-sport camp empower boys and girls ages 6 to 18 to fine tune skills with the leadership of top coaches and athletic trainers and an emphasis on leadership and mental skills.'
            buttonText='Explore'
            buttonLink="/camp-sports"
            isReactLink />
        </Col>
        <Col xs='12' sm='6' xl='3' style={{ padding: `0` }}>
          <HomeBlurb
            color='#30bd94'
            title='Academic Enrichment'
            imgsrc={ServiceBlurbImg4}
            content="In the tradition of academic excellence at St. John’s Prep, our academic enrichment program offers coed courses for students to hone their skills in the summer and during the school year."
            buttonText='Explore'
            buttonLink="/academic-enrichment"
            isReactLink />
        </Col>
      </Row>
    </section>
    <section id="mission-section">
      <Container>
        <h2 className="lined-heading"><span>Mission</span></h2>
        <p style={{ textAlign: `center` }}>EAGLES/EDGE empowers girls and boys to learn, thrive, and master new skills in an atmosphere that fosters friendships and a growth mindset. Our summer day camp program, academic classes, sports camps, and specialty camps offer wide-ranging opportunities for young people ages 4 to 18 to gain self-confidence and develop their personal edge on the path to becoming their best selves.</p>
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
            <p>Located on a beautiful 175-acre campus in Danvers, St. John’s Prep offers spacious contemporary facilities, state-of-the-art technology, extensive grounds, and dining facilities. </p>
            <p><strong>Fitness &amp; Sports:</strong> Ideal venue for sports and fitness activities with Memorial Gymnasium and the Leo and Joan Mahoney Wellness Center and featuring an 8-lane indoor pool, indoor track, 6 basketball courts, 5 tennis courts, turf and grass playing fields and an outdoor pool.</p>

            <p><strong>Academic Facilities:</strong> State-of the-art classrooms, robotics lab, science labs, meeting spaces, and a spacious library are housed in the Brother Keefe, C.F.X. Academic Center, Xavier Hall, the A. E. Studzinski Library.</p>

            <p><strong>The Arts:</strong> The Ryken Center for the Arts houses ceramics and art studios, a black box theater, and music rooms. Alumni Hall houses the 350-seat Keneb Theatre with high-quality sound and lighting.</p>

            <p>Located near several interstates, St. John's is just 30 minutes north of Boston by car and convenient to all of the North Shore's museums, restaurants, beaches and attractions.</p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
