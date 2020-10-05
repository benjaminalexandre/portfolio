import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Divider } from 'lib'
import { colors } from 'app/assets/themes'
import { ScrollAnimation } from 'modules/shared/components'

const StepBar = ({ steps }) => {
  const renderEventStep = (step) => (
    <>
      <ScrollAnimation
        animateIn="fadeInLeft"
        duration={1.5}
        className="step-date step-date-left"
        height={false}
      >
        <div className="step-date-wrapper">{step.date}</div>
        <div className="arrow arrow-right" />
      </ScrollAnimation>
      <div className="step-index" />
      <ScrollAnimation
        animateIn="fadeInRight"
        duration={1.5}
        className="step-description step-description-right"
      >
        {step.title && <div className="step-title">{step.title}</div>}
        {step.subTitle && <div className="step-subtitle">{step.subTitle}</div>}
        {step.location && <div className="step-place">{step.location}</div>}
        {(step.description || step.link) && (
          <>
            <Divider colors={colors.blue} margin={12} opacity={0.3} />
            <div className="step-info">
              {step.description}
              {step.link && (
                <>
                  {step.description && <br />}
                  <a className="step-external-link" href={step.link} target="_blank" rel="noreferrer">
                    <FormattedMessage id="experiences.see_website" />
                  </a>
                </>
              )}
            </div>
          </>
        )}
      </ScrollAnimation>
    </>
  )

  const renderOddStep = (step) => (
    <>
      <ScrollAnimation
        animateIn="fadeInLeft"
        duration={1.5}
        className="step-description step-description-left"
      >
        {step.title && <div className="step-title">{step.title}</div>}
        {step.subTitle && <div className="step-subtitle">{step.subTitle}</div>}
        {step.location && <div className="step-place">{step.location}</div>}
        {(step.description || step.link) && (
          <>
            <Divider colors={colors.blue} margin={12} opacity={0.3} />
            <div className="step-info">
              {step.description}
              {step.link && (
                <>
                  {step.description && <br />}
                  <a className="step-external-link" href={step.link} target="_blank" rel="noreferrer">
                    <FormattedMessage id="experiences.see_website" />
                  </a>
                </>
              )}
            </div>
          </>
        )}
      </ScrollAnimation>
      <div className="step-index" />
      <ScrollAnimation
        animateIn="fadeInRight"
        duration={1.5}
        className="step-date step-date-right"
        height={false}
      >
        <div className="arrow arrow-left" />
        <div className="step-date-wrapper">{step.date}</div>
      </ScrollAnimation>
    </>
  )

  return (
    <div className="step-bar">
      {steps.map((step, index) => {
        const mod = index % 2

        return (
          <div key={index} className="step">
            {mod ? renderEventStep(step) : renderOddStep(step)}
          </div>
        )
      })}
    </div>
  )
}

StepBar.propTypes = {
  steps: PropTypes.array.isRequired
}

export default injectIntl(StepBar)
