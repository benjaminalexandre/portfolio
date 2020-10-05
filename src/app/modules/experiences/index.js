import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col } from 'lib/index'
import { Layout, PageTitle, Steps } from 'modules/shared/components'
import getSteps from './steps'

const Experiences = ({ intl }) => {
  return (
    <>
      <Layout id="experiences" modulo={0}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.experiences'
          })}
          position="center"
        />
        <Row type="flex" justify="center" align="middle" style={{ marginBottom: '24px' }}>
          <Col>
            <h5>
              <FormattedMessage id="experiences.desc" />
            </h5>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Steps steps={getSteps(intl)} />
        </Row>
      </Layout>
    </>
  )
}

Experiences.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Experiences)
