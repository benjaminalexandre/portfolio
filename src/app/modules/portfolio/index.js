import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Layout, PageTitle } from 'modules/shared/components'

const Portfolio = ({ intl }) => {
  return (
    <>
      <Layout id="portfolio" modulo={1}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.portfolio'
          })}
          position="end"
        />
      </Layout>
    </>
  )
}

Portfolio.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Portfolio)
