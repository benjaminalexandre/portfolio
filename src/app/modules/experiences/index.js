import React, { useEffect, useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Layout, PageTitle, Steps } from 'lib'
import { getExperienceSteps } from 'utils/datas'
import { useWindowWidth, isSizeBetween, BREAKPOINTS } from 'utils/tools/page'

const Experiences = ({ intl }) => {
  const [showMinimalSteps, setShowMinimalSteps] = useState(false)

  useEffect(() => {
    setShowMinimalSteps(isSizeBetween(0, BREAKPOINTS.SM))
  }, [useWindowWidth()])

  return (
    <Layout id="experiences" modulo={0}>
      <PageTitle
        title={intl.formatMessage({
          id: 'menu.experiences'
        })}
        position="center"
      />
      <Row justify="center" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <h5>
            <FormattedMessage id="experiences.desc" />
          </h5>
        </Col>
      </Row>
      <Row justify="center">
        {showMinimalSteps ? (
          <Steps.Minimal steps={getExperienceSteps(intl)} />
        ) : (
          <Steps.Default steps={getExperienceSteps(intl)} />
        )}
        </Row>
    </Layout>
  )
}

Experiences.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Experiences)
