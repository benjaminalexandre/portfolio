import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Layout, PageTitle, ProgressBar } from 'lib'

const Skills = ({ intl }) => {
  return (
    <>
      <Layout id="skills" modulo={1}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.skills'
          })}
          position="end"
        />
        <Row  justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
          <Col>
            <h5>
              <FormattedMessage id="skills.desc" />
            </h5>
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Col xl={11} lg={24}>
            <Row gutter={[0, 48]} justify="space-around">
              <Col span={24}>
                <ProgressBar width={90} description={intl.formatMessage({ id: 'skills.skills.php' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={85} description={intl.formatMessage({ id: 'skills.skills.sql' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={80} description={intl.formatMessage({ id: 'skills.skills.js' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={80} description={intl.formatMessage({ id: 'skills.skills.html' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={70} description={intl.formatMessage({ id: 'skills.skills.css' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={50} description={intl.formatMessage({ id: 'skills.skills.java' })} />
              </Col>
            </Row>
          </Col>
          <Col xl={11} lg={24}>
            <Row gutter={[0, 48]} justify="space-around">
              <Col span={24}>
                <ProgressBar width={80} description={intl.formatMessage({ id: 'skills.skills.git' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={70} description={intl.formatMessage({ id: 'skills.skills.photoshop' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={85} description={intl.formatMessage({ id: 'skills.skills.english' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={40} description={intl.formatMessage({ id: 'skills.skills.spanish' })} />
              </Col>
              <Col span={24}>
                <ProgressBar width={100} description={intl.formatMessage({ id: 'skills.skills.teamwork' })} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

Skills.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Skills)
