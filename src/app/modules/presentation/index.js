import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Divider, Layout, PageTitle, ScrollAnimation, Icon, ICONS_LIST, ICONS_MARGIN } from 'lib'
import img from 'assets/images'

import Infos from './_components/Infos'

const Presentation = ({ intl }) => {
  return (
    <>
      <Layout id="presentation" modulo={0}>
        <PageTitle
          title={intl.formatMessage({
            id: 'menu.presentation'
          })}
          position="start"
        />
        <Row justify="space-around" align="middle" gutter={[24, 24]}>
          <Col lg={7} sm={10} xs={24} className="profile-container">
            <ScrollAnimation animateIn="fadeInLeft" duration={1.5}>
              <div className="profile-container">
                <div className="profile-container-inner">
                  <div className="profile-container-inner-front">
                    <img src={img.photoProfile.url} alt={img.photoProfile.alt} className="profile-image" />
                  </div>
                  <div className="profile-container-inner-back">
                    <div className="profile-text">
                      <Row align="middle">
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                          <Icon name={ICONS_LIST.rugby} margin={ICONS_MARGIN.right} />
                          <FormattedMessage id="presentation.hobbies.rugby" />
                        </Col>
                        <Col span={24}>
                          <FormattedMessage id="presentation.hobbies.rugby_2" />
                        </Col>
                      </Row>
                      <Divider size={1} margin={12} />
                      <Row align="middle">
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                          <Icon name={ICONS_LIST.earth} margin={ICONS_MARGIN.right} />
                          <FormattedMessage id="presentation.hobbies.travels" />
                        </Col>
                        <Col span={24}>
                          <FormattedMessage id="presentation.hobbies.travels_2" />
                        </Col>
                      </Row>
                      <Divider size={1} margin={12} />
                      <Row justify="space-around" align="middle">
                        <Col span={2} style={{ display: 'flex', justifyContent: 'center' }}>
                          <Icon name={ICONS_LIST.book} margin={ICONS_MARGIN.right} />
                        </Col>
                        <Col>
                          <FormattedMessage id="presentation.hobbies.lotr" />
                          <br />
                          <FormattedMessage id="presentation.hobbies.lotr_2" />
                        </Col>
                      </Row>
                      <Divider size={1} margin={12} />
                      <Row align="middle">
                        <Col span={24}>
                          <FormattedMessage id="presentation.hobbies.other" />
                        </Col>
                        <Col span={24}>
                          <FormattedMessage id="presentation.hobbies.other_2" />
                        </Col>
                        <Col span={24}>
                          <FormattedMessage id="presentation.hobbies.other_3" />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={14} sm={12} xs={24} style={{ overflow: 'clip visible' }}>
            <Infos />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

Presentation.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Presentation)
