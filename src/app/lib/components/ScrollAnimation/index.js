import React from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'

const ScrollAnimationComponent = ({ children, ...props }) => {
  return (
    <ScrollAnimation style={{ height: props.height && '100%' }} {...props}>
      {children}
    </ScrollAnimation>
  )
}

ScrollAnimationComponent.defaultProps = {
  height: true,
  animateOnce: true
}

ScrollAnimationComponent.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.bool,
  animateOnce: PropTypes.bool
}

export default ScrollAnimationComponent
