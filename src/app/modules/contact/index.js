import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Layout, PageTitle } from 'modules/shared/components'

const Contact = ({ intl }) => {
  return (
    <>
      <Layout id="contact" modulo={0}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.contact'
          })}
          position="center"
        />
      </Layout>
    </>
  )
}

Contact.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Contact)
