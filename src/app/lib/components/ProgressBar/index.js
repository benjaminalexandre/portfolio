import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { Row, Col, ScrollAnimation } from 'lib'

const translationTop = (to) => keyframes`
  from { width: 0%; }
  to { width: ${to}%; }
`

const ProgressBar = styled.div`
  animation: ${(props) => translationTop(props.width)} 1.2s linear;
  width: ${(props) => props.width}%;
`

const ProgressBarComponent = ({ width, description }) => {
  const [widthState, setWidth] = useState(0)

  const onChange = () => {
    setWidth(width)
  }

  return (
    <div className="full-progress-bar">
      <ScrollAnimation
        animateIn="fadeIn"
        style={{ height: '100%' }}
        afterAnimatedIn={onChange}
        duration={0.1}
      >
        <ProgressBar className="progress-bar" width={widthState}>
          <ScrollAnimation animateIn="fadeIn" style={{ height: '100%' }} delay={1000} duration={1.2}>
            <Row  justify="space-between" align="middle" style={{ height: '100%' }}>
              <Col>{description}</Col>
              <Col>{width}%</Col>
            </Row>
          </ScrollAnimation>
        </ProgressBar>
      </ScrollAnimation>
    </div>
  )
}

ProgressBarComponent.defaultProps = {
  width: 100
}

ProgressBarComponent.propTypes = {
  width: PropTypes.number,
  description: PropTypes.string.isRequired
}

export default ProgressBarComponent
