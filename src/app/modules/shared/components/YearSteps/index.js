import React from 'react'
import PropTypes from 'prop-types'

import { ScrollAnimation } from 'modules/shared/components'

const StepBar = ({ steps }) => {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index} className="year-step">
          <ScrollAnimation animateIn="fadeInLeft" duration={1.5} className="year-step-info" height={false}>
            {step.title && <div className="year-step-title">{step.title}</div>}
            {step.location && <div className="year-step-place">{step.location}</div>}
          </ScrollAnimation>
          <div className="year-step-year">
            <div className="arrow arrow-left" />
            <div className="year-step-date-wrapper">{step.date}</div>
            <div className="arrow arrow-right" />
          </div>
          <ScrollAnimation
            animateIn="fadeInRight"
            duration={1.5}
            className="year-step-description"
            height={false}
          >
            {step.description}
          </ScrollAnimation>
        </div>
      ))}
    </>
  )
}

StepBar.propTypes = {
  steps: PropTypes.array.isRequired
}

export default StepBar
