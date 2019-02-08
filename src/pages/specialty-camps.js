import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Button } from 'reactstrap'
import Layout from '../components/layout'
import HeroBackground from '../images/specialty-hero-bg.jpg'
import BannerImg from '../images/specialty-midbanner.jpg'
import Robotics101Img from '../images/specialty-robotics.jpg'
import IntroToProgrammingImg from '../images/specialty-scratch.jpg'
import ProgrammingGamersImg from '../images/specialty-programminggaming.jpg'
import Minecraft4KidsImg from '../images/specialty-minecraft.jpg'
import RollercoasterImg from '../images/specialty-rollercoasters.jpg'
import ExtremeMinecraftImg from '../images/specialty-minecraft.jpg'
import GameDesignPortalImg from '../images/specialty-3dgame.jpg'
import WebDesign4KidsImg from '../images/specialty-webdesign4kids.jpg'
import DigitalPhotoImg from '../images/specialty-digitalphotography.jpg'


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
    <section id="schedule-section" class="specialtycampsschedule">
      <Container>
        <h2>Specialty Camps 2019 Summer Schedule</h2>
        <table className="table">
          <thead>
            <tr style={{
              color: `#db672b`,
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
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-August 16</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#robotics101-section">Robotics 101 - EV3</a></td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#introprogramming-section">Intro to Scratch - Programming 4 Kids</a></td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-12</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#3dgamedesign-section">3D Game Design Featuring Portal 2</a></td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#rollercoaster-section">Game Design & Roller Coaster Science (iPads)</a></td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 15-19</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#extrememinecraft-section">Extreme Minecraft</a></td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#minecraft4kids-section">Minecraft 4 Kids (iPads)</a></td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 22-26</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#programminggamers-section">Programming for Gamers</a></td>
              <td>Rising 4th to 6th or 7th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td><a class="camplink" href="#webdesign4kids-section">Web Design 4 Kids</a></td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 5-9</td>
            </tr>
            <tr>
              <td><a class="camplink" href="#digitalphotography-section">Digital Photography Intro to Engineering</a></td>
              <td>Rising 1st to 4th</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <h2>Arts</h2>
        <table className="table">
          <thead>
            <tr style={{
              color: `#db672b`,
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
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 10-June 20</td>
            </tr>
            <tr>
              <td>Ceramics Pottery Workshop</td>
              <td>Ages 10-14</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>     
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-June 27</td>
            </tr>
            <tr>
              <td>Art Studio Lab (AM)</td>
              <td>Grades 6-12</td>
              <td>$150</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>            
            <tr>
              <td>Art Portfolio Preparation (AM)</td>
              <td>Grades 6-12</td>
              <td>$150</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-June 28</td>
            </tr>
            <tr>
              <td>Writer's Workshop (AM)</td>
              <td>Grades 6-12</td>
              <td>$200</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>  
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>June 24-August 10</td>
            </tr>  
            <tr>
              <td>Summer Theater at St. John's Prep (PM)</td>
              <td>Grades 9-12</td>
              <td>$100</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>      
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-July 12</td>
            </tr>  
            <tr>
              <td>Chamber Strings (AM)</td>
              <td>Grades 6-12</td>
              <td>$200</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>      
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 8-July 18</td>
            </tr>  
            <tr>
              <td>Ceramics Pottery Workshop (AM)</td>
              <td>Ages 15-18</td>
              <td>$395</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>      
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>July 15-July 19</td>
            </tr>  
            <tr>
              <td>High School Audition Workshop</td>
              <td>Grades 9-12</td>
              <td>$350</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
                </a>
              </td>
            </tr>      
            <tr>
              <td colSpan='4' style={{ fontWeight: `700`, padding: `2em .75em 0` }}>August 12-August 16</td>
            </tr>  
            <tr>
              <td>Middle School Audition Workshop (AM)</td>
              <td>Grades 6-8</td>
              <td>$200</td>
              <td>
                <a
                  href='https://eaglesedge.campbrainregistration.com/'
                  className='enroll-link'
                  style={{ color: `#db672b`, fontFamily: `DIN`, fontWeight: `700` }}>ENROLL NOW
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
    <section id="3dgamedesign-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>3D Game Design - Featuring Portal 2 (Intro and Intermediate)</h2>
            <ul>
              <li>If you like 3D-based video games then this camp is for you! Portal 2 is a first-person, puzzle-platform style video game that challenges you to use your wits to solve complex problems.</li>
              <li>At camp you will use 3D game engine software and Portal 2 to create an adventure that features intricate labyrinths, puzzles and traps.</li>
              <li>All skill levels are welcome.</li>
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
              <img src={GameDesignPortalImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="rollercoaster-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={RollercoasterImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Game Design &amp; Roller Coaster Science</h2>
            <ul>
              <li>The camp day is divided into two topics: Game Design & Roller Coaster Science. In the Game Design potion of camp, campers learn the basics of video game development and design games by hand with Bloxels and tablets.</li> 
              <li>In the Roller Coaster Science session, campers work with instructors to learn the basic engineering behind roller coasters and use K'Nex to build models that demonstrate how roller coasters work.</li>
              <li>Gain the ability to define and explain examples of kinetic and potential energy, and centripetal force</li>
              <li>Work in groups to build a working roller coaster model with K’NEX</li>
              <li>Explore and build Platform Games</li>
              <li>Build your own Video Game with BLOXELS</li>
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
    <section id="extrememinecraft-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Extreme Minecraft</h2>
            <ul>
              <li>For Intermediate and Advanced campers, this program will focus on servers, adventure design, Redstone and installing MODs. </li>
              <li>Using their problem solving skills and Redstone circuitry, campers will build complex and large-scale adventures and mini-games. </li>
              <li>Using servers, campers work in teams to learn how to set up and administer Minecraft servers for multiplayer adventures. </li>
              <li>Campers will also be provided instruction on Tekkit and the Technic Platform to help the install MODs within Minecraft.	</li>
              <li>Advanced Minecraft game and level design</li> 
              <li>Redstone scripting </li>
              <li>Use of Tekkit mod pack launchers</li> 
              <li>Minecraft Server Administration (via Minecraft EDU)</li>
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
              <img src={ExtremeMinecraftImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="minecraft4kids-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={Minecraft4KidsImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Minecraft 4 Kids</h2>
            <ul>
              <li>Experience the amazing world of Minecraft. Build your own virtual reality in a sandbox-like environment by using tablets to challenge your mind and create your own adventures.</li> 
              <li>This fun and engaging camp will spark interests, foster creativity and help you maximize your learning potential.</li>
              <li>No prior experience with Minecraft necessary. All skill levels welcome. </li>	
              <li>Campers learn: style, design and aesthetics</li>
              <li>Campers build their dream house to scale</li>
              <li>Campers will design a large-scale Minecraft Adventure</li>
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
    <section id="programminggamers-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Programming for Gamers: Learn to Code</h2>
            <ul>
              <li>This exciting programming camp provides you with an introduction to coding and gives you an understanding of how computer coding works through the use of both “drag and drop” tools and Javascript.</li>
              <li>The camp uses a combination of programming tools, including Minecraft EDU and other game-based software that let you play and code at the same time. Ultimately, you can take on the role of a mighty hero who can cast spells and build worlds however, to wield your magic you need to learn how to write computer code.</li> 
              <li>No prior experience necessary. All skill levels are welcome.</li>
              <li>Review of object oriented design programming concepts with CodeSpells and Minecraft EDU</li> 
              <li>Review of the Drag and Drop Programming software development environment </li>
              <li>Managing data types and variables, handling user input, finding and fixing program errors</li>
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
              <img src={ProgrammingGamersImg} alt="placeholder" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="webdesign4kids-section" style={{ backgroundColor: `#f0f0f0` }}>
      <Container>
        <Row>
          <Col xs='12' lg='6'>
            <div className="img-wrap">
              <img src={WebDesign4KidsImg} alt="placeholder" />
            </div>
          </Col>
          <Col xs='12' lg='6'>
            <h2>Web Design 4 Kids</h2>
            <ul>
              <li>The focus of Web Design 4 Kids is on learning how to design a super cool website, without writing HTML or other code. </li>
              <li>Campers will learn the basics of web design using WSIWIG design tools and will also have an introduction to graphic design software.</li> 
              <li>By the last day of camp, campers will have designed a series of web pages that reflect their personal interests and hobbies. </li>
              <li>No prior experience necessary. All skills levels welcome.	</li>
              <li>Learn how to create a website</li>
              <li>Learn how to use Google Sites to create a cool website</li>
              <li>Learn more about your favorite topic and make it interesting</li>
              <li>Learn basic graphic design concepts</li>
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
    <section id="digitalphotography-section">
      <Container>
        <Row className="reverse-stacked">
          <Col xs='12' lg='6'>
            <h2>Digital Photography and Intro to Engineering</h2>
            <ul>
              <li>The camp day is divided into two topics: Digital Photography and Intro to Engineering.</li>
              <li>In Digital Photography campers will take photos, make photo edits, add 2D art and create other fun and engaging images.</li> 
              <li>During the Intro to Engineering portion of camp, campers work with a variety of tools that investigate simple motors and machines (gears, wheels, axles, levers and pulleys), while solving tasks related to mechanical principles.</li>	
              <li>Discover your Artistic Side</li>
              <li>Learn how to take cool Photos</li>
              <li>Discover how to take your photos to the next level with Photo Editor</li>
              <li>Discover mechanical principles by exploring, investigating, and solving task</li>
              <li>Learn how gears, levels and pulleys work</li>
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
              <img src={DigitalPhotoImg} alt="placeholder" />
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