import React from 'react'
import PropTypes from 'prop-types'

import { ScrollAnimation } from 'lib'

const Default = ({ steps }) => {
  return steps.map((step, index) => (
    <div key={index} className="year-step">
      <div className="year-step-info-wrapper">
        <ScrollAnimation animateIn="fadeInLeft" duration={1.5} className="year-step-info" height={false}>
          {step.title && <div className="year-step-info-title">{step.title}</div>}
          {step.location && <div className="year-step-info-place">{step.location}</div>}
        </ScrollAnimation>
      </div>

      <div className="year-step-date">
        <div className="arrow arrow-left" />
        <div className="year-step-date-wrapper">{step.date}</div>
        <div className="arrow arrow-right" />
      </div>

      <div className="year-step-description-wrapper">
        <ScrollAnimation
          animateIn="fadeInRight"
          duration={1.5}
          className="year-step-description"
          height={false}
        >
          {step.description}
        </ScrollAnimation>
      </div>
    </div>
  ))
}

Default.propTypes = {
  steps: PropTypes.array.isRequired
}

const Minimal = ({ steps }) => {
  return steps.map((step, index) => (
    <div key={index} className="year-step-minimal">
      <div className="year-step-minimal-info">
        <ScrollAnimation animateIn="fadeInLeft" duration={1.5} height={false}>
          {step.title && <div className="year-step-minimal-info-title">{step.title}</div>}
          {step.location && <div className="year-step-minimal-info-place">{step.location}</div>}
        </ScrollAnimation>
      </div>
      <div className="year-step-minimal-date">
        <div className="arrow arrow-up" />
        <div className="year-step-minimal-date-wrapper">{step.date}</div>
        <div className="arrow arrow-down" />
      </div>
      <div className="year-step-minimal-description" style={{ overflow: 'clip visible' }}>
        <ScrollAnimation animateIn="fadeInRight" duration={1.5} height={false}>
          {step.description}
        </ScrollAnimation>
      </div>
    </div>
  ))
}

Minimal.propTypes = {
  steps: PropTypes.array.isRequired
}

export default { Default, Minimal }
