import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSwimmer, faPalette, faMusic, faFootballBall, faTheaterMasks, faFlaskPotion, faBowArrow, faTrees, faMountain, faWatchFitness, faOctagon, faFistRaised, faStar, faStars, faCampground, faTshirt, faTrophyAlt
} from '@fortawesome/pro-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../fonts/din.css'
import '../fonts/proximanova.css'
import './all.css'
import Header from './header'
import Footer from './footer'

library.add(faSwimmer, faPalette, faMusic, faFootballBall, faTheaterMasks, faFlaskPotion, faBowArrow, faTrees, faMountain, faWatchFitness, faOctagon, faFistRaised, faStar, faStars, faCampground, faTshirt, faTrophyAlt)

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout