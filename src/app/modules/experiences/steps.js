import React from 'react'
import moment from 'moment'

import { Row, Col } from 'lib/index'

const getSteps = (intl) => [
  {
    title: 'bee2link',
    subTitle: intl.formatMessage({ id: 'experiences.step.b2l.web_app_dev' }),
    location: 'Chalon-sur-Saône, Saône-et-Loire (71)',
    description: (
      <>
        <Row>
          <Col>{intl.formatMessage({ id: 'experiences.step.b2l.internship' })}</Col>
          <Col>{intl.formatMessage({ id: 'experiences.step.b2l.hiring' })}</Col>
        </Row>
        <br />
        <Row>
          <Col>{intl.formatMessage({ id: 'experiences.step.b2l.desc' })}</Col>
          <Col>{intl.formatMessage({ id: 'experiences.step.b2l.team' })}</Col>
        </Row>
      </>
    ),
    link: 'https://www.bee2link.fr',
    date: intl.formatMessage(
      { id: 'experiences.step.b2l.since' },
      {
        date: intl.formatDate(moment('2019-04'), { year: 'numeric', month: 'long' })
      }
    )
  },
  {
    subTitle: intl.formatMessage({ id: 'experiences.step.interim.title' }),
    location: `${intl.formatMessage({ id: 'experiences.step.interim.area' })}, Saône-et-Loire (71)`,
    description: intl.formatMessage({ id: 'experiences.step.interim.desc' }),
    date: `${intl.formatDate(moment('2017-09'), {
      year: 'numeric',
      month: 'long'
    })} - ${intl.formatDate(moment('2018-06'), { year: 'numeric', month: 'long' })}`
  },
  {
    title: 'DATAKIT',
    subTitle: intl.formatMessage({ id: 'experiences.step.datakit.intern_web_dev' }),
    location: 'Lyon, Rhône (69)',
    description: (
      <>
        <Row>
          <Col>{intl.formatMessage({ id: 'experiences.step.datakit.internship' })}</Col>
        </Row>
        <br />
        <Row>
          <Col>{intl.formatMessage({ id: 'experiences.step.datakit.desc' })}</Col>
          <Col>{intl.formatMessage({ id: 'experiences.step.datakit.work' })}</Col>
        </Row>
      </>
    ),
    link: 'https://www.datakit.com',
    date: `${intl.formatDate(moment('2017-04'), {
      year: 'numeric',
      month: 'long'
    })} - ${intl.formatDate(moment('2017-06'), { year: 'numeric', month: 'long' })}`
  },
  {
    title: 'Super U',
    subTitle: intl.formatMessage({ id: 'experiences.step.super_u.desc' }),
    location: 'Prissé, Saône-et-Loire (71)',
    date: `${intl.formatMessage({ id: 'experiences.summer' })} 2015`
  },
  {
    title: 'Domaine de la Jobeline',
    subTitle: intl.formatMessage({ id: 'experiences.step.jobeline.desc' }),
    location: 'Verzé, Saône-et-Loire (71)',
    link: 'https://www.domainedelajobeline.com',
    date: `${intl.formatMessage({ id: 'experiences.summer' })} 2013 & 2014`
  }
]

export default getSteps
