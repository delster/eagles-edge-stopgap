import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`pixelparlor`, `microsite`, `eaglesedge`]} />
    <h1>Placeholder: Home Page</h1>
    <p>Welcome to your new landing page/microsite.</p>
    <p>Let's build something great!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
