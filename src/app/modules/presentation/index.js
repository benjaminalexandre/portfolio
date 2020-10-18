import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import { Row, Col, Divider, Layout, PageTitle, ScrollAnimation } from 'lib'
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
              <img src={img.photoProfile.url} alt={img.photoProfile.alt} className="profile-image" />
            </ScrollAnimation>
            <div className="profile-overlay">
              <div className="profile-text">
                <p>
                  <FormattedMessage id="presentation.hobbies.more" />
                </p>
                <p>
                  <FormattedMessage id="presentation.hobbies.rugby" />
                  <br />
                  <FormattedMessage id="presentation.hobbies.rugby_2" />
                </p>
                <Divider size={1} margin={6} />
                <p>
                  <FormattedMessage id="presentation.hobbies.travels" />
                  <br />
                  <FormattedMessage id="presentation.hobbies.travels_2" />
                </p>
                <Divider size={1} margin={6} />
                <p>
                  <FormattedMessage id="presentation.hobbies.lotr" />
                  <br />
                  <FormattedMessage id="presentation.hobbies.lotr_2" />
                </p>
                <Divider size={1} margin={6} />
                <p>
                  <FormattedMessage id="presentation.hobbies.other" />
                  <br />
                  <FormattedMessage id="presentation.hobbies.other_2" />
                </p>
              </div>
            </div>
          </Col>
          <Col lg={14} sm={12} xs={24}>
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
