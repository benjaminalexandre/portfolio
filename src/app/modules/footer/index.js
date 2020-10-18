import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { Row, Col } from 'lib'
import img from 'assets/images'
import lang from 'utils/intl/lang'
import { datas } from 'utils/datas'


const Footer = ({currentLang}) => {
  const thanksImg = currentLang.id === lang.GB.id ? img.thanksEn : img.thanksFr
  return (
    <div className="footer">
      <Row justify="center">
        <Col lg={6} md={14} xs={18}>
          <img src={thanksImg.url} alt={thanksImg.alt} />
        </Col>
      </Row>
      <div className="footer-text">
        {datas.copyright}
      </div>
    </div>
  )
}

Footer.propTypes = {
  currentLang: PropTypes.shape().isRequired
}

export default injectIntl(Footer)
