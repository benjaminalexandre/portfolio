import React, { useEffect, useState, useCallback } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { ScrollLink, Icon, ICONS_LIST } from 'lib'
import { useWindowWidth, isSizeBetween, BREAKPOINTS } from 'utils/tools/page'
import { colors } from 'assets/themes'

const Menu = ({ intl }) => {
  const [showMinimalMenu, setShowMinimalMenu] = useState(false)
  const [overlayOpened, isOverlayOpened] = useState(false)
  const openOverlay = useCallback(() => isOverlayOpened(true), [])
  const closeOverlay = useCallback(() => isOverlayOpened(false), [])
  
  useEffect(() => {
    setShowMinimalMenu(isSizeBetween(0, BREAKPOINTS.LG))
  }, [useWindowWidth()])



  return showMinimalMenu ? (
      <>
        <div className={overlayOpened ? "menu-overlay menu-overlay-open" : "menu-overlay"}>
          <Icon className="menu-overlay-close-btn" color={colors.grey} name={ICONS_LIST.close} onClick={closeOverlay}/>
          <div className="menu-overlay-content">
            <ScrollLink linkTo="presentation" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.presentation' })}</ScrollLink>
            <ScrollLink linkTo="skills" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.skills' })}</ScrollLink>
            <ScrollLink linkTo="experiences" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.experiences' })}</ScrollLink>
            <ScrollLink linkTo="formation" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.formation' })}</ScrollLink>
            <ScrollLink linkTo="portfolio" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.portfolio' })}</ScrollLink>
            <ScrollLink linkTo="contact" onClick={closeOverlay}>{intl.formatMessage({ id: 'menu.contact' })}</ScrollLink>
          </div>
        </div>
        <Icon className="menu-icon" name={ICONS_LIST.menu} color={colors.grey} onClick={openOverlay}/>
      </>
    ) : (
      <div className="menu">
        <div className="menu-content">
          <ScrollLink linkTo="presentation">{intl.formatMessage({ id: 'menu.presentation' })}</ScrollLink>
          <ScrollLink linkTo="skills">{intl.formatMessage({ id: 'menu.skills' })}</ScrollLink>
          <ScrollLink linkTo="experiences">{intl.formatMessage({ id: 'menu.experiences' })}</ScrollLink>
          <ScrollLink linkTo="formation">{intl.formatMessage({ id: 'menu.formation' })}</ScrollLink>
          <ScrollLink linkTo="portfolio">{intl.formatMessage({ id: 'menu.portfolio' })}</ScrollLink>
          <ScrollLink linkTo="contact">{intl.formatMessage({ id: 'menu.contact' })}</ScrollLink>
        </div>
      </div>
  )
}

Menu.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Menu)
