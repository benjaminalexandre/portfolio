import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import moment from 'moment'

import { Row, Col } from 'lib'
import img from 'assets/images'
import lang from 'utils/intl/lang'
import { useWindowWidth, isSizeBetween, BREAKPOINTS } from 'utils/tools/page'

const Footer = ({ currentLang }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isSizeBetween(0, BREAKPOINTS.SM))
  }, [useWindowWidth()])

  const getImage = () => {
    const today = moment()
    if (today.month() === 4 && today.date() >= 4 && today.date() <= 12)
      return currentLang.id === lang.GB.id ? img.thanksEnSw : img.thanksFrSw

    if (today.month() === 9 && today.date() >= 30 && today.date() <= 31)
      return currentLang.id === lang.GB.id ? img.thanksEnHalloween : img.thanksFrHalloween

    if (today.month() === 11 && today.date() >= 20 && today.date() <= 31)
      return currentLang.id === lang.GB.id ? img.thanksEnChristmas : img.thanksFrChristmas

    return currentLang.id === lang.GB.id ? img.thanksEnDefault : img.thanksFrDefault
  }
  const thanksImg = getImage()
  return (
    <div className="footer">
      <Row justify="center">
        <Col lg={6} md={14} xs={18}>
          <img src={thanksImg.url} alt={thanksImg.alt} />
        </Col>
      </Row>
      <div className="footer-copyright">
        <Row justify="space-between" align="middle">
          <Col span={24}>
            ©2020 Portfolio Benjamin Alexandre {isMobile ? <br /> : '| '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://benjamin-alexandre.fr"
              className="footer-copyright-link"
            >
              Benjamin Alexandre
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

Footer.propTypes = {
  currentLang: PropTypes.shape().isRequired
}

export default injectIntl(Footer)
