import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { ScrollLink } from 'modules/shared/components'

const Menu = ({ intl }) => {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-content">
          <ScrollLink linkTo="presentation">{intl.formatMessage({ id: 'menu.presentation' })}</ScrollLink>
          <ScrollLink linkTo="skills">{intl.formatMessage({ id: 'menu.skills' })}</ScrollLink>
          <ScrollLink linkTo="experiences">{intl.formatMessage({ id: 'menu.experiences' })}</ScrollLink>
          <ScrollLink linkTo="formation">{intl.formatMessage({ id: 'menu.formation' })}</ScrollLink>
          <ScrollLink linkTo="portfolio">{intl.formatMessage({ id: 'menu.portfolio' })}</ScrollLink>
          <ScrollLink linkTo="contact">{intl.formatMessage({ id: 'menu.contact' })}</ScrollLink>
        </div>
      </div>
    </>
  )
}

Menu.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Menu)
