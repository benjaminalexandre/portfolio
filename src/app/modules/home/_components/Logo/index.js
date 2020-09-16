import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.div`
  width: 100%;
  animation: ${(props) => props.animation} 1.7s linear;
  position: relative;
`

const Logo = ({ ...props }) => {
  return (
    <StyledLogo animation={props.animation}>
      <img src={props.src} alt={props.name} />
    </StyledLogo>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  animation: PropTypes.any.isRequired
}

export default Logo
