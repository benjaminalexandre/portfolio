import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Icon, ICONS_LIST, ICONS_SIZE, ScrollLink } from 'lib'
import img from 'assets/images'
import { colors } from 'assets/themes'

import Logo from './_components/Logo'
import SwitchLanguage from './_components/SwitchLanguage'

const Home = (props) => {
  return (
    <div className="home-container">
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 24 }]} className="logo-wrapper">
        <Col xl={4} md={8} xs={14}>
          <Logo src={img.logo.url} name={img.logo.alt} animation="fadeInDownBig" />
        </Col>
        <Col xl={6} md={10} xs={16}>
          <Logo src={img.logoName.url} name={img.logo.alt} animation="fadeInLeftBig" />
        </Col>
        <Col xl={6} md={10} xs={16}>
          <Logo src={img.logoJob.url} name={img.logo.alt} animation="fadeInRightBig" />
        </Col>
      </Row>
      <SwitchLanguage {...props} />
      
      <Row className="icon-wrapper">
        <ScrollLink linkTo="presentation">
          <Icon name={ICONS_LIST.chevronTripleDown} size={ICONS_SIZE.xlarge} color={colors.grey}/>
        </ScrollLink>
      </Row>
    </div>
  )
}

Home.propTypes = {
  currentLang: PropTypes.shape().isRequired,
  onChangeLang: PropTypes.func.isRequired
}

export default injectIntl(Home)
