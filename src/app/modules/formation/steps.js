import React from 'react'

import { Row, Col } from 'lib/index'

const getSteps = (intl) => [
  {
    title: intl.formatMessage({ id: 'formation.step.miw.title' }),
    location: `${intl.formatMessage({ id: 'formation.step.miw.place' })}, Hautes-Alpes (05)`,
    description: (
      <Row>
        <Col>{intl.formatMessage({ id: 'formation.step.miw.level' })}</Col>
        <Col>{intl.formatMessage({ id: 'formation.step.miw.major' })}</Col>
        <Col>{intl.formatMessage({ id: 'formation.step.miw.desc' })}</Col>
      </Row>
    ),
    date: '2018/2019'
  },
  {
    title: intl.formatMessage({ id: 'formation.step.iut.title' }),
    location: `${intl.formatMessage({ id: 'formation.step.iut.place' })}, Ain (01)`,
    description: (
      <Row>
        <Col>{intl.formatMessage({ id: 'formation.step.iut.level' })}</Col>
        <Col>{intl.formatMessage({ id: 'formation.step.iut.desc' })}</Col>
      </Row>
    ),
    date: '2015/2017'
  },
  {
    title: intl.formatMessage({ id: 'formation.step.sti.title' }),
    location: `${intl.formatMessage({ id: 'formation.step.sti.place' })}, Saône-et-Loire (71)`,
    description: (
      <Row>
        <Col>{intl.formatMessage({ id: 'formation.step.sti.desc' })}</Col>
      </Row>
    ),
    date: '2013/2015'
  }
]

export default getSteps
