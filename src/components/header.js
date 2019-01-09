import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './Image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      borderTop: `2rem solid #054c6c`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1170,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="header-left">
        <Link to="/">
          <Image />
        </Link>
      </div>
      <div className="header-right">

      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
