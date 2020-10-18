import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Divider, ScrollAnimation } from 'lib'
import { colors } from 'assets/themes'

const StepBarDefault = ({ steps }) => {
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
            <div className="step-info-right">
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
            <div className="step-info-left">
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

StepBarDefault.propTypes = {
  steps: PropTypes.array.isRequired
}
const Default = injectIntl(StepBarDefault)

const StepBarMinimal = ({ steps }) => {
  return (
    steps.map(step => (
      <div className="step-bar-minimal">
        <ScrollAnimation animateIn="fadeInLeft" duration={1.5} className="step-bar-minimal-date" height={false}>
          <div className="step-bar-minimal-date-wrapper">{step.date}</div>
          <div className="arrow arrow-down" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" duration={1.5} className="step-bar-minimal-info" height={false}>
          {step.title && <div className="step-bar-minimal-info-title">{step.title}</div>}
          {step.subTitle && <div className="step-bar-minimal-info-subtitle">{step.subTitle}</div>}
          {step.location && <div className="step-bar-minimal-info-place">{step.location}</div>}
          {(step.description || step.link) && (
            <>
              <Divider colors={colors.blue} margin={12} opacity={0.3} />
              <div className="step-bar-minimal-desc">
                {step.description}
                {step.link && (
                  <>
                    {step.description && <br />}
                    <a className="step-bar-minimal-external-link" href={step.link} target="_blank" rel="noreferrer">
                      <FormattedMessage id="experiences.see_website" />
                    </a>
                  </>
                )}
              </div>
            </>
          )}
        </ScrollAnimation>
      </div>
    ))
  )
}

StepBarMinimal.propTypes = {
  steps: PropTypes.array.isRequired
}
const Minimal = injectIntl(StepBarMinimal)

export default {Default, Minimal}
