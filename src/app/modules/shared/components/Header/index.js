import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
// import * as Scroll from 'react-scroll'

const Header = ({ intl }) => {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-content">
          <Link
            to="presentation"
            smooth
            duration={1000}
            spy
            className="menu-link"
            activeClass="menu-link-active"
          >
            {intl.formatMessage({ id: 'menu.presentation' })}
          </Link>
          <Link to="skills" smooth duration={1000} spy className="menu-link" activeClass="menu-link-active">
            {intl.formatMessage({ id: 'menu.skills' })}
          </Link>
          <Link
            to="experiences"
            smooth
            duration={1000}
            spy
            className="menu-link"
            activeClass="menu-link-active"
          >
            {intl.formatMessage({ id: 'menu.experiences' })}
          </Link>
          <Link
            to="formation"
            smooth
            duration={1000}
            spy
            className="menu-link"
            activeClass="menu-link-active"
          >
            {intl.formatMessage({ id: 'menu.formation' })}
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={1000}
            spy
            className="menu-link"
            activeClass="menu-link-active"
          >
            {intl.formatMessage({ id: 'menu.portfolio' })}
          </Link>
          <Link to="contact" smooth duration={1000} spy className="menu-link" activeClass="menu-link-active">
            {intl.formatMessage({ id: 'menu.contact' })}
          </Link>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Header)
