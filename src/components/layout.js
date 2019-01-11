import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faBadgerHoney } from '@fortawesome/pro-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './all.css'
import Header from './header'
import Footer from './footer'

library.add(faEnvelope, faKey, faBadgerHoney)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`query SiteTitleQuery { site { siteMetadata { title } } }`}

    render={data => (
      <>
        <Helmet>
          <link href="//db.onlinewebfonts.com/c/c701401d8c0bdd0d324d881a86b3c634?family=DIN+1451+W01+Engschrift" rel="stylesheet" type="text/css" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
