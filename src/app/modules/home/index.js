import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

import { Col, ICONS_LIST, ICONS_SIZE } from 'lib/index'
import img from 'app/assets/images'

import { BkgImg, Wrapper, StyledIcon as Icon, IconWrapper } from './styled'
import Logo from './_components/Logo'
import SwitchLanguage from './_components/SwitchLanguage'

const translationTop = keyframes`
  from { top: -600px; }
  to { top: 0px; }
`

const translationLeft = keyframes`
  from { left: -1200px; }
  to { left: 0px; }
`

const translationRight = keyframes`
  from { left: 1200px; }
  to { left: 0px; }
`

const Home = (props) => {
  return (
    <BkgImg>
      <Wrapper gutter={[16, { xs: 8, sm: 16, md: 24, lg: 24 }]}>
        <Col span={4}>
          <Logo src={img.logo} name="Logo" animation={translationTop} />
        </Col>
        <Col span={6}>
          <Logo src={img.logoName} name="Logo" animation={translationLeft} />
        </Col>
        <Col span={6}>
          <Logo src={img.logoJob} name="Logo" animation={translationRight} />
        </Col>
      </Wrapper>
      <SwitchLanguage {...props} />
      <Link to="presentation" smooth duration={1000}>
        <IconWrapper>
          <Icon name={ICONS_LIST.chevronTripleDown} size={ICONS_SIZE.xlarge} />
        </IconWrapper>
      </Link>
    </BkgImg>
  )
}

Home.propTypes = {
  currentLang: PropTypes.shape().isRequired,
  onChangeLang: PropTypes.func.isRequired
}

export default injectIntl(Home)
