import React from 'react'
import PropTypes from 'prop-types'

import { ScrollAnimation } from 'lib'

const Logo = ({ ...props }) => {
  return (
    <ScrollAnimation animateIn={props.animation} duration={2}>
      <img src={props.src} alt={props.name} />
    </ScrollAnimation>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  animation: PropTypes.any.isRequired
}

export default Logo
