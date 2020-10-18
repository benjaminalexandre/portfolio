import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Button, ICONS_LIST, ICONS_SIZE, message, Layout, PageTitle } from 'lib'

import { colors } from 'assets/themes'
import { datas } from 'utils/datas'

const Contact = ({ intl }) => {
  const onClickEmail = async () => {
    try {
      await navigator.clipboard.writeText(datas.email)
      message.success(intl.formatMessage({id: 'contact.email_copy_in_clipboard'}))
    } catch (err) {
      message.error(intl.formatMessage({id: 'contact.error_email_copy_in_clipboard'}))
    }
  }

  return (
    <Layout id="contact" modulo={0}>
      <PageTitle
        title={intl.formatMessage({
          id: 'menu.contact'
        })}
        position="center"
      />
      <Row  justify="center" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <h5>
            <FormattedMessage id="contact.desc" />
          </h5>
        </Col>
      </Row>

      <Row  justify="center" align="middle">
        <Col>
          <h5>
            <FormattedMessage id="contact.can_contact_me_email" />
          </h5>
        </Col>
      </Row>

      <Row  justify="center" align="middle" style={{ marginBottom: '24px' }} gutter={32} >
        <Col>
          <Icon name={ICONS_LIST.mail} size={ICONS_SIZE.default} color={colors.blue}/>
        </Col>
        <Col>
          <Button onClick={onClickEmail}>{datas.email}</Button>
        </Col>
      </Row>

      <Row  justify="center" align="middle">
        <Col>
          <h5>
            <FormattedMessage id="contact.or_find_me" />
          </h5>
        </Col>
      </Row>

      <Row  justify="center" align="middle" gutter={32} >
        <Col>
          <a href={datas.links.linkedin} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.linkedin} size={ICONS_SIZE.default} color={colors.blue}/>
          </a>
        </Col>
        <Col>
          <a href={datas.links.github} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.github} size={ICONS_SIZE.default} color={colors.blue}/>
          </a>
        </Col>
        <Col>
          <a href={datas.links.facebook} target="_blank" rel="noreferrer">
            <Icon name={ICONS_LIST.facebook} size={ICONS_SIZE.default} color={colors.blue}/>
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
