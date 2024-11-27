import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Row, Col, Icon, ICONS_LIST, ICONS_SIZE, Layout, PageTitle } from 'lib'

import { colors } from 'assets/themes'
import { datas } from 'utils/datas'

const Contact = ({ intl }) => {
  return (
    <Layout id="contact" modulo={0}>
      <PageTitle
        title={intl.formatMessage({
          id: 'menu.contact'
        })}
        position="center"
      />
      <Row justify="center" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <h5>
            <FormattedMessage id="contact.desc" />
          </h5>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col>
          <h5>
            <FormattedMessage id="contact.can_contact_me_email" />
          </h5>
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ marginBottom: '24px' }} gutter={32}>
        <Col>
          <Icon name={ICONS_LIST.mail} size={ICONS_SIZE.default} color={colors.blue} />
        </Col>
        <Col>
          <a href={`mailto:${datas.email}`}>{datas.email}</a>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col>
          <h5>
            <FormattedMessage id="contact.or_find_me" />
          </h5>
        </Col>
      </Row>

      <Row justify="center" align="middle" gutter={32}>
        <Col className="contact-network">
          <a href={datas.links.linkedin} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.linkedin} size={ICONS_SIZE.default} color={colors.blue} />
          </a>
        </Col>
        <Col className="contact-network">
          <a href={datas.links.github} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.github} size={ICONS_SIZE.default} color={colors.blue} />
          </a>
        </Col>
        <Col className="contact-network">
          <a href={datas.links.facebook} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.facebook} size={ICONS_SIZE.default} color={colors.blue} />
          </a>
        </Col>
      </Row>
    </Layout>
  )
}

Contact.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Contact)
