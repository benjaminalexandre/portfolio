import React from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'

const ScrollAnimationComponent = ({ children, ...props }) => {
  return (
    <ScrollAnimation animateOnce style={{ height: '100%' }} {...props}>
      {children}
    </ScrollAnimation>
  )
}

ScrollAnimationComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ScrollAnimationComponent
