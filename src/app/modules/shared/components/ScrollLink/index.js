import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

const ScrollLink = ({ children, linkTo }) => {
  return (
    <Link
      to={linkTo}
      smooth
      duration={1000}
      spy
      className="menu-link"
      activeClass="menu-link-active"
      offset={-100}
    >
      {children}
    </Link>
  )
}

ScrollLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired
}

export default ScrollLink
