import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import moment from 'moment'
import PropTypes from 'prop-types'

import { Row, Divider, Descriptions, Icon, ICONS_LIST, ICONS_SIZE, ScrollAnimation } from 'lib'
import files from 'assets/files'
import { colors } from 'assets/themes'
import { datas } from 'utils/datas'

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
            <FormattedMessage id="presentation.desc" values={{ fullName: <b>{datas.fullName}</b> }} />
          </p>
        </Row>
      </ScrollAnimation>
      <Divider colors={colors.blue} opacity={0.3} />
      <ScrollAnimation animateIn="fadeInRight" duration={1.5}>
        <Descriptions column={{lg: 2, md: 1, xs: 1}}>
          <Descriptions.Item label={intl.formatMessage({ id: 'presentation.item.name' })}>
            {datas.fullName}
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
        <Row  justify="center">
          <a className="download download-primary" href={files.cv.url} download={files.cv.name}>
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
