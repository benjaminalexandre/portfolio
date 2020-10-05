import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import moment from 'moment'
import PropTypes from 'prop-types'

import { Row, Divider, Descriptions, Icon, ICONS_LIST, ICONS_SIZE } from 'lib'
import { ScrollAnimation } from 'modules/shared/components'
import files from 'app/assets/files'
import { colors } from 'app/assets/themes'

const Infos = ({ intl }) => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInRight" duration={1.5}>
        <Row>
          <h2>
            <FormattedMessage id="presentation.hello" />
          </h2>
        </Row>
        <Row>
          <p>
            <FormattedMessage id="presentation.desc" values={{ fullName: <b>Benjamin ALEXANDRE</b> }} />
          </p>
        </Row>
      </ScrollAnimation>
      <Divider colors={colors.blue} opacity={0.3} />
      <ScrollAnimation animateIn="fadeInRight" duration={1.5}>
        <Descriptions column={2}>
          <Descriptions.Item label={intl.formatMessage({ id: 'presentation.item.name' })}>
            Benjamin ALEXANDRE
          </Descriptions.Item>

          <Descriptions.Item label={intl.formatMessage({ id: 'presentation.item.city' })}>
            <FormattedMessage id="presentation.item.location" />
          </Descriptions.Item>

          <Descriptions.Item label={intl.formatMessage({ id: 'presentation.item.age' })}>
            <FormattedMessage
              id="presentation.item.years_old"
              values={{ age: moment().diff(moment('1997-07-05'), 'years') }}
            />
          </Descriptions.Item>

          <Descriptions.Item label={intl.formatMessage({ id: 'presentation.item.job' })}>
            <FormattedMessage id="presentation.item.web_developer" />
          </Descriptions.Item>
        </Descriptions>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
        <Row type="flex" justify="center">
          <a className="download download-primary" href={files.cv} download="CV_Benjamin_ALEXANDRE">
            <Icon name={ICONS_LIST.download} size={ICONS_SIZE.default} />
            <FormattedMessage id="presentation.download_cv" />
          </a>
        </Row>
      </ScrollAnimation>
    </>
  )
}

Infos.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Infos)
