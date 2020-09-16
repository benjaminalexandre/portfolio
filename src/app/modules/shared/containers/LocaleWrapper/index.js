import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import moment from 'moment'
import { ConfigProvider } from 'antd'

import { translationMessages } from 'app/i18n'

const LocaleWrapper = (props) => {
  const { children, lang } = props

  moment.locale(lang.locale)

  return (
    <IntlProvider locale={lang.locale} messages={translationMessages[lang.locale]}>
      <ConfigProvider locale={lang.antLocale}>{children}</ConfigProvider>
    </IntlProvider>
  )
}

LocaleWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  lang: PropTypes.shape().isRequired
}

export default LocaleWrapper
