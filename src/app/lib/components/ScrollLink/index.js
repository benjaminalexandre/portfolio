import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

const ScrollLink = ({ children, linkTo, ...props }) => {
  return (
    <Link
      to={linkTo}
      smooth
      duration={1000}
      spy
      className="menu-link"
      activeClass="menu-link-active"
      offset={-25}
      {...props}
    >
      {children}
    </Link>
  )
}

ScrollLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ScrollLink
