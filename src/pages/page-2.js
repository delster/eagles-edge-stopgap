import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Internal Page" />
    <h1>Placeholder: Internal Page</h1>
    <p>Welcome to the internal page placeholder.</p>
    <Link to="/">Go back to the homepage?</Link>
  </Layout>
)

export default SecondPage
