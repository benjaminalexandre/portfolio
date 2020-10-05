import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col } from 'lib/index'
import { Layout, PageTitle, YearSteps } from 'modules/shared/components'
import getSteps from './steps'

const Formation = ({ intl }) => {
  return (
    <>
      <Layout id="formation" modulo={1}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.formation'
          })}
          position="start"
        />
        <Row type="flex" justify="center" align="middle" style={{ marginBottom: '24px' }}>
          <Col>
            <h5>
              <FormattedMessage id="formation.desc" />
            </h5>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <YearSteps steps={getSteps(intl)} />
        </Row>
      </Layout>
    </>
  )
}

Formation.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Formation)
