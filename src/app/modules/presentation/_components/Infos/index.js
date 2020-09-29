import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import moment from 'moment'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'

import { Row, Divider, Descriptions, Icon, ICONS_LIST, ICONS_SIZE } from 'lib/index'
import files from 'app/assets/files'
import { colors } from 'app/assets/themes'

const Infos = ({ intl }) => {
  return (
    <>
      <Slide right>
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
      </Slide>
      <Divider colors={colors.blue} />
      <Slide right>
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
      </Slide>

      <Slide bottom>
        <Row type="flex" justify="center">
          <a className="download download-primary" href={files.cv} download="CV_Benjamin_ALEXANDRE">
            <Icon name={ICONS_LIST.download} size={ICONS_SIZE.default} />
            <FormattedMessage id="presentation.download_cv" />
          </a>
        </Row>
      </Slide>
    </>
  )
}

Infos.propTypes = {
  intl: PropTypes.shape().isRequired
}

export default injectIntl(Infos)
