import React, { useEffect, useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Layout, PageTitle, YearSteps } from 'lib'
import { getFormationSteps } from 'utils/datas'
import { useWindowWidth, isSizeBetween, BREAKPOINTS } from 'utils/tools/page'

const Formation = ({ intl }) => {
  const [showMinimalSteps, setShowMinimalSteps] = useState(false)

  useEffect(() => {
    setShowMinimalSteps(isSizeBetween(0, BREAKPOINTS.SM))
  }, [useWindowWidth()])

  return (
    <Layout id="formation" modulo={1}>
      <PageTitle
        title={intl.formatMessage({
          id: 'menu.formation'
        })}
        position="start"
      />
      <Row  justify="center" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <h5>
            <FormattedMessage id="formation.desc" />
          </h5>
        </Col>
      </Row>
      <Row justify="center">
        {showMinimalSteps ? (
          <YearSteps.Minimal steps={getFormationSteps(intl)} />
        ) : (
          <YearSteps.Default steps={getFormationSteps(intl)} />
        )}
      </Row>
    </Layout>
  )
}

Formation.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Formation)
